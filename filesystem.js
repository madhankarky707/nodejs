var fs = require("fs");
var buf = new Buffer(1024);

fs.open("input.txt","r+",function(err,fd){ // opening a file by passing an file name as an argument and second arg is method such as read,write..etc
    if(!err){
        console.log("file opened");
    }

    fs.readFile("input.txt", function (err, data) { //reading a file by passing file name as an arg
    if (err) {
      console.error(err);
    }
   console.log("Readed: " + data.toString());
    });


   fs.stat("input.txt",function(err,stats){  // stat function is used to find the info such as wheather it is a file,directory..etc
    if(!err){
    console.log("Is file" + stats.isFile()); // it returns  true, if it is an file
    }
   })

   
   //reading a file
   fs.read(fd,buf,0,buf.length,0,function(err,byt){ // reading a file fd-file buf -buffer 0-to start write with buf.length-length of buffer 0-position to start with
    if(!err){
    console.log(byt+"readed bytes");
    }
    })

   fs.close(fd,function(){  // closing a opened file
    if(!err){
    console.log("file closed");
    }
    })
    })// open function closed    
    
    fs.unlink("input.txt",function(){  // deleting a file
        console.log("Successfully deleted");
    })



//reading a file parameters:

// fd − This is the file descriptor returned by fs.open().

// buffer − This is the buffer that the data will be written to.

// offset − This is the offset in the buffer to start writing at.

// length − This is an integer specifying the number of bytes to read.

// position − This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.

// callback − This is the callback function which gets the three arguments, (err, bytesRead, buffer).