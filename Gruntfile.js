/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/{,*/}*',
            '!dist/.git{,*/}*'
          ]
        }]
      }
    },
    // Task configuration.
    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs']
            },
            post: {}
          }
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'app/js/{,*/}*.js',
          '!app/js/vendor/{,*/}*.js'
        ]
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', [
    'clean:dist',
    'jshint',
    'useminPrepare',
    'concat:generated',
    'uglify:generated'
  ]);

};
