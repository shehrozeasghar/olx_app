import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {
  Switch,Route
} from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyBHKyqlKXcqT8uwQdRzXcekDXKDtGSxojM",
  authDomain: "iimranautomobiles.firebaseapp.com",
  databaseURL: "https://iimranautomobiles.firebaseio.com",
  projectId: "iimranautomobiles",
  storageBucket: "iimranautomobiles.appspot.com",
  messagingSenderId: "168605702941",
  appId: "1:168605702941:web:11a572aa7050af11f05ff4",
  measurementId: "G-81JYB1EF5N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default class Cart extends Component 
{

    state = { isSignedIn: false};

    uiConfig = {
  signInFlow : 'popup',
  signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
  callbacks:
  {
    signInSuccess: () => false
  }
};


  componentDidMount = () =>
  {

    firebase.auth().onAuthStateChanged(user =>
      {
        this.setState({isSignedIn: !! user})
      });
  }
    render() {
        return (
            <div className="Cart">
            {this.state.isSignedIn ?
            (<span>
            <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              </span> 
              )
            : <StyledFirebaseAuth 
            uiConfig = {this.uiConfig}  
            firebaseAuth= {firebase.auth()} />}
      </div>
        )
    }
}
