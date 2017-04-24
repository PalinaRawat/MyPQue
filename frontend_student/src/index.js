import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  IndexRoute,
  Link
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import Profile from './components/Profile';
import Companies from './components/Companies';
import Schedule from './components/Schedule';
import './css/index.css';



injectTapEventPlugin();



/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/


ReactDOM.render((
   <HashRouter>
      
      <App>
        <Route exact path="/" component={Profile} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Companies" component={Companies} />
        <Route path="/Schedule" component={Schedule} />
    
      </App>

   </HashRouter>
), document.getElementById( 'root' ) )