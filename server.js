var express = require('express');
var app = express();







const port = process.env.PORT || 3000;



app.listen(port, ()=>{
  console.log('playdd is listening');
  console.log('---------------------------------');
  console.log('Server running on port: ' + port);
  console.log('---------------------------------');
});
