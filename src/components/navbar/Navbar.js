import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

  
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="#">E-VOTING</NavbarBrand>
         { this.props.link1 ? <NavbarToggler onClick={this.toggle}  /> : null}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={this.props.link1Target}>{this.props.link1}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={this.props.link2Target}>{this.props.link2}</NavLink>
              </NavItem>
              {
                this.props.link3 !== undefined ? 
                <NavItem>  
                  <NavLink href={this.props.link3Target}>{this.props.link3}</NavLink>
                </NavItem> : null
              }

            { this.props.logoutText ? <NavItem> 
                <NavLink href="#"><span onClick={this.props.logout}>{this.props.logoutText}</span></NavLink>
              </NavItem> : null}
              
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}