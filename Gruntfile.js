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
      html: ['app/{,*/}*.html']
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            '*.php',
            'img/{,*/}*.*',
            'fonts/{,*/}*.*',
            'video/{,*/}*.*'
          ]
        }]
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['dist/{,*/}*.html'],
      js: ['dist/js/{,*/}*.js'],
      css: ['dist/css/{,*/}*.css'],
      options: {
        assetsDirs: [
          'dist',
          'dist/img',
          'dist/css'
        ],
        patterns: {
          js: [[/(img\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          'dist/js/{,*/}*.js',
          'dist/css/{,*/}*.css',
          'dist/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          'dist/fonts/*'
        ]
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-filerev');

  // Default task.
  grunt.registerTask('default', [
    'clean:dist',
    'jshint',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'copy:dist',
    'filerev',
    'usemin'
  ]);

};
