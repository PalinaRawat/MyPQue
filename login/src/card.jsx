import React, { Component } from 'react';
import './card.css'
export default class Card extends Component {
	render() {
		return(
			<div className = "Card">
				LOGIN:
				<form action="/login" method="post" id="login">
					<div className = "form-group">
						<input placeholder="Email" type="text" name="email" />
					</div>
					<div className = "form-group">
						<input placeholder="Password" type="password" name="password" />
					</div>
					<button> login </button>
				</form>

				SIGNUP:
				<form action="/login" method="post" id="login">
					<div className = "form-group">
						<input placeholder="Email" type="text" name="email" />
					</div>
					<div className = "form-group">
						<input placeholder="Password" type="password" name="password" />
					</div>
					<button> login </button>
				</form>
			</div>
		);
	}
}