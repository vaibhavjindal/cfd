var PDFJS=require('pdfjs-dist');
var fs = require('fs');
var data = new Uint8Array(fs.readFileSync('latex_project.pdf'));
PDFJS.getDocument(data).then(function (pdfDocument) {
  console.log('Number of pages: ' + pdfDocument.numPages);
});
