import React from 'react'
import {Container} from 'react-bootstrap';



import styled from 'styled-components';

const Styles = styled.div`
* {
  font-family: 'Inter', sans-serif;
}



  .footer {

    background-image: url("./images/background-texture.jpg");
  }
    button {
    background-color: #d3d3d3;
    padding: 10px;
    border-style: none;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
   }

   button:hover {
    background-color: #e7f097;
  }
  .foo {
        padding-top:3.5rem;
      
    
  }

  .circle {
    background-color: #e7f097;
    border-radius:50%;
    padding:2px;
    width:90px;
    height:90px;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;

   }
 
`;

export const Footer = () => (
    <Styles>
  
    <Container className="foo">
    <hr/>
       
       
          <h4>Let's Get In Touch</h4>
          <button onClick={() => window.location = 'mailto:it.lancer999@gmail.com'}> Email Me!</button>

          <p className="pt-3">Designed and coded by me ♥ © Maryam M. 2024</p>
       
    </Container>
 
  </Styles>
)