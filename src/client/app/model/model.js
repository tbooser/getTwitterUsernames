// require('./request-helpers.js'); // Headers


window.requestHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  'Content-Type': "application/json"
};







let dataStore = {};














exports.getUserInfo = function(searchTerm) {
  searchTerm = {'q':'bjorn bakeman'}
  console.log('THIS IS THE FRONT END REQUEST BODY: ', searchTerm)
  return fetch('lookup/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(searchTerm)
  }).then(function(searchResult){
  	console.log('BROWSER RESPONSE: ', searchResult)
    return searchResult.json()
  })
  .then( function(response) {
  	  console.log('POST JSON RESPONSE: ', response)
      dataStore = response;
      return response;
    })
};



exports.checkDataStore = function(){
   console.log('DATA STORE: ', dataStore)
}

