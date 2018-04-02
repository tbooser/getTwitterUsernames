var express = require("express");
var Path = require("path");
var routes = express.Router();
var Config = require("config.js");

//Route to index.html
var assetFolder = Path.resolve(__dirname, "./src/client/");
routes.use(express.static(assetFolder));

if (process.env.NODE_ENV !== "test") {
  routes.get("/*", function(req, res) {
    res.sendFile(assetFolder + "/index.html");
  });

  var config = {
    consumerKey: "dLaow9LH2naJsoyudyhMdBYTl",
    consumerSecret: "MwAjkERXHF6uRUnCzmlCRHUBkaGKdPXR3Wq8kHLisgDSUCiKzX",
    accessToken: "594219134-xxQfKJ4fDtyYIoOAM325uZ2soQWRFStn3aiTw1i6",
    accessTokenSecret: "82Ua2geUUxlxi5qnDTg3c821OeaY9Y2QqsMHxiTVZNXTb",
    callBackUrl: "localhost"
  };

  var Twitter = require("twitter-node-client").Twitter;

  var twitter = new Twitter(config);

  routes.post("/lookup", function(req, res) {
    var error = function(err, response, body) {
      console.log("ERROR ", err);
    };

    var success = function(data) {
      console.log("Data", JSON.parse(data));
      res.send(JSON.parse(data));
    };

    return twitter.getCustomApiCall("/users/search.json", req.body, error, success);
  });

  var app = express();
  app.use(require("body-parser").json());
  app.use("/", routes);

  module.exports = app;

  app.use("/", routes);
  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port", port);
} else {
  module.exports = routes;
}
