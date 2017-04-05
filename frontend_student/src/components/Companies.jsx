import React, { Component } from 'react';
import Post from './Post';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
  block: {
  	marginTop: 15,
    maxWidth: 130,
    display: 'inline-block',
   
  },
  checkbox: {
  },
};


export default class Profile extends Component {

	constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
		//				<Post link="http://tinyurl.com/gmohwa2" title="Followers++" img={require('../Imgs/followers++.png')} description="Followers++ is a mobile Android application that discovers Twitter users that are likely to follow you back. This project utilizes the asynchronous android libraries and the Twitter api."/>
		//				<Post link="http://tinyurl.com/hwzu9hx" title="KitPvP" img={require('../Imgs/minecraft.png')} description="KitPvP is a minecraft server plugin that utilizes the bukkit api to build a structured kit based player vs player combat system inside minecraft. This project utilized my knowledge in data structures and algorithms to develop efficient server code."/>

		var data = [
			{
				'Name': 'Facebook',
				'Description': 'HEllo'

			},
			{
				'Name': 'Google',
				'Description': '123'

			},
			
			
		];

		let mapped = data.map((tableItem, i) => {
			return(

				<Post key={i} Name={tableItem.Name} Description={tableItem.Description}  />
		
			);
		})
		return(
			<div>
			<MuiThemeProvider>
				<div className="Checkbox" style={styles.checkbox}>
				<Checkbox 
      				label="Full-time"
      				style={styles.block} />
      			<Checkbox 
      				label="Internship"
      				style={styles.block} />
      			<Checkbox 
      				label="Freshman"
      				style={styles.block} />
      			<Checkbox 
      				label="Sophomore"
      				style={styles.block} />
      			<Checkbox 
      				label="Junior"
      				style={styles.block} />
      			<Checkbox 
      				label="Senior"
      				style={styles.block} />
      			<Checkbox 
      				label="Sponsoring visa"
      				style={styles.block} />
            <Checkbox 
              label="Computer Science"
              style={styles.block} />
            <Checkbox 
              label="Computer Engineering"
              style={styles.block} />
            <Checkbox 
              label="Electrical Engineering"
              style={styles.block} />

      			</div>

    		</MuiThemeProvider>


    		
				{mapped}
				
				
			</div>
			
		);
	}
}
