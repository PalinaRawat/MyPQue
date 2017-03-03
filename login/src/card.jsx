import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import {indigoA700} from 'material-ui/styles/colors';

import './card.css'




const style = {
  margin: 12,
};

const toggleStyles = {
	block: {
		maxWidth: 250
	},
	toggle: {
		marginTop: 20,
	}
}

export default class Block extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		};
		this.toggle = this.toggle.bind(this);
	}
	toggle(e, val) {
		this.setState({
      		toggle: val
    	});
	}
	render() {
		return(
			<div className="Container">
				<MuiThemeProvider>
					<div style={toggleStyles.block}>
						<Toggle style={toggleStyles.toggle} label="Recruiter Signup" onToggle={this.toggle}/>
					</div>
				</MuiThemeProvider>
				<Card toggle={this.state.toggle}/>
			</div>
		);
	}
};

class Card extends Component {
	render() {
		const toggle = this.props.toggle;
		let div = <StudentCard />;

		if(toggle) {
			//render recruiter signup
			div = <RecruiterCard />;
		}
		else {
			//render student card
			div = <StudentCard />;
		}
		return(
			<div>
				{div}
			</div>
		);
	}
}
class RecruiterCard extends Component {
	render() {
		return(
			<div className="Card">
				<RecSignUp />
				<RecLogin />
			</div>
		);
	}
}
class StudentCard extends Component {
	render() {
		return(
			<div className="Card">
				<Signup/>
				<Login/>
			</div>
		);
	}
}

class RecSignUp extends Component {
	render() {
		return(
			<div id="Signup" className="flexitem">
	    		<form action="/signupCompany" method="post" >
		       		<div className ="form-group">
		            	<input type="text" placeholder="Company Name" class="form-control" name="companyName"/>
		        	</div>
		        	<div className="form-group">
		            	<input type="text" placeholder="Company Login" class="form-control" name="companyLogin"/>
		        	</div>
		        	<div className="form-group">
		            	<input type="password" placeholder="Company Password" name="companyPassword"/>
		        	</div>
		        	<MuiThemeProvider>
     			 		<RaisedButton type="submit" label="Sign up" primary={true} style={style} />
    				</MuiThemeProvider> 
		    	</form>
		    </div>
		);
	}
}

class RecLogin extends Component {
	render() {
		return(
			<div id="Login" className="flexitem">

			    <form action="/loginCompany" method="post" id="login">
			        <div class="form-group">
			            <input placeholder="Company Login" type="text" name="companyLogin"/>
			        </div>
			        <div class="form-group">
			            <input placeholder="Company Password" type="password" name="companyPassword"/>
			        </div>
			        <MuiThemeProvider>
     			 		<RaisedButton type="submit" label="Login" primary={true} style={style} />
    				</MuiThemeProvider> 
		    	</form>
	    	</div>
		);
	}
}
class Signup extends Component {
	render() {
		return(
			<div id = "Signup" className="flexitem">
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
		        	<MuiThemeProvider>
     			 	<RaisedButton type="submit" label="Sign up" primary={true} style={style} />
    				</MuiThemeProvider> 
		    	</form>
			</div>
		);
	}
}

class Login extends Component {
	render() {
		return(
			<div id="Login" className="flexitem">

			    <form action="/login" method="post" id="login">
			        <div class="form-group">
			            <input placeholder="Email" type="text" name="email"/>
			        </div>
			        <div class="form-group">
			            <input placeholder="Password" type="password" name="password"/>
			        </div>
			        <MuiThemeProvider>
     			 	<RaisedButton type="submit" label="Login" primary={true} style={style} />
    				</MuiThemeProvider> 
		    	</form>
	    	</div>
		);
	}
}