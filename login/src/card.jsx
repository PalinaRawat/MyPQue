import React, { Component } from 'react';
import './card.css'
export default class Card extends Component {
	render() {
		return(
			<div className="Card">
	            <Signup/>
	            <Login/>
			</div>
		);
	}
}

class Signup extends Component {
	render() {
		return(
			<div id = "Signup" className="flexitem">
	    		Sign Up
	    		<form action="/signup" method="post" >
		       		<div className ="form-group">
		            	<input type="text" placeholder="First Name" class="form-control" name="firstName"/>
		        	</div>
		        	<div className="form-group">
		            	<input type="text" placeholder="Last Name" class="form-control" name="lastName"/>
		        	</div>
		        	<div className="form-group">
		            	<input type="text" placeholder="Email" name="email"/>
		        	</div>
		        	<div className="form-group">
		            	<input type="password" placeholder="Password" name="password"/>
		        	</div>
		    	</form>
			</div>
		);
	}
}

class Login extends Component {
	render() {
		return(
			<div id="Login" className="flexitem">
			    Login
			    <form action="/login" method="post" id="login">
			        <div class="form-group">
			            <input placeholder="Email" type="text" name="email"/>
			        </div>
			        <div class="form-group">
			            <input placeholder="Password" type="password" name="password"/>
			        </div>
		    	</form>
	    	</div>
		);
	}
}