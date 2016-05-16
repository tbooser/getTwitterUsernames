import React from 'react';
import {render} from 'react-dom';
var Model = require('../model/model.js')




var ComposeTweet = React.createClass({

getInitialState: function(){
	return (
			{
				userInfo: null
			}
		)
}, 

handleChange: function(e){
	
	if( ( e.target.value ).indexOf('@') === -1 ) { return false } 
	
	




	else if ( ( e.target.value ).indexOf('@') > -1 ){
	
		var atIndex = (e.target.value).indexOf('@')	

		var newTargetValue = (e.target.value).substr(atIndex + 1, e.target.value.length)
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
	      	<div><input onChange={this.handleChange}></input></div>
	      	<div id='Results'>Here-></div>
	      </div>
	      
	     );
	   }
});

module.exports = ComposeTweet;







