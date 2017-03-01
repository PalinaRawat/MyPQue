import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.jsx';

import Profile from './Profile.jsx';

	




export default class App extends Component {
  render() {
    return (
    	
    	<div className="App">
   			<Header>
    		{this.props.children}
    	</Header>
   

		<Profile>
    		{this.props.children}
    	</Profile>
   

    	</div>
    	
    );
  }
}



