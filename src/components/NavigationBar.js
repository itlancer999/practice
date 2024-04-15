import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';



const Styles = styled.div`
  .NavBar {

    background-image: url("./images/background-texture.jpg");
    padding: 1rem 10rem 0.5rem 6.2rem;
    text-decoration: none;
    
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    font-family: 'Inter', sans-serif;
    font-weight:bold;
    color: #212529;
    text-decoration:none;
    font-size:20px;
    padding: 0 11px 0 15px;

    &:hover {
      color: #e7f097;
      transition: 0.3s ease ease-in-out;
      text-decoration: underline solid #e7f097;
      text-decoration-thickness: 3px;
      text-underline-offset: 15px;
  
    }
  }
  @media screen and (max-width:959px){
    .NavBar {
    
      padding: 0.5rem 1rem 0 0.3rem;
    }

    a, .navbar-brand, .navbar-nav .nav-link {
      font-size: 23px;
      padding: 1rem;
      font-weight:bold;
      text-align:center;
    }
    
    &:hover {
      color: #e7f097;
      transition: 0.3s ease ease-in-out;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    
    <Navbar  bg='transparent' expand='lg' collapseOnSelect className="NavBar">
      <Navbar.Brand href="/">
        <img width="65px" height="65px" alt="logo" src="./images/logo.png"/>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link>
              <HashLink smooth to="/#home">Home</HashLink>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
          <Nav.Link>
            <HashLink smooth to="/#projects" >Project</HashLink>
            </Nav.Link>
          </Nav.Item>

         
          <Nav.Item>
            <Nav.Link>
              <HashLink smooth to="/#aboutsection">About</HashLink>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
