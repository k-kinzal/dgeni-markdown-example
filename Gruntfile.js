module.exports = function (grunt) {
  // config
  grunt.initConfig({
    dgeni: {
      options: {
        packages: [
          'dgeni-markdown',
          'dgeni-packages/ngdoc'
        ],
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

