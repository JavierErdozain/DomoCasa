var express = require('express');
var path    = require("path");
var app     = express();

app.use(express.static('Cliente/public/'));
app.get('/',function (req, res) {  
  res.sendFile(path.join(__dirname+'/Cliente/public/index.html'));    
});

//require('./Servidor/Controladores/Interruptores/interruptor')(app);

app.listen(80, function() {
  console.log('Raspi Express server listening...');
});