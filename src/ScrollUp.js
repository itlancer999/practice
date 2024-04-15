import React from 'react'
import { Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'



import styled from 'styled-components';

const Styles = styled.div`
* {
  font-family: 'Inter', sans-serif;
}


  .back {

    background-image: url("./images/background-texture.jpg");
  }
  

  .up {
    background-color: #e7f097;
    border-radius:50%;
    padding:2px;
    width:90px;
    height:90px;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    text-decoration:none;

   }

   .icn {
    font-size:40px;
   }
 
`;

export const ScrollUp = () => (
    <Styles>
  
    <Container className="pt-5">
      
        
        <button className="up back ms-auto"
       onClick={() => window.scrollTo({ top: 100, behavior: "smooth" })}>
      <FontAwesomeIcon className="icn" icon={faArrowUp} />
      </button>
     
    </Container>
 
  </Styles>
)