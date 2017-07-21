import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from './react-router';

import App from './components/App.js';
import Inbox from './components/Inbox.js';
import Message from './components/Message.js';
import Draft from './components/Draft.js';
import Contacts from './components/Contacts.js';

document.addEventListener( "DOMContentLoaded", () => {
  const reactNode = document.getElementById( "root");

  if (reactNode) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="draft" component= {Draft}/>
          <Route path="contacts" component= {Contacts}/>
          <Route path="inbox" component= {Inbox}>
            <Route path="/inbox/:messageId" component= {Message}/>
          </Route>
        </Route>
      </Router>
    , reactNode)
  }
});

render(
  <h1>Webpack is running! Edit index.js to continue...</h1>,
  document.getElementById('root')
)