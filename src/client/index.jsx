import React from 'react';
import {render} from 'react-dom';
import Search from './components/search.js'
// import Header from './components/header.js'
// var model = require('./model/model.js')

export default class App extends React.Component {

	

  render () {
    return  ( 
		<div>
		  <Header />
          <p onClick={model.getUserInfo({this.state.inputvalue})}>CLICK HERE</p>
          <p onClick={model.checkDataStore}>CHECK DATA STORE</p>
          <p onClick={model.checkFilteredData}>CHECK FILTERED DATA</p>
 		  <Search />
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