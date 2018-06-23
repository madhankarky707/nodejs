var fs = require('fs'); //require a file system module
var zlib = require('zlib'); // require a zlib module for compression  and decompression

//Compression
var read = fs.createReadStream("mad.txt") //reading a file
.pipe(zlib.createGzip()).pipe(fs.createWriteStream("mad.txt.gz")) // createGzip is used to compress a file and pipe is used to combine read and write 

console.log("compressed");

//Decompressiom
var read = fs.createReadStream("mad.txt.gz") //reading a compressed file
.pipe(zlib.createGunzip()).pipe(fs.createWriteStream("mad.pdf"))// createGunzip is used to compress a file and pipe is used to combine read and write 

console.log("De-compressed");