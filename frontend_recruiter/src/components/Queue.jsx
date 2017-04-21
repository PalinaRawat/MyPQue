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
    this.state = {
      value: 1,
      currentlySpeaking: [],
      inqueue: []
    };
  }

  componentDidMount() {
    //do stuff with axios

    this.setState({inqueue: data});
    this.setState({currentlySpeaking: dataSpeaking})
  }

  updateUser(index) {
    let arr = this.state.currentlySpeaking;
    arr.splice(index,1);
    this.setState({currentlySpeaking: arr});
  }

  dequeueUser() {
    let arrOne = this.state.inqueue;
    dataSpeaking.push(arrOne[0]);
    arrOne.shift();
    this.setState({inqueue: arrOne});
  }

  render() {
		let mappedSpeaking = this.state.currentlySpeaking.map((tableItem, j) => {
			return (
				<PostSpeaking key={j} firstName={"First Name: " + tableItem.firstName}
					lastName={"Last Name: " + tableItem.lastName}
					link={"Resume: " + tableItem.link}
          updateUser = {() => this.updateUser(j)}
        />
			);
		})

		let mapped = this.state.inqueue.map((tableItem, i) => {
			return(
        //should display filtered
				<Post key={i} firstName={"First Name: " + tableItem.firstName}
          lastName={"Last Name: " + tableItem.lastName}
          link={"Resume: " + tableItem.link}

      />
			);
		})


		return(
			<div>

				<div>
					<br></br>
					<p className="mui--text-center">Currently Speaking</p>
				</div>

				<div id="speakingDiv">
					<br></br>
				{mappedSpeaking}

				</div>
				<hr></hr>
				<div>
					<p className="mui--text-center">Queue of remaining  students</p>
				</div>
				<div id="queueDiv">
					<MuiThemeProvider>
	          <RaisedButton  label="Dequeue" type="submit" primary={true} style={style} onClick={() => this.dequeueUser()} />
	        </MuiThemeProvider>
				{mapped}
				</div>


			</div>

		);
	}
}
