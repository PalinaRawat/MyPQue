import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import Profile from './components/Profile';
import './css/index.css';



injectTapEventPlugin();



/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/


ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/" component={Profile} />
      </div>
   </HashRouter >
), document.getElementById( 'root' ) )