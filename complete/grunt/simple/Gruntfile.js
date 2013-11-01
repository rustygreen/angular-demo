module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    concat: {
      files: {
        src: ['src/file-1.js', 'src/file-2.js'],
        dest: 'combined.js'
      }
    },

    uglify: {
      build: {
        src: 'combined.js',
        dest: 'combinde-ugly.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};