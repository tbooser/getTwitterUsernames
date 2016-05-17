import React from 'react';
import {render} from 'react-dom';
import UserView from './components/userView.js'

export default class App extends React.Component {


  render () {
    return  ( 
		<div>
 		  <UserView />
		</div>
	)	
  }
}

render(<App/>, document.getElementById('app'));

