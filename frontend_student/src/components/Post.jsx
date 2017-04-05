import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/Post.css';
class Post extends Component {

	constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});
	render() {
	
		return(
			<div className="Post">
					<div className="Tab">
						<div className="Name">
							{this.props.Name}
						</div>
					
						<div className="Description">
							{this.props.Description}
						</div>

					</div>
					<MuiThemeProvider>
					<DropDownMenu 
						value={this.state.value}
	          			onChange={this.handleChange}
	          			autoWidth={true}>
	        				<MenuItem value={1} primaryText="rank" />
	        				<MenuItem value={2} primaryText="1" />
	        				<MenuItem value={3} primaryText="2" />
	        				<MenuItem value={4} primaryText="3" />
	        				<MenuItem value={5} primaryText="4" />
	        				<MenuItem value={6} primaryText="5" />
      				</DropDownMenu>
      				</MuiThemeProvider>
			</div>

		);
	}
}
export default Post;
