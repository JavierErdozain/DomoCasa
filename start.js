var express = require('express');
var path    = require("path");
var app     = express();

app.use(express.static('Cliente'));
app.get('/',function (req, res) {  
  res.sendFile(path.join(__dirname+'/Cliente/index.html'));    
});

//require('./app/controllers/leds')(app);

app.listen(3000, function() {
  console.log('Raspi Express server listening...');
});