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

.highlighted1{
  background-color: #b8db8a;

}
.card{
  background-color:transparent;
  border: 2px solid #000;

  box-shadow:0 10px 20px 0 rgba(0, 0, 0, 0.19);
}

.headline {
font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
font-style:italic;
font-size: 16px;
font-weight:bold;
}

.date-s{
font-size: 13px;
font-weight: bold;
padding-down:2px;
}
.intern{
font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
}

.enlarge-effect {
  transition: transform 0.3s ease-in-out;
}

.enlarge-effect:hover {
  transform: scale(1.1);
}

.enlarge-effect:hover {
  transform: scale(1.1);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out; /* Adjust duration as needed */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in-text {
  animation: fadeIn 2s ease-in-out;
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
    .split {
  display:flex;
  flex-direction:column;

  flex: 2 0 100%;
}
 
}  
`;

export const Home = () => (
  <Styles>
  <Container id="home">
          <Row>
              <Col>
              <main role="main">
                   
                        <h1 className="header faint fade-in-text">Maryam M.</h1>
                        <h1 className="header-under fade-in-text">UX Designer</h1>
                        <h2 className="tag fade-in-text">I <span className="highlight">design</span>, <span className="highlight">draw</span> and <span className="highlight">code</span>.</h2>
                        <h2 className="tag fade-in-text"><span className="highlighted tag1">Currently, Volunteering with TwoHundredK Community</span></h2>
                        
                </main>
              </Col>
  
          </Row>  
  </Container>

  <Container id="exp">
          <Row>
              <Col>
              <h1 className="header faint fade-in-text">Experience</h1>
              </Col>
  
          </Row>


          
          <Row className="pt-5 d-flex align-items-center justify-content-center">
            
      
          <Col className="d-flex align-items-center justify-content-center down">
                <Card style={{ width: '18rem' }}>
                <a href="https://www.twohundredk.com/" target="_blank" rel="noopener noreferrer" className="enlarge-effect fade-in">
                <Card.Img variant="top" src="./images/two-hundred-logo.jfif"/>
                </a>
                </Card>               
          </Col>
                
      <Col className="split">
      <div className="p-5">
      <h2 className="tags fade-in-text highlighted1">UX Design Intern</h2>
      <h2 className="pt-2 headline fade-in-text">Platform for Community Services Projects <span className='highlighted'>TwoHundredK Community </span></h2>
    
      <span className="date-s fade-in-text">October 2024 - Present</span>
      <br/>
      <span className="date-s fade-in-text">Tools: Figma, Canva </span>
      <ul className="intern fade-in-text">
        <li>
        Led the UX/UI redesign for Immigrant Entrepreneur Canada <span>(</span>IEC <span>)</span> website to improve usability and accessibility.
        </li>
        <li>
        Designed the <span className='highlighted'>Brand Style Sheet and proposed new logo</span> concepts from different perspectives.
        </li>
        <li>
        Took on a new project of Ottawa local vision clinic Chicco Opticals to rebuild a landing page which will be used to educate people how to avoid vision issue, and help clinic build a dashboard to track patient information.
        </li>
        <li>
        Contributed in research and created detailed <span className='highlighted'>user personas</span> to align the dashboard design with business and user needs.
        </li>
      </ul>
      </div>
      </Col>

      </Row> 

          <Row className="pt-5 d-flex align-items-center justify-content-center">
            

                
      <Col className="split">
      <div className="p-5">
      <h2 className="tags fade-in-text highlighted1">UX Design Intern</h2>
      <h2 className="pt-2 headline fade-in-text">Platform for a Non-Profit <span className='highlighted'>Northeast Farmers of Color</span> to Apply for US Government Grants</h2>
      
      <span className="date-s fade-in-text">June 2024 - October 2024</span>
      <br/>
      <span className="date-s fade-in-text">Tools: Figma, Canva, Glide</span>
      <ul className="intern fade-in-text">
        <li>
        Led the creation of <span className='highlighted'>user personas and journey maps</span> for diverse roles within the platform, including farmers, representatives, contributors, committee members, and administrators, to ensure an inclusive and accessible user experience.
        </li>
        <li>
        Developed user journey maps tailored to each role, <span className='highlighted'>identifying key pain points, touchpoints, and actionable insights</span> to optimize the application and onboarding process.
        </li>
        <li>
        Collaborated with cross-functional teams to gather requirements, refine <span className='highlighted'>user flows</span>, and implement design solutions that prioritize accessibility and cultural relevance for American farmers.
        </li>
        <li>
        Learned <span className='highlighted'>Glide to develop a user-friendly app</span> tailored to help farmers of color apply for government grants, streamlining the process for primary users such as farmers, representatives, and administrators.
        </li>
      </ul>
      </div>
      </Col>

      <Col className="d-flex align-items-center justify-content-center down">
                <Card style={{ width: '18rem' }}>
                <a href="https://nefoclandtrust.org/" target="_blank" rel="noopener noreferrer" className="enlarge-effect fade-in">
                <Card.Img variant="top" src="./images/north-farmers.jpg"/>
                </a>
                </Card>
                </Col>
      </Row>    
  </Container>

  <Container id="projects">
          <Row>
              <Col>
              <h1 className="header faint fade-in-text">Projects</h1>
              </Col>
  
          </Row>
          <Row className="pt-5 d-flex align-items-center justify-content-center">

          <Col className="d-flex align-items-center justify-content-center down">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./images/3rd-final.png" />
              <Card.Body>
                <Card.Title className="fade-in-text">LiftUp: Website Design for Non-Profit Recovery Pathways Inc</Card.Title>
                
                <Link to="/Project3" className="fade-in-text">Details</Link>
              </Card.Body>
            </Card>
            </Col>

            <Col className="d-flex align-items-center justify-content-center down">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="./images/1st-final.png" />
                  <Card.Body>
                  <Card.Title className="fade-in-text">Enhancing Health and Flavor in a Small Town Eatery</Card.Title>
                  
                  
                  <Link to="/Project" className="fade-in-text">Details</Link>
                  </Card.Body>
                </Card>
            </Col>

            <Col className="d-flex align-items-center justify-content-center down">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./images/2nd-final.png" />
              <Card.Body>
                <Card.Title className="fade-in-text">Cutting Edge Insights: A Case Study on Hairdresser Availability in Town</Card.Title>
                
                <Link to="/Project2" className="fade-in-text">Details</Link>
              </Card.Body>
            </Card>
            </Col>        
          </Row>
        </Container>


        <Container id="aboutsection">
          <Row>
              <Col>
             
              <h1 className="header faint fade-in-text">About</h1>
              <div className="p-5">
              <p className="pt-3 fade-in-text">Welcome! <span className='highlighted'>I'm Maryam, a Certified UX designer</span> dedicated to creating 
                meaningful and delightful user experiences. With a background in Computer Science, I bring a unique blend of 
                skills that combines user research, wireframing, prototyping and developing at the same time.
              </p>
              <h2 className="tag fade-in-text">My Journey</h2>
              <p className="pt-3">My journey into the world of UX design began with the discovery of <span className='highlighted'>Google's Certification program</span>. Since then, I've been fortunate to engage in a diverse array of projects that have not only refined my skills but also deepened my appreciation for user-centric design.
              </p>
              <p className="pt-3 fade-in-text">
              With a background in Computer Science, I bring a unique perspective to my work. Understanding the intricacies of both technology and human behavior allows me to craft intuitive interfaces and solutions that seamlessly blend form and function.
              </p>

              <p className="pt-3 fade-in-text">
              But my journey doesn't stop there. Alongside my professional pursuits, I embrace the challenges and joys of motherhood, raising two incredible children. This experience has taught me the importance of empathy, adaptability, and resilience—qualities that I bring to every project.
              </p>
              <p className="pt-3 fade-in-text">Now, after a fulfilling break, I'm eager to make a strong comeback and immerse myself once again in the world of creativity and innovation. I believe in the power of collaboration, iteration, and continuous learning, and I'm excited to embark on this journey with renewed vigor.
              </p>
              <p className="pt-3 fade-in-text">Join me as we explore the endless possibilities of user-centric design together. Let's craft experiences that inspire, empower, and transform lives.</p>
              <p className="pt-3 fade-in-text">Thank you for visiting, and I look forward to connecting with you soon!</p>
              <h2 className="tag fade-in-text">Interests & Experiences</h2>
              <p className="pt-3 fade-in-text">I love to work on creative projects. I have a digital print shop on 
              Etsy that I have started last year and It's been an immensely gratifying venture, allowing me to immerse myself in the world of whimsical digital art for children. I love to make digital art and it 
              is like an escape from reality to work on.
              </p>
              <p className="pt-3 fade-in-text">
              In addition to running my Etsy shop, I've also had the pleasure of freelancing on various assignments from time to time, including catalog design and static website pages using Upwork platform. These projects have allowed me to further explore my passion for design and expand my skill set beyond digital art. 
              </p>
              <a href="https://www.etsy.com/ca/shop/Doodleshobbyshop">View Shop</a>

             
              </div>

              {/*<img className="text-center" src="./images/logo.png" alt="art-hobby" />*/}
              </Col>
  
          </Row>
        </Container>
    
  </Styles>
)