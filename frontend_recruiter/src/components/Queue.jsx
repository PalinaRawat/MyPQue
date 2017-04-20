import React, { Component } from 'react';
import Post from './Post';
import PostSpeaking from './PostSpeaking';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
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

			{
				'firstName': 'Student3',
				'lastName': 'Stud3',
				'link': 'google.com',
				//'Hiring': 'Freshman',
				//'Required major': 'Computer Science',
				//'Sponsoring visas': 'true'

			},


    ];


		var dataSpeaking = [
		      {
		        'firstName': 'Student1',
		        'lastName': 'Stud1',
		        'link': 'speaking',
		        //'Hiring': 'Freshman',
		        //'Required major': 'Computer Science',
		        //'Sponsoring visas': 'false'

		      },
		      {
		        'firstName': 'Student2',
		        'lastName': 'Stud2',
		        'link': 'sleaking',
		        //'Hiring': 'Freshman',
		        //'Required major': 'Computer Science',
		        //'Sponsoring visas': 'true'

		      },
					{
						'firstName': 'Student3',
						'lastName': 'Stud3',
						'link': 'google.com',
						//'Hiring': 'Freshman',
						//'Required major': 'Computer Science',
						//'Sponsoring visas': 'true'

					},

					{
						'firstName': 'Student4',
						'lastName': 'Stud4',
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

		let mappedSpeaking = dataSpeaking.map((tableItem, j) => {
			return (
				<PostSpeaking key={j} firstName={"First Name: " + tableItem.firstName}
					lastName={"Last Name: " + tableItem.lastName}
					link={"Resume: " + tableItem.link}  />
			);
		})

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

				<div>
					<br></br>
					<p className="mui--text-center">Currently Speaking</p>
				</div>

				<div id="speakingDiv">
					
				{mappedSpeaking}

				</div>
				<hr></hr>
				<div>
					<p className="mui--text-center">Queue of remaining students</p>
				</div>
				<div id="queueDiv">
					<MuiThemeProvider>
	          <RaisedButton label="Dequeue" type="submit" primary={true} style={style} />
	        </MuiThemeProvider>
				{mapped}
				</div>


			</div>

		);
	}
}
