import React, { Component } from 'react';
import Post from './Post';



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
        'firstName': 'Student1',
        'lastName': 'Stud1',
        'link': 'purdue.edu',
        //'Hiring': 'Freshman',
        //'Required major': 'Computer Science',
        //'Sponsoring visas': 'false'

      },
      {
        'firstName': 'Student2',
        'lastName': 'Stud2',
        'link': 'google.com',
        //'Hiring': 'Freshman',
        //'Required major': 'Computer Science',
        //'Sponsoring visas': 'true'

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
				<Post key={i} firstName={"First Name: " + tableItem.firstName}
          lastName={"Last Name: " + tableItem.lastName}
          link={"Resume: " + tableItem.link}  />

			);
		})
		return(
			<div>
				{mapped}
			</div>

		);
	}
}
