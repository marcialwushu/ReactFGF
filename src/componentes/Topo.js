
import React from 'react';
import logo from '.././logo.svg';
import { Container,Input,InputGroup,InputGroupAddon,Button,Breadcrumb,BreadcrumbItem, } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
export default class Topo extends React.Component  {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render(){
  return(
    <div id="layout">
    <div>
      <img src={logo} className="agenda" alt="agenda" />
    </div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/novo">Cadastro</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <InputGroup size="md">
                <InputGroupAddon>Pesquisa</InputGroupAddon><Input />
                <Button color="primary">Buscar</Button>{' '}
              </InputGroup>
        </Container>
        <hr />
    </div>
    );
}
}

