require('./request-helpers.js'); // Headers


exports.getUserInfo = function(searchTerm) {
  
  var formattedSearch = { 'q': searchTerm }
  
  console.log('Request body ---->  ', formattedSearch)
  
  return fetch('lookup/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(formattedSearch)
  })

  .then(function(searchResult){
  	console.log('Response Status ----> ', searchResult)
    return searchResult.json()
  })

  .then( function(response) {
  	  console.log('Response Content ----> ', response)
      return response;
    })

};


