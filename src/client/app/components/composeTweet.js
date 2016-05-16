import React from 'react';
import {render} from 'react-dom';
var Model = require('../model/model.js');




var ComposeTweet = React.createClass({

getInitialState: function(){
	
	return (
			
			{ userInfo: null }

		);
	}, 

handleChange: function(e){
	

	var atIndex = ( e.target.value ).indexOf( '@' );  

		// ^ Gets the current value of the '@' symbol.	
	
	var newTargetValue = ( e.target.value ).substr( atIndex + 1, e.target.value.length );

		// ^ Trims the query to start one index past the '@' symbol.

	var spaceIndex = newTargetValue.indexOf(' '); 

		// ^ Checks the trimmed query for spaces.

	if( ( e.target.value ).indexOf( '@' ) === -1 ) { return false }
		
		// ^ If the '@' symbol is not present in the input, don't send the request.

	else if ( spaceIndex === -1 && atIndex > -1 && newTargetValue.length >= 2 ){   
	 
		// The 'else if'  statement above checks for 3 things:	
		 	
		  // Checks if there are no spaces in the query 
		  // Checks if the '@' symbol is present in the input
		  // Checks that the text that follows the '@' symbol is at least 2 characters in length.
	
		
		console.log('newTargetValue', atIndex)

	var promise = Model.getUserInfo(newTargetValue)
	
	promise.then( (response) => {

			this.setState({

				userInfo: response

				})
			})

		}

	},


render: function() {
	
	function mapInfo (item) {return item.name}
	
	if( this.state.userInfo !== null ){
		
		document.getElementById('Results').innerHTML = this.state.userInfo.map(mapInfo) }
	    
	    return (

	      <div>

	      	<div>

	      		<input onChange={this.handleChange}></input>

	      	</div>
	      
	      	<div id='Results'>Here-></div>
	      
	      </div>
	      
	     
	    );
	}

});

module.exports = ComposeTweet;







