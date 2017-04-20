import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/PostSpeaking.css';
class PostSpeaking extends Component {

	constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});
	render() {

		return(

			<div className="Post" >
					<div className="Tab" id="Speaking" >
						<div className="firstName">
							{this.props.firstName}
						</div>

						<div className="lastName">
							{this.props.lastName}
						</div>

					<div className="link">
					    {this.props.link}
			    </div>

        </div>
      </div>


		);
	}
}
export default PostSpeaking;
