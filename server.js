var express = require('express');
var Path = require('path');
var routes = express.Router();

//Route to index.html
var assetFolder = Path.resolve(__dirname, './src/client/public');
  routes.use(express.static(assetFolder));

if (process.env.NODE_ENV !== 'test') {
  routes.get('/*', function(req, res){
   res.sendFile(Path.join( __dirname + './src/client/public/' ));
  })






var config = {
    "consumerKey": process.env.consumerKey,
    "consumerSecret": process.env.consumerSecret,
    "accessToken": process.env.accessToken,
    "accessTokenSecret": process.env.accessTokenSecret,
    "callBackUrl": process.env.callBackUrl 
}


// var config = {
//     "consumerKey": "",
//     "consumerSecret": "",
//     "accessToken": "",
//     "accessTokenSecret": "",
//     "callBackUrl": "" 
// }





var Twitter = require('twitter-node-client').Twitter;

var twitter = new Twitter(config);




routes.post('/lookup', function(req, res){

  var error = function (err, response, body) {
        console.log('ERROR ', err);  
    };
 
  var success = function (data) {
        console.log('Data', JSON.parse(data));
        res.send(JSON.parse(data))
    };

  return twitter.getCustomApiCall('/users/search.json',  req.body, error, success)
  

  })




var app = express();
  app.use( require('body-parser').json() )
  app.use('/', routes);



module.exports = app;
 
  app.use('/', routes);
  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port", port);

} else {

  module.exports = routes;

};