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
            '.tmp/',
            'dist/{,*/}*',
            '!dist/.git{,*/}*'
          ]
        }]
      }
    },

    // Task configuration.
    useminPrepare: {
      html: ['.tmp/index.html', 'app/{,*/}*.html', '!app/index.html']
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
            '*.php',
            'img/{,*/}*.*',
            'fonts/{,*/}*.*',
            'video/{,*/}*.*'
          ]
        },
        {
          expand: true,
          flatten: true,
          cwd: '.tmp',
          dest: 'dist',
          src: [
            'app/*.html',
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

    //imagemin: {
    //  dist: {
    //    files: [{
    //      expand: true,
    //       cwd: 'app/img',
    //       src: '{,*/}*.{png,jpg,jpeg,gif}',
    //       dest: 'dist/img'
    //     }]
    //   }
    // },

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

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeComments: true
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html'],
          dest: 'dist'
        }]
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

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app',
          livereload: 35729,
          hostname: '0.0.0.0',
          middleware: function(connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static('app')
            ];
          }
        }
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: ['app/js/{,*/,**/}*.{js,json}'],
        tasks: ['jshint:all'],
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        },
        files: [
          'app/{,*/,**/}*.html',
          'app/css/{,*/}*.css',
          'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['app/*.html']
      }
    },

    inline: {
      dist: {
        options:{
          cssmin: true
        },
        src: ['app/*.html'],
        dest: '.tmp/'
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-inline');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-filerev');
  // grunt.loadNpmTasks('grunt-newer');

  // Default task.
  grunt.registerTask('default', [
    'build',
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'jshint',
    'wiredep',
    'inline',
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'cssmin:generated',
    'copy:dist',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('serve', [
    'jshint',
    'wiredep',
    'connect',
    'watch'
  ]);

};
