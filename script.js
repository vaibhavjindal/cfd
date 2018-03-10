var pdfjs=require('pdfjs-dist');
pdfjs.getDocument('helloworld.pdf');
pdfjs.getDocument('helloworld.pdf').then(function(pdf) {
  console.log('It Works)
});
