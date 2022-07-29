/* OUTDATED -- NEEDS TO BE UPDATED TO USE PROMISE-BASED pdf2json.js IN '../../lib' */
/*
const root = __dirname + '/../../';
var pdfParser = require(root + 'src/pdf2json/pdf2json.js');
var PDF_PATH = root + 'files/test.pdf';

pdfParser.pdf2json(PDF_PATH, function (error, pdf) {
    if(error != null){
        console.log(error);
    }else{
        console.log(JSON.stringify(pdf));
    }
});
*/

const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const pdfParser = require(path.join(root, 'lib', 'pdf2json.js'));
const PDF_PATH = path.join(root, 'files', 'test.pdf');

(async () => {
    try {
        const pdf = await pdfParser.pdf2json(PDF_PATH);
        console.dir(pdf);
    }
    catch (err) {
        console.error(err.stack);
    }
})();
