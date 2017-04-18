import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/Post.css';



const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};


class Post extends Component {
	

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
					<Checkbox
      					checkedIcon={<ActionFavorite />}
      					uncheckedIcon={<ActionFavoriteBorder />}
      					label="Select"
     					style={styles.checkbox}
    				/>
      				</MuiThemeProvider>
			</div>

		);
	}
}
export default Post;