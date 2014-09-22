module.exports = function (grunt) {
  // config
  grunt.initConfig({
    dgeni: {
      options: {
        basePath: 'angular/src/'
      },
      src: ['**/*.js'],
      dest: 'docs/'
    }
  });
  // load task
  grunt.loadNpmTasks('grunt-dgeni');
  // register tasks
  grunt.registerTask('default', ['dgeni']);
};

