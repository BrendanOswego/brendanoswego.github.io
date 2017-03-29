var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(res,res,next){
    console.log('Something is happening');
    next();
});

router.get('/',function(req,res){
  res.json({message: 'Welcome to my API'});
});

router.route('/notes')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var note = new Note();      // create a new instance of the Bear model
        note.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        note.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Note created!' });
        });

    })

    .get(function(req,res){
      Note.find(function(err,notes){
        if(err){
          res.send(err);
        }
        res.json(notes);
      });
    });

router.route('/notes/:note_id')
  .get(function(req,res){
    Note.findById(req.params.note_id,function(err,note){
      if(err){
        res.send(err);
      }
      res.json(note);
    })
  })
  .put(function(req,res){
    Note.findById(req.params.note_id,function(err,note){
      if(err){
        res.send(err);
      }
      note.name = req.body.name;
      note.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({
          message: 'Note has been updated'
        })
      });
    })
  })

app.use('/api',router);

app.listen(port);

console.log('Using port: ' + port);

var mongoose = require('mongoose');
mongoose.connect('mongodb://BrendanOswego:node@ds143980.mlab.com:43980/brendanapi')

var Note = require('./model/note');
