import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  Jumbotron,
  Button,
  Label,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let username, password, remember;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleLogin = (event) => {
    toggleModal();
    alert("Username: " + username.value + " Password: " + password.value
      + " Remember: " + remember.checked);
    event.preventDefault();
  }

  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav}></NavbarToggler>
          <NavbarBrand className="mr-auto" href="/">
            <img src="images/logo.png" alt="Ristorante Con Fusion" height="30" width='41' />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-lg"></span> About Us
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
              </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" name="username"
                innerRef={(input) => username = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password"
                innerRef={(input) => password = input} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember"
                  innerRef={(input) => remember = input} />
                  Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Header;