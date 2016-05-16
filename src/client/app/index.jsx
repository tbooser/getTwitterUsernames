import React from 'react';
import {render} from 'react-dom';
import ComposeTweet from './components/composeTweet.js';

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

