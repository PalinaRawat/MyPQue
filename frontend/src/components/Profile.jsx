import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import {indigoA700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
        <Input hint="Company name" />
        <Textarea hint="Company description" />
        <Textarea hint="Looking for" />
       
      

      </Form>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <RaisedButton label="Submit" Submit={true} style={style} />
    </MuiThemeProvider>

        </div>

    );
  }
}