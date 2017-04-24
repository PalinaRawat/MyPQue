import React, { Component } from 'react';
import axios from 'axios';
import Post_schedule from './Post_schedule';

var data = [

 {
    "currentPreference": 0,
    "firstPreference": 0, //only need this
    "Name": "Google",
    "studentID": "101", 
    "timeRemaining": -1 //and this
  },
  {
    "currentPreference": 1,
    "firstPreference": 1,
    "Name": "Facebook",
    "studentID": "101",
    "timeRemaining": -1
  }
];

export default class Schedule extends Component {

	constructor(props) {
    super(props);
  }


  render() {

		let mapped = data.map((product, i) => {
			return(
        //should display filtered
				<Post_schedule  key={i} Name={product.Name} timeRemaining={"Time remaining: " + product.timeRemaining} />
			);
		})
		return(
			<div>
				{mapped}
			</div>

		);
	}
}
