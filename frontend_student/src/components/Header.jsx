import React, { Component } from 'react';
import '../css/Header.css';
import logo from '../img/logo.png';
import Drawer from 'material-ui/Drawer';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan800} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan800,
  },
  appBar: {
    height: 95,
  },
  drawer: {
    color: '#F0FFFF',    
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

    <div className="Header">
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <AppBar
         iconElementLeft={<IconButton><img src={logo} className="App-logo" alt="logo" /></IconButton>}
         onTouchTap={this.handleToggle}
      />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={muiTheme}>
      <Drawer width={200} openSecondary={true} open={this.state.open} >
          <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar title="Menu" />
          </MuiThemeProvider>
            <div>
            <MuiThemeProvider muiTheme={muiTheme}>
            <Menu>
    
              <MenuItem 
              primaryText="Company profile" 
              containerElement={<Link to="/" />}
              />
              <MenuItem primaryText="List of companies" />
              <MenuItem primaryText="Schedule" />
            </Menu>
            </MuiThemeProvider>
            </div>
      </Drawer>
      </MuiThemeProvider>
    </div>

    );
  }
}

/*

*/







