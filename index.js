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


var piOnOf = require('onoff').Gpio;
app.get('/luces/:led/:position',function(req, res) {
    var led = req.params.led;
    var pos = req.params.position;

    console.log(led);
    console.log(pos);
    var led = new Gpio(led, pos==='on' ? 1:0);
    res.sendStatus(200);
});