var path = require('canonical-path');

var Package = require('dgeni').Package;

module.exports = new Package('angular-markdown', [
  require('dgeni-markdown')
])

.config(function(dgeni, log) {
  dgeni.stopOnValidationError = false;
  dgeni.stopOnProcessingError = false;
})

.config(function(readFilesProcessor) {
  readFilesProcessor.basePath = path.resolve(__dirname, 'angular/');
  readFilesProcessor.sourceFiles = [
    {
      include: 'src/**/*.js',
      basePath: 'src'
    }
  ];
})
.config(function(writeFilesProcessor) {
  writeFilesProcessor.outputFolder  = path.resolve(__dirname,'./docs');
});
