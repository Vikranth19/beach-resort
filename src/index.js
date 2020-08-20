import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {RoomProvider} from './context'

ReactDOM.render(
  <RoomProvider>
      <Router>
        <App />
     </Router>
  </RoomProvider>,
  document.getElementById('root')
);

//everything wrapped within router is going to have ability to use routing

