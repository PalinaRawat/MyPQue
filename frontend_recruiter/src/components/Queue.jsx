import React, { Component } from 'react';
import Post from './Post';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Profile extends Component {

	constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  render() {

		return(

			<div>
				<p> Queue of the company will be diplayed!</p>
			</div>

		);
	}
}
