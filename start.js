//var connect = require('connect');
var fs = require('fs');
var httpServer = require('http');
var path = require('path');
var Url = require('url');


// localhost

var httpPort = process.env.PORT || 8000;

/* 
 
 see README.md for a more detailed write up 

*/

//////////////////////////////////////////////////////// HTTP - sends html/js/css to the browswer 

var sendHTML = function( filePath, contentType, response ){

  //console.log('sendHTML: ' + filePath) ;

  var pathSinParams = filePath.split('?')[0];
  if (pathSinParams.substring(pathSinParams.length - 1)=='?') 
    pathSinParams = pathSinParams.substring(0,str.length - 1);

  fs.exists(pathSinParams, function( exists ) {

        console.log(pathSinParams);
        if (exists) {
            fs.readFile(pathSinParams, function(error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });
}

var getFilePath = function(url) {
  var filePath = './' + url;
  if (url == '/' ) filePath = './index.html';
  return filePath;
}

var getContentType = function(filePath) {
   
   //var extname = path.extname(filePath);
   var extname = path.extname(Url.parse(filePath).pathname)
   var contentType = 'text/html';    
    console.log(filePath);
    console.log(extname);
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.ttf':
        	contentType = 'font/ttf';
          break;
        case '.otf':        
          contentType = 'font/opentype';
          break;
        case '.woff':
       
          contentType = 'application/binary';
          break;
        case '.eot':
       
          contentType = 'application/binary';
          break;
    }
    console.log(contentType);
    return contentType;
}

var onHtmlRequestHandler = function(request, response) {

  //console.log('onHtmlRequestHandler... request.url: ' + request.url) ;

  /*
   when this is live, nodjitsu only listens on 1 port(80) so the httpServer will hear it first but
   we need to direct the request to the mongodbServer
   */
  if ( process.env.PORT && url === '/messages') {
    
    // pass the request to mongodbServer

    return; 
  } 

  var filePath = getFilePath(request.url);
  var contentType = getContentType(filePath);

  //console.log('onHtmlRequestHandler... getting: ' + filePath) ;

  sendHTML(filePath, contentType, response); 

}

httpServer.createServer(onHtmlRequestHandler).listen(httpPort); 
