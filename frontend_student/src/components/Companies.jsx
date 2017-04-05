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


var data = [
      {
        'Name': 'Facebook',
        'Description': 'HEllo',
        'Looking for': 'Full-time',
        'Hiring': 'Freshman',
        'Required major': 'Computer Science',
        'Sponsoring visas': 'false'

      },
      {
        'Name': 'Google',
        'Description': '123',
        'Looking for': 'Internship',
        'Hiring': 'Freshman',
        'Required major': 'Computer Science',
        'Sponsoring visas': 'true'

      },
      
      
    ];

export default class Profile extends Component {

	constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

		

		let mapped = data.map((tableItem, i) => {
			return(
        //should display filtered
				<Post key={i} Name={tableItem.Name} Description={tableItem.Description}  />
		
			);
		})
		return(
			<div>
			<MuiThemeProvider>
				<div className="Checkbox" style={styles.checkbox}>
				<Checkbox 
      				label="Full-time"
      				style={styles.block} 
              checked={this.props.fulltime}

              />
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
