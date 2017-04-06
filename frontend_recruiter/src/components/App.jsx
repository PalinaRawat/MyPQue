import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.jsx';

//import Profile from './Profile.jsx';
//import Students from './Students.jsx';






export default class App extends Component {
  render() {
    return (

    	<div className="App">
   			<Header />
    		{this.props.children}



	{/*}<Profile>
    		{this.props.children}
  </Profile>

  <Students>
    {this.props.children}
  </Students>*/}


    	</div>

    );
  }
}
