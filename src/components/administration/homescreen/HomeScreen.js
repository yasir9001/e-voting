import React, { Component } from 'react';
import Navbar from './../../navbar/Navbar'
import {BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './../admindashboard/AdminDashboard'

export class AdminHomeScreen extends Component {
  render() {
    return (
            <div>
                <BrowserRouter>
                    <>
                        <Route path='/admin' render = { (props) => <Dashboard {...props} />} />
                        {/* <Route path='/candidate/updateprofile' render = { (props) => <UpdateProfile {...props} />} /> */}
                    </>
                </BrowserRouter>
            </div>

    )
  }
}

export default AdminHomeScreen
