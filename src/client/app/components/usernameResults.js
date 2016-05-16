import React from 'react';
import {render} from 'react-dom';





export default class UsernameResults extends React.Component {
 	
 constructor() {
 	super()
 	this.state = { data: ['ITEM ONE'] }
 }	




 render() { 
  return <div>

  	<div onClick={this.getUsernames}>USERNAME RESULTS</div>
  	

  	</div>;
 }







}































// var UsernameResults = React.createClass({

// getInitialState: function(){
// 	return {
// 		data: null
// 	}
// },

// getUsernames: function(searchTerm) {
//   searchTerm = {'q':'bjorn bakeman'}
//   console.log('THIS IS THE FRONT END REQUEST BODY: ', searchTerm)
//   return fetch('lookup/', {
//     method: 'POST',
//     headers: requestHeaders,
//     body: JSON.stringify(searchTerm)
//   })
//   .then(function(searchResult){
//   	console.log('BROWSER RESPONSE: ', searchResult)
//     return searchResult.json()
//   })
//   .then( function(response) {
//   	  console.log('POST JSON RESPONSE: ', response)
//       return response;
//     })
//  },

// updateState: function(){

// },


//  render: function() { 
//   return <div>

//   	<div onClick={this.getUsernames}>USERNAME RESULTS</div>
  	

//   	</div>;
//  }


// })


// module.exports = UsernameResults;