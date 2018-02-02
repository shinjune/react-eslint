import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD-cqxiOFQeDYsvcrsOwq0TyMJgAiX53dQ",
  authDomain: "react-redux-semantic.firebaseapp.com",
  databaseURL: "https://react-redux-semantic.firebaseio.com",
  projectId: "react-redux-semantic",
  storageBucket: "",
  messagingSenderId: "178920935336"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
