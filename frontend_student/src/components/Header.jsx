import React, { Component } from 'react';
import '../css/Header.css';
import logo from '../img/logo.png';



import Drawer from 'material-ui/Drawer';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigoA700} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


const muiTheme = getMuiTheme({
  palette: {
    textColor: indigoA700
,
  },
  appBar: {
    height: 50,

  },
  });


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (

    <div className = "Header">
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
   		<AppBar
   			 iconElementLeft = {<IconButton><img src={logo} className="App-logo" alt="logo" /></IconButton>}
   	 		 onTouchTap={this.handleToggle}
  		/>
		</MuiThemeProvider>
	 	<MuiThemeProvider >
        <Drawer width={200} openSecondary={true} open={this.state.open} >
        	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          	<AppBar title="AppBar" />
            </MuiThemeProvider>
        </Drawer>
        </MuiThemeProvider>

    </div>

    );
  }
}











