import React from 'react';
import {render} from 'react-dom';
import ComposeTweet from './components/composeTweet.js'
import Header from './components/header.js'
import UsernameResults from './components/usernameResults.js'
var model = require('./model/model.js')

export default class App extends React.Component {

	

  render () {
    return  ( 
		<div>
 		  <ComposeTweet />
		</div>
	)	
  }
}

render(<App/>, document.getElementById('app'));




	// constructor(props){
	// 	super(props)

	// 	this.state = {
	// 		userInfo
	// 	}
	// }



			  // <Header />
     //      <p onClick={model.getUserInfo}>CLICK HERE</p>
     //      <p onClick={model.checkDataStore}>CHECK DATA STORE</p>
     //      <p onClick={model.checkFilteredData}>CHECK FILTERED DATA</p>
 		  // <UsernameResults data={this.getUsernames}/>