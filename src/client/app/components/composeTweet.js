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
		
	var promise = Model.getUserInfo(e.target.value)
	promise.then( (response) => {
			this.setState({
				userInfo: response
			})

			})
	
	},


render: function() {
	var userInformation = this.state.userInfo;
	console.log('THIS.STATE: ', this.state.userInfo)
	function mapInfo (item) {return item.name}
	if(userInformation !== null && ){
		document.getElementById('Results').innerHTML = userInformation.map(mapInfo) }
	    
	    return (
	      <div>
	      	<div><input onChange={this.handleChange}></input></div>
	      	<div id='Results'>Here-></div>
	      </div>
	      
	     );
	   }
});

module.exports = ComposeTweet;









// export default class ComposeTweet extends React.Component {
//  render() { 
//   return <div>

//   	<div onClick={this._handleClick}>Hello, world.</div>
//   	<input></input>

//   	</div>;
//  }
//  _handleClick() {
//   console.log('HELLO');
//  }


// }