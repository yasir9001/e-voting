import React, { Component } from 'react';
import Navbar from './../../navbar/Navbar'

import CandidateProfile from './../candidateprofile/CandidateProfile'
import UpdateProfile from './../updateprofile/UpdateProfile'
import {BrowserRouter, Route } from 'react-router-dom'
import './HomeScreen.css'

export class HomeScreen extends Component {
  render() {
    return (
            <div>
                <BrowserRouter>
                    <>
                        <Route path='/candidate/profile' render = { (props) => <CandidateProfile {...props} />} />
                        <Route path='/candidate/updateprofile' render = { (props) => <UpdateProfile {...props} />} />
                    </>
                </BrowserRouter>
            </div>

    )
  }
}

export default HomeScreen
