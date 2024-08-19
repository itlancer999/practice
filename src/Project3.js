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
    <h2 pt-5>LiftUp: Digital Platform for Addiction Recovery</h2>
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
    <span className="faint">Social Services and Community Support</span>
    <br/>
    </Col>
    
    </Row>
    <hr/>
    <img alt="Prototype" width="100%" height="80%"className="align-items-center justify-content-center" src="./images/coverproject3.png"/>
    <div className="p-5">
      <h2 className="tags">Introduction</h2>
      <p className="pt-2">Recovering from addiction is a tough journey, filled with emotional, social, and mental challenges. This project, "LiftUp: Digital Platform for Addiction Recovery" aims to create an easy-to-use digital platform that helps people in recovery. By focusing on the needs of users, we want to build a supportive community, boost motivation, and provide important resources for those working to overcome addiction. This case study will show our research, design process, and the unique features we developed to support and empower people on their recovery path.</p>
    <h2 className="tags">Problem</h2>
    <h2 className="pt-2">Many in recovery lack support and resources, risking relapse and isolation.</h2>
    <p className="pt-2">Individuals in addiction recovery struggle with feelings of isolation, inconsistent access to support, and a lack of personalized resources. Current digital platforms often fail to provide a comprehensive, user-friendly experience that addresses these needs effectively. As a result, recovering addicts may find it difficult to stay motivated and connected, leading to increased risk of relapse. "LiftUp: Digital Platform for Addiction Recovery" aims to tackle these issues by creating an intuitive, supportive digital platform. Our goal is to build a community-focused, easily navigable space that offers personalized resources, progress tracking, and immediate access to support, empowering individuals on their path to recovery.</p>
    


    <Row className="pt-5 splitter">
      <Col className="split">
      <img className="proto" alt="Prototype-gif" width="95%" height="100%" src="./images/cover3.png"/>
      
      </Col>
      <Col className="split">
      <h2 className="tags">Solution</h2>
      <h2 className="pt-2">Create an intuitive, supportive digital platform offering community, resources, and progress tracking.</h2>
      <p className="pt-2">Addressing the significant barriers of stigma, limited access, and complex support systems to ensure individuals facing addiction recovery can easily access support and resources.</p>
      </Col>
    </Row>
    <h2 className="tags pt-5">RESEARCH</h2>
    <p className= "bo pt-2">Identifying opportunity</p>
    <p className="p-2">To achieve these objectives, I tried to utilized a combination of qualitative and quantitative research methods, engaging a diverse group of participants from the nonprofit’s community.</p>
    <p className= "faint1 pt-2">Part One:</p>
    <p className= "bo pt-2">Method: Survey</p>
    <p className= "bo pt-2">Purpose:</p>
    <p>To collect broad quantitative data on user demographics, current recovery resources, and key challenges.</p>
    
    <p className= "bo pt-2">Participants:</p>
    <p>10 individuals in recovery, facilitated by the nonprofit’s network</p>
    <p className= "bo pt-2">Key Questions:</p>
    <ul className="color-back p-5">
      <li className="p-2">What type of addiction are you recovering from? (e.g., alcohol, drugs, prescription medication)</li>
      <li className="p-2">How long have you been in recovery?</li>
      <li className="p-2">What resources do you currently use for support? (e.g., in-person meetings, online resources, mobile apps, telehealth services)</li>
      <li className="p-2">How easy is it for you to find and access recovery resources? (scale from very easy to very difficult)</li>
      <li className="p-2">What are the biggest challenges you face in your recovery journey?</li>
   </ul>
   
   <p className= "faint1 pt-5">Part Two:</p>
    <p className= "bo pt-2">Interviews</p>
    <p className= "bo pt-2">Purpose:</p>
    <p>To gain in-depth qualitative insights into individual experiences, needs, and pain points.</p>
    
    <p className= "bo pt-2">Participants:</p>
    <p>10 individuals selected from the survey respondents for detailed one-on-one interviews.</p>

    <p className= "bo pt-2">Key Questions:</p>
    <ul>
      <li className="p-2">Can you describe your typical day in recovery and the tools you use?</li>
      <li className="p-2">What are the most significant barriers you face in accessing support and resources?</li>
      <li className="p-2">How do you feel about the privacy and security of current digital platforms you use?</li>
      <li className="p-2">What features or functionalities would make a recovery platform more helpful for you?</li>
      <li className="p-2">Have you experienced any usability issues with current digital recovery platforms? If so, what were they?</li>
    </ul>

    <div className="find">
   <p className="sol">Findings</p>
   <h4 className="sol" >Accessibility Issues:</h4>
   <p>Many users reported difficulty navigating current digital platforms due to complex interfaces and poor usability.</p>
   <p>Visual impairments and motor disabilities were common issues, highlighting the need for better accessibility features.</p>
   <h4 className="sol" >Privacy Concerns:</h4>
   <p>A significant number of participants expressed concerns about privacy and anonymity when using digital recovery services.</p>
   <p>Users emphasized the importance of secure communication and clear privacy policies.</p>
   <h4 className="sol">Support and Resources:</h4>
   <p>Personalized resources and progress tracking were highly desired features.</p>
   <p>Users valued community support, including peer interaction and support groups.</p>
   
   <h4 className="sol">Motivation and Engagement:</h4>
   <p>Gamification elements, such as badges and rewards, were seen as motivating factors.</p>
   <p>Regular reminders and progress updates were important for maintaining engagement.</p>

   
   </div>

   <div className="pt-5">
    <p className="sol color-back p-5">
    The user research provided invaluable insights into the needs and challenges faced by individuals in addiction recovery. By addressing these findings, "LiftUp" aims to create a user-friendly, secure, and supportive digital platform that enhances the recovery journey. The collaboration with [RecoveryPath Inc] ensured that our design was grounded in real-world experiences and tailored to meet the unique needs of their community.
    </p>
   </div>

    <h4 className="pt-5">Pain Points</h4>
    <Row className="d-flex align-items-center justify-content-center pt-5 pd-5">
      <Col className="d-flex align-items-center justify-content-center">
        <Card>
          <h1 className="circle">1</h1>
          <Card.Body>
          <Card.Text>Difficulty navigating complex interfaces and poor usability can frustrate users and deter them from accessing necessary resources easily.</Card.Text>
              
          </Card.Body>
        </Card>
      </Col>
     
      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">2</h1>
      <Card.Body>
      <Card.Text>Concerns about privacy are significant barriers for individuals. Fear of judgment can prevent users from fully utilizing recovery services.</Card.Text>
      
      
      </Card.Body>
      </Card>
      </Col>


      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">3</h1>
        <Card.Body>
        <Card.Text>Limited access to personalized resources and progress tracking tools can hinder users' ability to effectively manage and monitor their recovery.</Card.Text>
        
          </Card.Body>
        </Card>
      </Col>

      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">4</h1>
        <Card.Body>
        <Card.Text>Users may struggle to stay motivated and engaged over time without features like gamification, reminders, and progress updates.</Card.Text>
        
          </Card.Body>
        </Card>
      </Col>


     
    </Row>
    <div className="find pt-5">
   <p className="sol">Findings</p>
   <ul>
    <li className="p-2">Users may struggle to stay motivated and engaged over time without features like gamification, reminders, and progress updates.</li>
    <li className="p-2">Without assurances of privacy, users may hesitate to share personal information or participate in online communities, limiting their access to valuable support networks.
    </li>
    <li className="p-2">Lack of tailored support may lead to feelings of isolation or inadequacy, potentially affecting motivation and progress in recovery efforts.</li>
    <li className="p-2">Low motivation can contribute to relapse or disengagement from recovery programs, underscoring the importance of tools that sustain user interest and commitment.</li>
   </ul>

   <p className="sol color-back p-5">
   Addressing these pain points through thoughtful design and development of "LiftUp" will be crucial in creating a platform that not only meets the functional needs of users but also supports their emotional and psychological well-being throughout their recovery journey.
   </p>
    <HashLink smooth to="#conclusion">Jump to the conclusion</HashLink>
  </div>

  <h4 className="pt-5">Empathy Map</h4>
  <p>Creating an empathy map for a case study on addiction recovery involves understanding the thoughts, feelings, actions, and experiences of individuals going through this journey. Here is an Empathy Map:</p>
  <div className="container d-flex align-items-center justify-content-center">
  <img alt="empathy-map" width="70%"  src="./images/empathy-map.gif"/>
  </div>

 
    
    
    <h4 className="pt-5">User Persona</h4>
    <p>I found it to build user persona because it helps businesses and product developers better understand their users' needs and preferences, allowing them to tailor their offerings to provide a more satisfying experience. By incorporating demographic information, personal goals, and key behaviors, user personas serve as valuable tools for decision-making in product design, marketing strategies, and customer service initiatives.</p>
    <div className="container d-flex align-items-center justify-content-center">
      <img alt="user-persona" width="70%" src="./images/user-persona-pr3.gif"/>
    </div>

   
    <h4 className="pt-5">Competetive Analysis</h4>
    <p>After conducting survey, questionaires, the goal is to determine end user needs and tailor the best solution to make a seemless user experience.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-persona" width="70%" src="./images/competetive analysis3.png"/>
    </div>
    <div className="find pt-5">
   <p className="sol">SWOT Analysis for Arbor Vitae Area</p>
 
    <p>Strengths</p>
    <ul>
    <li>Local Demand</li>
    <li>Potential for community support</li>
    </ul>

    <p>Weaknesses</p>
    <ul>
    <li>Limited specialized addiction services</li>
    <li>Accessibility issues for distant services</li>
    </ul>

    <p>Opportunities</p>
    <ul>
    <li>High potential to serve unmet needs</li>
    <li>Telehealth service expansion</li>
    <li>Partnerships with local health systems</li>
    </ul>
    
    
    <p>Threats</p>
    <ul>
    <li>Potential new market entrants</li>
    <li>Changes in healthcare policy</li>
    </ul> 

  </div>

  <h2 className="tags pt-5">IDEATE</h2>

    <h4 className="pt-5">Site Map</h4>
    <p>The site map represents the structure of the website. The header of the website shows Home, Profile, Booking and Discover options and custom selections of services and salon availability in town to provide easy navigation for customers, choose favourite stylists options is available as well.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="site-map" width="70%" src="./images/sitemap3.png"/>
    </div>
    <h4 className="pt-5">User Flow</h4>
    <p>I designed the user experience by imagining the user flow of all stages they go through before placing order.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-flow" width="70%" src="./images/userflow3.png"/>
    </div>
    <p className="pt-5">This user experience is more personalized and give user more control over the options and selecting their personalized choices.</p>

    <h4 className="pt-5">USER TESTING (WIREFRAMES)</h4>
    <img className="pt-5" width="100%" alt="wire-frames" src="./images/wireframe3.png" />
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
    <img className="pt-5" width="100%" alt="high-fidelity" src="./images/highfidelity3.png"/>

    

    <h4 className="pt-5">Final Prototype</h4>
    <div className="container d-flex align-items-center justify-content-center">
    <video className="pt-5" width="750" height="500" controls >
      <source src="./images/prototype3.mp4" type="video/mp4"/>
</video>
    
    </div>
    
    <h4 className="pt-5" id="conclusion">CONCLUSION</h4>
    <p className="pt-5">The addiction recovery website designed Recovery Path Inc, addresses a critical gap in the local healthcare landscape by providing accessible, high-quality addiction recovery services within an 800-kilometer radius. With a user-friendly interface, comprehensive resources, and essential services like appointment booking directly from the homepage, the website is poised to meet the needs of individuals seeking help. The competitive analysis highlights the strengths and opportunities in the local market, positioning the website as a leading resource in the region.</p>
      

      <p>Future Recommendations</p>
      <ul>
        <li><h4>Expand Telehealth Services:</h4> As demand for remote healthcare continues to grow, expanding telehealth offerings will allow the website to reach a broader audience, particularly in remote areas within the 800-kilometer radius.</li>
        <li><h4>Integrate AI-driven Personalized Care:</h4> Utilize AI to provide personalized treatment recommendations and follow-up care based on individual patient data. This could improve patient outcomes and enhance the user experience.</li>
        <li><h4>Explore Funding Opportunities:</h4> Seek grants or partnerships with local businesses and healthcare providers to expand services and ensure long-term sustainability.</li>
        </ul>
        </div>
   
  </Container>
  </Styles>
)