import React, { Component } from 'react'
import Navbar from './../../navbar/Navbar'
import { Table, Row, Col, Container,Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



export class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            data:[
                {
                    firstName:'Mark',
                    lastName:'otto',
                    userName:'@mat'
                },
                {
                    firstName:'Mark',
                    lastName:'otto',
                    userName:'@mat'
                },
                {
                    firstName:'Mark',
                    lastName:'otto',
                    userName:'@mat'
                },
                {
                    firstName:'Mark',
                    lastName:'otto',
                    userName:'@mat'
                },
                {
                    firstName:'Mark',
                    lastName:'otto',
                    userName:'@mat'
                },
                {
                    firstName:'Mark',
                    lastName:'otto',
                    userName:'@mat'
                },
            ],

            modal: false
        }
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
        <>
        <Navbar
        link1 = 'Home'
        link2 = 'Update Info'
        logoutText = 'Logout'
        logout = {()=> alert('Admin logged Out')}
        />

      <div>
            <Row>
                <Col>
                <Container>
<h1>Voters</h1>
                <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        
        <tbody>
            {
                this.state.data.map(( e, i) => {
                    return (
                        <tr onClick={() => this.toggle()}>
                            <td>{Math.random().toString(36).substr(2)}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.userName}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </Table>

                </Container>
                </Col>



                <Col>
                <Container>
<h1>Candidates</h1>
                <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
        {
                this.state.data.map(( e, i) => {
                    return (
                        <tr onClick={() => this.toggle()}>
                            <td>{Math.random().toString(36).substr(2)}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.userName}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </Table>

                </Container>
                </Col>
            </Row>
      </div>




      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Name</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      </>
    )
  }
}

export default AdminDashboard
