import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import CandidateHomeScreen from './components/candidate/homescreen/HomeScreen';
import AdminHomeScreen from './components/administration/homescreen/HomeScreen';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <>
          <Route path='/' exact render = {(props) => <Login {...props} /> } />
          <Route path='/signup' exact render = {(props) =><Signup {...props}/> } />
          {/* <Route path='/candidate' exact render = {(props) =><CandidateHomeScreen {...props}/> } /> */}
          {/* <Route path='/signup' exact render = {(props) =><Signup {...props}/> } /> */}
         </>
        </BrowserRouter>
        <AdminHomeScreen />
        <CandidateHomeScreen /> 
      </div>
    );
  } 
}

export default App;
