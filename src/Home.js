import React from 'react'
import {Link} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

const Styles = styled.div`
* {
  font-family: 'Inter', sans-serif;
  
}


.faint {
  color: #c0c0c0;
}

.header {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 88px;
  font-style: normal;
  font-weight: 800;
  line-height: 107px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-top:8rem;
}

.header-under {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 88px;
  font-style: normal;
  font-weight: 800;
  line-height: 107px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-top:1rem;
}
.faint:hover {
  color: #e7f097;

}

.tag {
  text-align: left;
  margin: 0;
  padding-top: 1rem;
}

.tag1 {
font-size:20px;
}
.highlight:hover {
  background-color: #e7f097;

}

.highlighted{
  background-color: #e7f097;

}
.card{
  background-color:transparent;
  border: 2px solid #000;

  box-shadow:0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

@media screen and (max-width:768px){

  .down {
    padding-bottom:10px;
  }
  .header {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 53px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px;
   
    text-align: left;
    
    padding:9.5rem 0.5rem 0 0.5rem;
   
  }

  .header-under {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 53px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px;

    text-align: left;
  
    
    padding:1rem 0.5rem 0 0.5rem;
   
  }

  .tag {
    line-height: 40px;
    padding: 1rem 0.5rem 0 0.5rem;
  }
 
}  
`;

export const Home = () => (
  <Styles>
  <Container id="home">
          <Row>
              <Col>
              <main role="main">
                   
                        <h1 className="header faint">Maryam M.</h1>
                        <h1 className="header-under">UX Designer</h1>
                        <h2 className="tag">I <span className="highlight">design</span>, <span className="highlight">draw</span> and <span className="highlight">code</span>.</h2>
                        <h2 className="tag"><span className="highlighted tag1">Currently, Volunteering with North East Farmers of Color (NEFOC) Land Trust for their Research Project </span></h2>
                        
                </main>
              </Col>
  
          </Row>  
  </Container>

  <Container id="projects">
          <Row>
              <Col>
              <h1 className="header faint">Projects</h1>
              </Col>
  
          </Row>
          <Row className="pt-5 d-flex align-items-center justify-content-center">
            <Col className="d-flex align-items-center justify-content-center down">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="./images/1st-final.png" />
                  <Card.Body>
                  <Card.Title>Enhancing Health and Flavor in a Small Town Eatery</Card.Title>
                  
                  
                  <Link to="/Project">Details</Link>
                  </Card.Body>
                </Card>
            </Col>

            <Col className="d-flex align-items-center justify-content-center down">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./images/2nd-final.png" />
              <Card.Body>
                <Card.Title>Cutting Edge Insights: A Case Study on Hairdresser Availability in Town</Card.Title>
                
                <Link to="/Project2">Details</Link>
              </Card.Body>
            </Card>
            </Col>

            <Col className="d-flex align-items-center justify-content-center down">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./images/3rd-final.png" />
              <Card.Body>
                <Card.Title>LiftUp: Website Design for Non-Profit Recovery Pathways Inc</Card.Title>
                
                <Link to="/Project3">Details</Link>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>


        <Container id="aboutsection">
          <Row>
              <Col>
             
              <h1 className="header faint">About</h1>
              <div className="p-5">
              <p className="pt-3">Welcome! I'm Maryam, a passionate UX designer dedicated to creating 
                meaningful and delightful user experiences. With a background in Computer Science, I bring a unique blend of 
                skills that combines user research, wireframing, prototyping and developing at the same time.
              </p>
              <h2 className="tag">My Journey</h2>
              <p className="pt-3">My journey into the world of UX design began with the discovery of Google's Certification program. Since then, I've been fortunate to engage in a diverse array of projects that have not only refined my skills but also deepened my appreciation for user-centric design.
              </p>
              <p className="pt-3">
              With a background in Computer Science, I bring a unique perspective to my work. Understanding the intricacies of both technology and human behavior allows me to craft intuitive interfaces and solutions that seamlessly blend form and function.
              </p>

              <p className="pt-3">
              But my journey doesn't stop there. Alongside my professional pursuits, I embrace the challenges and joys of motherhood, raising two incredible children. This experience has taught me the importance of empathy, adaptability, and resilience—qualities that I bring to every project.
              </p>
              <p className="pt-3">Now, after a fulfilling break, I'm eager to make a strong comeback and immerse myself once again in the world of creativity and innovation. I believe in the power of collaboration, iteration, and continuous learning, and I'm excited to embark on this journey with renewed vigor.
              </p>
              <p className="pt-3">Join me as we explore the endless possibilities of user-centric design together. Let's craft experiences that inspire, empower, and transform lives.</p>
              <p className="pt-3">Thank you for visiting, and I look forward to connecting with you soon!</p>
              <h2 className="tag">Interests & Experiences</h2>
              <p className="pt-3">I love to work on creative projects. I have a digital print shop on 
              Etsy that I have started last year and It's been an immensely gratifying venture, allowing me to immerse myself in the world of whimsical digital art for children. I love to make digital art and it 
              is like an escape from reality to work on.
              </p>
              <p className="pt-3">
              In addition to running my Etsy shop, I've also had the pleasure of freelancing on various assignments from time to time, including catalog design and static website pages using Upwork platform. These projects have allowed me to further explore my passion for design and expand my skill set beyond digital art. 
              </p>
              <Link href="https://www.etsy.com/ca/shop/Doodleshobbyshop">View Shop</Link>

             
              </div>

              {/*<img className="text-center" src="./images/logo.png" alt="art-hobby" />*/}
              </Col>
  
          </Row>
        </Container>
    
  </Styles>
)