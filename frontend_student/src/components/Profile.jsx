import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import {indigoA700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

import '../css/Profile.css';

const style = {
  margin: 12,
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: indigoA700
,
  },

  });

export default class Profile extends Component {
  render() {
    return (

       <div className = "Profile">
       
     <Form>

      
         <div className="mui--text-center">Student Profile</div>
         
        <div className="mui--text-left">First Name</div>
        <Input hint="First Name" />
        

        <div className="mui--text-left">Last Name</div>
        <Input hint="Last Name" />

        <div className="mui--text-left">Major</div>
        <Input hint="Major" />

        <div className="mui--text-left">Class Standing</div>
        <Select defaultValue="option-2">
          <Option value="Freshman" label="Freshman" />
          <Option value="Sophomore" label="Sophomore" />
           <Option value="Junior" label="Junior" />
          <Option value="Senior" label="Senior" />
        </Select>

         <div className="mui--text-left">Graduation Year</div>
         <Input hint="Graduation Year" />



        <div className="mui--text-left">Opportunity type</div>
        <Select defaultValue="option-2">
          <Option value="Internship" label="Internship" />
          <Option value="Full-time" label="Full-time" />
        </Select>


        <div className="mui--text-left">Would you require sponsorhip now or in the future?</div>
        <Select defaultValue="option-2">
          <Option value="Yes" label="Yes" />
          <Option value="No" label="No" />
        </Select>

        <div className="mui--text-left">Please provde a link to your resume: </div>
        <Input hint="link to resume" />
       


      </Form>

       <MuiThemeProvider>
      <RaisedButton label="Submit" primary={true} style={style} />
    </MuiThemeProvider> 

       </div>

    );
  }
}

