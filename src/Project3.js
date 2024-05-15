import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Styles = styled.div`
* {
  font-family: 'Inter', sans-serif;
}
.project {
padding-top:80px;
}
.tags {
 padding-top: 25px;
}
.faint{
  color:#c0c0c0;
}
.faint1{
  color:#c0c0c0;
  font-weight:700;
}
.back {
  background-color:#c0c0c0;
  padding:4px;
  margin:2px;
  margin-left:0;
}
.bo {
  font-weight:700;
}
.color-back {
  background-color: #c8b5fd;
  
}
.find {
background-color:#c0c0c0;
padding:20px;
}
.sol {
  font-family: Caveat, sans-serif;
  font-size:25px;
  font-weight:800;
}
.circle {
 background-color: #c8b5fd;
 border-radius:50%;
 padding:2px;
 width:90px;
 height:90px;
 display:flex;
 align-items:center;
 text-align:center;
 justify-content:center;

}

.card{
  background-color:transparent;
  border:0;
  text-align:center;
  padding:5px 5px 80px 5px;
  display:flex;
  align-items:center;
  text-align:center;
  justify-content:center;

 
}
@media screen and (max-width:959px){
.splitter {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.split {
  display:flex;
  flex-direction:column;

  flex: 2 0 100%;
}

.card {
  padding:5px 10px 80px 5px;

}

`;

export const Project3 = () => (
  <Styles>
  <Container className="project">
    <h2 pt-5>WellNest: Mental Health Support Platform</h2>
    <Row className="tags">
      <Col>
    <span className="back">Product Design</span> <span className="back">Branding</span> <span className="back">End to End</span>
    <br/>
  
    <span className="faint">8min Read</span>
    <br/>
    <span className= "bo">DESIGN ROLE</span>
    <br/>
    <span className="faint">UI/UX Design, Research Case Study</span>
    <br/>
    <br/>
    <Link href="https://www.figma.com/file/N5JTOVf1nSVcJ9PuXsnSvG/Untitled?type=design&node-id=0%3A1&mode=design&t=HlnZppiEng32Pdy9-1">Figma Design files</Link>
    </Col>
    <Col>
    <span className= "bo">TIMELINE</span>
    <br/>
    <span className="faint">February to April 2024</span>
    <br/>
    <span className= "bo">SECTOR</span>
    <br/>
    <span className="faint">Personal Care Services</span>
    <br/>
    </Col>
    
    </Row>
    <hr/>
    <img alt="Prototype" width="100%" height="80%"className="align-items-center justify-content-center" src="./images/cover2.png"/>
    <div className="p-5">
      <h2 className="tags">Introduction</h2>
      <p className="pt-2">a digital platform that provides resources, tools, and peer support for individuals struggling with mental health issues, such as depression, anxiety, or PTSD. Incorporate features like mood tracking, self-care exercises, and access to professional therapists.</p>
    <h2 className="tags">Problem</h2>
    <h2 className="pt-2">Stigma, limited access, and healthcare complexities hinder mental health support-seeking, perpetuating isolation.</h2>
    <p className="pt-2">Despite the increasing awareness of mental health issues, many individuals continue to face significant barriers in accessing timely and effective support and resources. Stigma, limited availability of mental health services, and difficulty navigating the complex healthcare system contribute to a lack of support for those in need. As a result, individuals struggling with mental health challenges often feel isolated, overwhelmed, and unable to seek the help they deserve.</p>
    <p className="pt-2">Many individuals face challenges in accessing mental health services, including long wait times, geographical barriers, and affordability issues.

</p>
    <Row className="pt-5 splitter">
      <Col className="split">
      <img className="proto" alt="Prototype-gif" width="95%" height="100%" src="./images/gif-2.gif"/>
      
      </Col>
      <Col className="split">
      <h2 className="tags">Solution</h2>
      <h2 className="pt-2">Designing a Mental Health Support Platform to break down barriers, combat stigma, and provide accessible resources for individuals facing mental health challenges.</h2>
      <p className="pt-2">Addressing the significant barriers of stigma, limited access, and complex healthcare systems to ensure individuals facing mental health challenges can easily access support and resources.</p>
      </Col>
    </Row>
    <h2 className="tags pt-5">RESEARCH</h2>
    <p className= "bo pt-2">Identifying opportunity</p>
    <p className= "faint1 pt-2">Part One:</p>
    <p className= "bo pt-2">Method: Observation</p>
    <ul className="color-back p-5">
      <li className="p-2">How frequently do you visit salons for haircuts or other beauty services?</li>
      <li className="p-2">What challenges do you face when booking salon appointments?</li>
      <li className="p-2">How likely are you to use an online booking system for salon appointments if it were available?</li>
   </ul>
   <div className="find">
   <p className="sol">Findings</p>
   <h4 className="sol" >Frequency of Salon Visits:</h4>
   <p>Finding: Many respondents visit salons regularly for haircuts or beauty services.</p>
   <p>Opportunity: There is a consistent demand for salon services, indicating potential for increased bookings through the platform.</p>
   <h4 className="sol" >Challenges with Current Booking Process:</h4>
   <p>Finding: Users face various challenges such as difficulty finding available time slots and long wait times for appointments.</p>
   <p>Opportunity: Addressing these pain points by offering real-time availability updates and automated appointment reminders can improve user satisfaction and streamline the booking process.</p>
   <h4 className="sol">Interest in Online Booking System:</h4>
   <p>Finding: There is a high level of interest among users in using an online booking system for salon appointments.</p>
   <p>Opportunity:  Introducing an online booking system can attract more users to the platform and provide added convenience, leading to increased bookings and customer engagement.</p>
   
   
   </div>
   <p className= "faint1 pt-5">Part Two:</p>
    <p className= "bo pt-2">Understanding the problem</p>
    <p className= "bo pt-2">Method: Survey, interview, competetive analysis, affinity mapping, persona, user journey map</p>
    <p>To further understand the problem and to find the opportunities to present better solutions, I did survey with five participants and categorized their pain points as following:</p>
    
    <h4 className="pt-5">Pain Points</h4>
    <Row className="d-flex align-items-center justify-content-center pt-5 pd-5">
      <Col className="d-flex align-items-center justify-content-center">
        <Card>
          <h1 className="circle">1</h1>
          <Card.Body>
          <Card.Title>Limited Availability</Card.Title>
              <Card.Text>Participants struggle to find suitable time slots due to limited availability, leading to frustration and inconvenience.
              </Card.Text>
          </Card.Body>
        </Card>
      </Col>
     
      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">2</h1>
      <Card.Body>
      <Card.Title>Long Wait Times</Card.Title>
      
      <Card.Text>Booking appointments often involves long wait times on the phone or delayed responses, discouraging users and impacting customer satisfaction.
        
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>


      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">3</h1>
        <Card.Body>
        <Card.Title>Lack of Options</Card.Title>
        <Card.Text>Users have limited visibility into available services or stylists, making it difficult to find the right match for their preferences and needs.
          
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>


     
    </Row>
    <div className="find pt-5">
   <p className="sol">Findings</p>
   <h4 className="sol">Real-time updates, online booking, and comprehensive information address key salon booking pain points.</h4>
   <p>The pain points reveal opportunities to enhance the salon booking experience. Implementing real-time updates on available time slots addresses the frustration of limited availability, streamlining the booking process and improving convenience. Introducing an online booking system reduces wait times, offering users more control over appointments. Providing comprehensive information about services and stylists empowers users to make informed decisions, fostering satisfaction and loyalty. By addressing these pain points, salons can improve user experience, increase customer satisfaction, and optimize operational efficiency.</p>
    <HashLink smooth to="#conclusion">Jump to the conclusion</HashLink>
  </div>


  <h4 className="pt-5">Affinity Map</h4>
  <p>I sampled their various thoughts, behaviors, and their preference, tried to do affinity mapping to identify themes and patterns to do further research and find commonalities in data.</p>
  <img alt="affinity-map" width="100%" height="100%" src="./images/affinity-map-2.jpg"/>
  <img alt="affinity-map" width="100%" height="100%" src="./images/affinity-map-org-2.jpg"/>
  <div className="find pt-5">
   <p className="sol">Findings</p>
  <ul>
    <li>1. Real-time Updates</li>
    <p>Users seek instantaneous updates on appointment availability, indicating a demand for convenience and flexibility in scheduling.</p>
    <li>2. Online Booking Demand</li>
    <p> There's a strong preference for online booking systems to mitigate long wait times and offer users more control over their appointments.</p>
    <li>3. Enhanced Information</li>
    <p>  Users desire comprehensive details on services and stylists, underscoring the importance of transparency and informed decision-making for customer satisfaction and loyalty.</p>
    <li>4. Need for Accessiblity</li>
    <p>By prioritizing accessibility in the design and development of the salon booking platform, it becomes more inclusive and usable for all individuals, enhancing the overall user experience and ensuring that no one is excluded from accessing salon services.</p>
    
  </ul>
    
  </div>
    
    
    <h4 className="pt-5">User Persona</h4>
    <p>I found it to build user persona because it helps businesses and product developers better understand their users' needs and preferences, allowing them to tailor their offerings to provide a more satisfying experience. By incorporating demographic information, personal goals, and key behaviors, user personas serve as valuable tools for decision-making in product design, marketing strategies, and customer service initiatives.</p>
    <div className="container d-flex align-items-center justify-content-center">
      <img alt="user-persona" width="70%" src="./images/user-persona-2.png"/>
    </div>

    <h4 className="pt-5">User Journey</h4>
    <p>To understand the user concerns, I tried to  go through the user journey map and display her moods and pain points and opportunity areas to further clearify the problem and offer unique solution.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-journey" width="70%" src="./images/user-journey-2.png"/>
    </div>
    <h4 className="pt-5">Competetive Analysis</h4>
    <p>After conducting survey, questionaires, the goal is to determine end user needs and tailor the best solution to make a seemless user experience.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-persona" width="70%" src="./images/competative-analysis-2.png"/>
    </div>
    <div className="find pt-5">
   <p className="sol">Key Findings</p>
 
    <p>The most common features</p>
    <ul>
    <li>Online booking</li>
    <li>Availability badge</li>
    <li>Social Handles</li>
    </ul>
    
    
    <p>Opportunity</p>
    <ul>
    <li>Accessibility</li>
    <li>Navigation</li>
    <li>Cost of using apps</li>
    
    </ul>    
  </div>

  <h2 className="tags pt-5">IDEATE</h2>

    <h4 className="pt-5">Site Map</h4>
    <p>The site map represents the structure of the website. The header of the website shows Home, Profile, Booking and Discover options and custom selections of services and salon availability in town to provide easy navigation for customers, choose favourite stylists options is available as well.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="site-map" width="70%" src="./images/site-map-2.png"/>
    </div>
    <h4 className="pt-5">User Flow</h4>
    <p>I designed the user experience by imagining the user flow of all stages they go through before placing order.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-flow" width="70%" src="./images/user-flow-2.png"/>
    </div>
    <p className="pt-5">This user experience is more personalized and give user more control over the options and selecting their personalized choices.</p>

    <h4 className="pt-5">USER TESTING (WIREFRAMES)</h4>
    <img className="pt-5" width="100%" alt="wire-frames" src="./images/initial-sketch-2.png"/>
    <p className="pt-5">I asked the participants to navigate through the prototype with out guidance and suggest where it needs improvement.</p>

    <div className="color-back p-5">
   <p className="sol">Take Aways</p>
    <ul>
    <li>It was recieved well by the participants and it has easy navigation.</li>
    <li>The menu items can be improved by adding more categorization.</li>
    </ul>
    </div>
    
 
    <h4 className="pt-5">High Fidelity Design</h4>
    <p className="pt-5">The high-fidelity design showcases a seamless fusion of intricate detailing and cutting-edge functionality, elevating user experience to unparalleled heights. Every element has been meticulously crafted to exude sophistication and professionalism while ensuring intuitive navigation and effortless interaction.</p>
    <img className="pt-5" width="100%" alt="high-fidelity" src="./images/high-fidelity-2.png"/>

    <h4 className="pt-5">Improvements</h4>
    <p className="pt-5">The design improvements aim to enhance user experience by optimizing usability and visual appeal. 
      Streamlined navigation enhances ease of use, allowing users to access desired features effortlessly. 
      A cleaner layout reduces clutter and improves readability, guiding users through content more smoothly. 
      Incorporating intuitive design elements, such as clear call-to-action buttons and simplified forms, 
      encourages user engagement and interaction. Enhanced visual hierarchy and consistency in typography 
      and color scheme create a cohesive and polished look, reinforcing brand identity. 
      Overall, these improvements prioritize user needs, resulting in a more intuitive and 
      visually appealing design that fosters a positive and seamless user experience.</p>
      <div className="container d-flex align-items-center justify-content-center">
        <Row>
    <img className="pt-5" width="70%" alt="wire-frames" src="./images/change-1.png"/>
    </Row>
  
    <Row>
    <img className="pt-5" width="70%" alt="wire-frames" src="./images/change-2.png"/>
    </Row>
       </div> 

    <h4 className="pt-5">Final Prototype</h4>
    <div className="container d-flex align-items-center justify-content-center">
    <img className="pt-5" alt="Prototype-gif" width="50%" height="50%" src="./images/gif-2.gif"/>
    </div>
    <h4 className="pt-5">STYLE GUIDE</h4>
    <div className="container d-flex align-items-center justify-content-center">
    <img className="pt-5" alt="style-guide" width="80%" height="80%" src="./images/style-guide-2.png"/>
    </div>
    <h4 className="pt-5" id="conclusion">CONCLUSION</h4>
    <p className="pt-5">In conclusion, the case study on enhancing the salon booking experience underscores the importance of addressing key pain points to improve user satisfaction and operational efficiency. By identifying challenges such as limited availability, long wait times, lack of options, and the need for accessibility, opportunities for innovation and enhancement emerge.

Implementing real-time updates, introducing an online booking system, providing comprehensive information about services and stylists, and ensuring accessibility are crucial steps in mitigating these pain points and elevating the salon booking experience.

Through these enhancements, salons can optimize their operations, attract more clients, and foster customer loyalty. By prioritizing user-centric design and embracing technological solutions, the salon industry can embrace digital transformation and meet the evolving needs of today's consumers.</p>
      

      <p>Future Considerations to improve the app:</p>
      <ul>
        <li>Regularly gather feedback from users to identify emerging pain points and opportunities for further enhancement.</li>
        <li>Explore emerging technologies such as AI chatbots or virtual reality for virtual consultations to further enhance the salon booking experience.</li>
        <li>Consider expanding the platform to include additional services such as spa treatments or beauty packages to cater to a broader audience.</li>
        </ul>
        </div>
   
  </Container>
  </Styles>
)