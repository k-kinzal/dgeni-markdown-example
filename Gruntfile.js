module.exports = function (grunt) {
  // config
  var config = grunt.initConfig({});
  // task
  grunt.registerTask('dgeni', [], function() {
    var Dgeni = require('dgeni');
    var done = this.async();
    var dgeni = new Dgeni([require('./dgeni.config')]);
    dgeni.generate().then(done);
  });
  grunt.registerTask('default', ['dgeni']);
};

