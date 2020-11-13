import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ProducList from './components/ProductList'
// import Product from './components/Product'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/modal'
// import firebase from './config/firebase.js';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {
  Switch,Route
} from "react-router-dom";
// import Approuter from './config/Approuter'




class App extends Component
{
  // state = { isSignedIn: false}
  // uiConfig = 
  // {
  //   signInFlow: "popup",
  //   signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
  //   callbacks:
  //   {
  //     signInSuccess: () => false
  //   }
  // }

  // componentDidMount = () =>
  // {
  //   firebase.initializeApp({
  //     apikey:
  //     authDomain: "authorized domain section in auth age firebase"
  //   })
  //   firebase.auth().onAuthStateChanged(user =>
  //     {
  //       this.setState({isSignedIn: !! user})
  //     })
  // }

  render()
  {
    return(
    <React.Fragment>
            {/* <div className="App">
              {this.state.isSignedIn ?
              (<span>
              <div>Signed In!</div>
                <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                </span> 
                )
              : <StyledFirebaseAuth 
              uiconfig = {this.uiConfig} 
              firebaseAuth= {firebase.auth()} />}
        </div> */}
        {/* 20:01 */}
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProducList} />
        <Route path="/details" component={Details} />
        <Route path="/Cart" component={Cart} />

        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
    );
  }
}



export default App;
