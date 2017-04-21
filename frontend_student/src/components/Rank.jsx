
import React, { Component } from 'react';
import Post_rank from './Post_rank';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';


export default class Rank extends Component {
  //IMPORTANT README BEFORE WRITING
  //PLEASE MOVE THIS INTO A NEW FILE THIS FILE IS BECOMMING TOO BIG WE ARE ALL GONNA DIE IF ANY MORE CODE IS WRITTEN HERE K THANKS
  //THIS COMPONENT HAS ACCESS TO THE this.props.companies which is a list of companies that the student has selected

  constructor(props) {
    super(props);
    
    //console.log('test props');
    //console.log(this.props.companies);
  }

  

  
  render() {

    let mapped = this.props.companies.map((product, index) => {
      return(
        //should display filtered
        <Post_rank Name={product.Name} key={product.Name} Description={product.Description} />

      );
    })

    return(

      <div>

         <div className="mui--text-center">Rank the companies</div>
        {mapped}
        <MuiThemeProvider>
          <RaisedButton label="Submit" primary={true} />
        </MuiThemeProvider> 
      </div>


    );
  }
}

