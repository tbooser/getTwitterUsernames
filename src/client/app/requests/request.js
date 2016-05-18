require('./request-helpers.js'); // Headers


exports.getUserInfo = function(searchTerm) {
  
  var formattedSearch = { 'q': searchTerm }
  
console.log('seardsfsfs', formattedSearch)

  return fetch('lookup/', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(formattedSearch)
  })

  .then(function(searchResult){
    return searchResult.json()
  })

  .then( function(response) {
      return response;
    })

};


