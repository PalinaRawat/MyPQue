import React, { Component } from 'react';
import '../Css/Login.css'
export default class Login extends Component {
	render() {
		return(
			<div className="Login">
				<form>
					Email:
					<br />
					<input type="text" name="username" />
					Password:
					<br />
					<input type="password" name="password" />
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}
}