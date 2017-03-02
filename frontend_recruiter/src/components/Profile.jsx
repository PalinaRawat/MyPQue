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

      
         <div className="mui--text-center">Company Profile</div>
         
        <div className="mui--text-left">Name</div>
        <Input hint="Company name" />
        

        <div className="mui--text-left">Description</div>
        <Textarea hint="Company Description"/>
        

        <div className="mui--text-left">Looking for</div>
        <Select defaultValue="option-2">
          <Option value="Internship" label="Internship" />
          <Option value="Full-time" label="Full-time" />
        </Select>
       
       <div className="mui--text-left">Hiring</div>
        <Select defaultValue="option-2">
          <Option value="Freshman" label="Freshman" />
          <Option value="Sophomore" label="Sophomore" />
           <Option value="Junior" label="Junior" />
          <Option value="Senior" label="Senior" />
        </Select>


        <div className="mui--text-left">Sponsoring Visas ?</div>
        <Select defaultValue="option-2">
          <Option value="Yes" label="Yes" />
          <Option value="No" label="No" />
        </Select>

        <div className="mui--text-left">Time per student</div>
         <Input hint="Estimated" />

      </Form>

       <MuiThemeProvider>
      <RaisedButton label="Submit" primary={true} style={style} />
    </MuiThemeProvider> 

       </div>

    );
  }
}

