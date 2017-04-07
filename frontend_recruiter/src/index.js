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
import Students from './components/Students';
import Queue from './components/Queue';
import './css/index.css';


injectTapEventPlugin();

ReactDOM.render((
   <HashRouter>

      <App>
        <Route exact path="/" component={Profile} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Students" component={Students} />
          <Route path="/Queue" component={Queue} />
      </App>

   </HashRouter>
), document.getElementById( 'root' ) )
