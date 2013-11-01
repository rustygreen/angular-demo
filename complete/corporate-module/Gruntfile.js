// Generated on 2013-10-03 using generator-angular 0.4.0
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //angularVersion: '1.1.5',
    autoprefixer: {
      options: ['last 1 version'],
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
          }
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'src')
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'test')
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, 'dist')
            ];
          }
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              'dist/*',
              '!dist/.git*'
            ]
          }
        ]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/**/*.js'
      ]
    },
    concat: {
      // Latest version.
      latest: {
        src: ['src/config.js', 'src/**/*.js', '!src/**/*Spec.js'],
        dest: 'dist/corporate-latest.js'
      },

      // Versioned.
      versioned: {
        src: ['src/config.js', 'src/**/*.js', '!src/**/*Spec.js'],
        dest: 'dist/corporate-<%= pkg.version %>.js'
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    ngmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: '*.js',
            dest: 'dist'
          }
        ]
      }
    },
    uglify: {
      // Latest version.
      latest: {
        files: {
          'dist/corporate-latest.min.js': ['dist/corporate-latest.js']
        }
      },

      versioned: {
        files: {
          'dist/corporate-<%= pkg.version %>.min.js': ['dist/corporate-<%= pkg.version %>.js']
        }
      }
    },

    ngdocs: {
      options: {
        dest: '<%= yeoman.dist %>/docs',
        scripts: [
          'http://code.jquery.com/jquery-1.10.1.min.js',
          'http://code.angularjs.org/<%= angularVersion %>/angular.min.js',
          'http://code.angularjs.org/<%= angularVersion %>/angular-resource.min.js',
          'http://js.arcgis.com/3.6/init.js',
          'http://tsstools.com/<%= appConfig.envKey %>/cdn/angular-transcend/transcend.min.js'
        ],
        html5Mode: false,
        title: 'Transcend Angular JS Documentation',
        image: 'http://transcendspatial.com/images/tss-logo.png',
        imageLink: 'http://transcendspatial.com'
      },
      api: {
        src: ['<%= yeoman.app %>/**/*.js', '!<%= yeoman.app %>/**/*Spec.js'],
        title: 'Transcend Modules API'
      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'autoprefixer',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'test',
    'clean:dist',
    'concat',
    'ngmin',
    'uglify'
//    'ngdocs'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);
};