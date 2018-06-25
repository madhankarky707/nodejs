var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');

var app = express();
var router = express.Router();

app.use(router);
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/Storage');

var Data = mongoose.Schema({
    name: String,
    address: String
})
var mongodbDatabase = mongoose.model('data',Data);

app.route("/")

.get(function(req,res){
     if(req.url){
        res.sendFile(__dirname + "/" +"home.html");
     
     }
           
})
.post(function(req,res){
       var newPerson = new mongodbDatabase({
                name: req.body.name,
                address: req.body.address,
             });
             newPerson.save(function(err,data){
                console.log(data)
            })
            res.end("<html><body><p>Saved</p></body></html>")
})


app.route("/:id")
.get(function(req,res){
    mongodbDatabase.findById("req.params.id",function(err,data){
      console.log(req.params.id);
    })
})
.put(function(req,res){
    mongodbDatabase.findByIdAndUpdate("req.params.id",{address: "madhan"},function(err,data){
       console.log(req.params.id);
    })
})
.delete(function(req,res){
    mongodbDatabase.findByIdAndRemove("req.params.id",function(err,data){
        res.send(req.params.id);
    })
})
    
app.listen(4000)
console.log("localhost:4000");


