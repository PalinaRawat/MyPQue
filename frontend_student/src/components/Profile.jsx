import React, { Component } from 'react';
import Input from 'muicss/lib/react/input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

import '../css/Profile.css';

const style = {
  margin: 12,
};



export default class Profile extends Component {
  render() {
    return (

       <div className="Profile">
       
     <form action="/StudentProfile" method="post">

      
         <div className="mui--text-center">Student Profile</div>
         
        <div className="mui--text-left">First Name</div>
        <Input hint="First Name" name="firstName"/>
        

        <div className="mui--text-left">Last Name</div>
        <Input hint="Last Name" name="lastName"/>

        <div className="mui--text-left">Major</div>
        <Input hint="Major" name="major" />

        <div className="mui--text-left">Class Standing</div>
        <Select defaultValue="option-2" name="standing">
          <Option value="Freshman" label="Freshman" />
          <Option value="Sophomore" label="Sophomore" />
           <Option value="Junior" label="Junior" />
          <Option value="Senior" label="Senior" />
        </Select>

         <div className="mui--text-left">Graduation Year</div>
         <Input hint="Graduation Year" name="gradYear"/>



        <div className="mui--text-left">Opportunity type</div>
        <Select defaultValue="option-2" name="opType">
          <Option value="Internship" label="Internship" />
          <Option value="Full-time" label="Full-time" />
        </Select>


        <div className="mui--text-left">Would you require sponsorship now or in the future?</div>
        <Select defaultValue="option-2" name="sponsorship">
          <Option value="Yes" label="Yes" />
          <Option value="No" label="No" />
        </Select>

        <div className="mui--text-left">Please provde a link to your resume: </div>
        <Input hint="link to resume" name="resume"/>
       
      <MuiThemeProvider>
        <RaisedButton label="Submit" type="primary" primary={true} style={style} />
      </MuiThemeProvider> 

    </form>
       </div>

    );
  }
}

