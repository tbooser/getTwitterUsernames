require('../request-helpers.js'); // Headers






let dataStore = {};














exports.getUserInfo = function(searchTerm) {
  var formattedSearch = {'q': searchTerm}
  console.log('THIS IS THE FRONT END REQUEST BODY: ', formattedSearch)
  return fetch('lookup/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(formattedSearch)
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


