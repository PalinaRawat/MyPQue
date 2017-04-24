import React, { Component } from 'react';
import axios from 'axios';
import Post_schedule from './Post_schedule';

var data = [
 {
    "firstPreference": 0, //only need this
    "Name": "Google",
    "studentID": "101", 
    "timeRemaining": -1 //and this
  },
  {
    "firstPreference": 1,
    "Name": "Facebook",
    "studentID": "101",
    "timeRemaining": -1
  }
];

export default class Schedule extends Component {

	constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/gettime')
    .then(res => {
      this.setState({companies: res.data});
    })
    .catch((err) => {
      //throw error
      console.log(err);
      this.setState({companies: data});
    });
  }

  render() {
    const arr = this.state.companies;
		let mapped = arr.map((product, i) => {
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
