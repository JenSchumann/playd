var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

// index route
app.get('/', function(req, res){
    res.render('index.html', {

    });
});


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/playd'
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
          console.log('playd connected to mongo');
});


const port = process.env.PORT || 3000;



app.listen(port, ()=>{
  console.log('playdd is listening');
  console.log('---------------------------------');
  console.log('Server running on port: ' + port);
  console.log('---------------------------------');
});
