# getTwitterUsernames

gif demo - 

http://g.recordit.co/mEQJwpyLyS.gif

# Setup

	- npm install

	- put Twitter authentication credentials in the config in server.js

	- run node server.js

	- in a different terminal window, run webpack, which will create a folder called public that contains the bundled script

	- open localhost:4000

# About

- This project uses React for the view, hooked up to a Backbone model.

- In the components folder: 
	
	- makeSelection.js provides functionality for clicking on a username and having it replace the handle already typed.

	- user.js contains the search and render functionalities. 

- userInfoModel.js in the models folder contains the Backbone data model.

- request.js under requests contains the POST request to the server, which then makes a request to the Twitter API.







- The server uses twitter-node-client, which facilitates Twitter authentication and making a request to the API. 

  github.com/BoyCook/TwitterJSClient 