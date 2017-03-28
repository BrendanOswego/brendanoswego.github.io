var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(res,res,next){
    console.log('Something happend');
    next();
});



router.get('/',function(req,res){
  res.json({message: 'Welcome to my API'});
});

router.route("/notes").post(function(req,res){
  var note = new Note();
  note.name = req.body.name;
  note.save(function(err){
    if(err)res.send(err);

    res.json({message: 'Note Created'});
  });
});

app.use('/api',router);

app.listen(port);

console.log('Using port: ' + port);

var mongoose = require('mongoose');
mongoose.connect('mongodb://BrendanOswego:Newyork96!@ds143980.mlab.com:43980/brendanapi');

var Note = require('./server/model/note');
