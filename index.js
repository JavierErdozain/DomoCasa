var express = require('express');
var path    = require("path");
var app     = express();

app.use(express.static('Cliente/public/'));
app.get('/',function (req, res) {  
  res.sendFile(path.join(__dirname+'/Cliente/public/index.html'));    
});

//require('./Servidor/Controladores/Interruptores/interruptor')(app);

app.listen(8000, function() {
  console.log('Raspi Express server listening...');
});


var gpio = require("pi-gpio");
app.get('/luces/:led/:position',function(req, res) {
    var led = req.params.led;
    var pos = req.params.position;
   
    gpio.open(12, "output", function(err) {     // Open pin 16 for output
      if (pos=="on")    
        gpio.write(12, 1, function() {          // Set pin 16 high (1)
	    gpio.close(12);                     // Close pin 16
        });
      else
		gpio.write(12, 0, function(){
	  		gpio.close(12);
		}); 
    });

    res.sendStatus(200);
});

