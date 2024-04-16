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
  background-color: #e7f097;
  
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

.card{
  padding:5px 10px 80px 5px;
}
}
`;

export const Project = () => (
  <Styles>
  <Container className="project">
    <h2 pt-5>Enhancing Health and Flavor in a Small Town Eatery</h2>
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
    <Link href="/">Figma Design files</Link>
    </Col>
    <Col>
    <span className= "bo">TIMELINE</span>
    <br/>
    <span className="faint">January to February 2024</span>
    <br/>
    <span className= "bo">SECTOR</span>
    <br/>
    <span className="faint">Food Health</span>
    <br/>
    </Col>
    
    </Row>
    <hr/>
    <img alt="Prototype" width="100%" height="80%"className="align-items-center justify-content-center" src="./images/cover.png"/>
    <div className="p-5">
    <h2 className="tags">Problem</h2>
    <h2 className="pt-2">Prioritizing Health while ordering food online and make own choices to get personalized recipes.</h2>
    <h3 className="pt-2">It is difficult to achieve while ordering through food apps.</h3>
    <p className="pt-2">The taco shop faces the challenge of providing customers with healthy food choices while maintaining the appeal of delicious and customizable meals. Traditional taco offerings may lack options for health-conscious individuals, leading to limited choices for those seeking nutritious alternatives. Additionally, customers may lack awareness of the nutritional content of their taco selections, making it difficult to make informed decisions about their meals. As a result, there is a need to enhance the menu offerings and provide a solution that addresses both taste preferences and health concerns, ultimately improving the overall dining experience.</p>
    <Row className="pt-5 splitter">
      <Col className="split">
      <img className="proto" alt="Prototype-gif" width="95%" height="100%" src="./images/gif-1.gif"/>
      
      </Col>
      <Col className="split">
      <h2 className="tags">Solution</h2>
      <h2 className="pt-2">Customized recipe choices with preorder feature to manage time.</h2>
      <p className="pt-2">To address the identified challenges, the taco shop will implement a Custom Taco Option and Calorie Meter feature. This solution will allow customers to create personalized tacos tailored to their taste preferences while providing transparency regarding the nutritional content of their selections. The Custom Taco Option will offer a variety of fresh and healthy ingredients, including lean protein, vegetables, and whole-grain options, catering to different dietary needs and preferences. Additionally, the Calorie Meter feature will display the estimated calorie count for each taco combination, empowering customers to make informed decisions about their food choices. By offering a balance between healthy options and flavorful ingredients, the taco shop aims to make lunchtime more enjoyable and satisfying for customers, promoting both wellness and culinary delight.</p>
      </Col>
    </Row>
    <h2 className="tags pt-5">RESEARCH</h2>
    <p className= "bo pt-2">Identifying opportunity</p>
    <p className= "faint1 pt-2">Part One:</p>
    <p className= "bo pt-2">Method: Observation</p>
    <ul className="color-back p-5">
      <li className="p-2">What strategies can be employed to make lunchtime dining at the taco shop more enjoyable and engaging for customers?</li>
      <li className="p-2">What tools or features can be introduced to help customers make informed decisions about their food choices and promote healthier eating habits?</li>
      <li className="p-2">How can the taco shop differentiate itself from competitors by offering a unique dining experience that prioritizes both taste and wellness?</li>
   </ul>
   <div className="find">
   <p className="sol">Findings</p>
   <h4 >When it comes to choosing what to eat, convenience is a main factor followed by nutrition.</h4>
   <p>Information that help with making an online purchase decision including: Free delivery, Customer Reviews with photos, Price Comparison, high quality food photos, online payment.</p>
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
          <Card.Title>Order Uncertainty</Card.Title>
              <Card.Text>Participants express frustration when unable to pre-order their items for a specific collection time, resulting in uncertainty about the freshness of their order upon arrival for pickup.
              </Card.Text>
          </Card.Body>
        </Card>
      </Col>
     
      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">2</h1>
      <Card.Body>
      <Card.Title>Customize Needs</Card.Title>
      
      <Card.Text>Participants experience dissatisfaction due to the lack of options for ordering custom recipes aligned with their healthy preferences, highlighting the need for more tailored menu selections.
        
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>


      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">3</h1>
        <Card.Body>
        <Card.Title>Tech Aversion</Card.Title>
        <Card.Text>The prevalent pain point lies in the significant portion of the local population, particularly older residents, who strugle with hesitancy and unfamiliarity when navigating online ordering platforms. 
          
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>


      <Col className="d-flex align-items-center justify-content-center">
        <Card>
        <h1 className="circle">4</h1>
        <Card.Body>
        <Card.Title>Nutritional Transparency</Card.Title>
        <Card.Text> 
        In modern age the growing curiosity about food choices and the absence of nutritional information in menus fails to cater to health-conscious individuals, leaving them feeling uninformed.
        </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    <div className="find pt-5">
   <p className="sol">Findings</p>
   <h4>Being informed about the nutritional content of their meals to make more conscious decisions about their diets and scheduled time for pick up</h4>
   <p>The identified pain point revolves around the desire for greater control over menu items and the need for transparency regarding food choices. Participants express a strong preference for being informed about the nutritional content of their meals to make more conscious decisions about their diets. This indicates a growing awareness and concern about health among consumers, particularly regarding the quality and nutritional value of the food they consume. The lack of available information on menu items hinders their ability to make informed choices, leading to dissatisfaction and frustration. Therefore, addressing this pain point by providing detailed nutritional information on menus could significantly improve the dining experience for individuals seeking greater control over their dietary intake.</p>
    <HashLink smooth to="#conclusion">Jump to the conclusion</HashLink>
  </div>


  <h4 className="pt-5">Affinity Map</h4>
  <p>I sampled their various thoughts, behaviors, and their preference, tried to do affinity mapping to identify themes and patterns to do further research and find commonalities in data.</p>
  <img alt="affinity-map" width="100%" height="100%" src="./images/affinity-map.jpg"/>
  
  <div className="find pt-5">
   <p className="sol">Findings</p>
  <ul>
    <li>1.Consumer Empowerment</li>
    <p> In each pain point, there is an underlying theme of consumers seeking more control and autonomy over their dining experiences, whether it's through pre-ordering, customization options, or access to nutritional information.</p>
    <li>2.Dissatisfaction with current offerings</li>
    <p> Participants express dissatisfaction with existing practices or options, indicating a gap between consumer expectations and what is currently provided by food establishments.</p>
    <li>3.Need for Transparency</li>
    <p> There is a shared desire for services such as online platforms should offer more transparency in information and nutritional details.</p>
    <li>4.Need for Accessiblity</li>
    <p>There is a desire for accessibility to services,  emphasizing the importance of clear communication and user-friendly experiences in the dining industry.</p>
    
  </ul>
    
  </div>
    
    
    <h4 className="pt-5">User Persona</h4>
    <p>I found it to build user persona because it helps businesses and product developers better understand their users' needs and preferences, allowing them to tailor their offerings to provide a more satisfying experience. By incorporating demographic information, personal goals, and key behaviors, user personas serve as valuable tools for decision-making in product design, marketing strategies, and customer service initiatives.</p>
    <div className="container d-flex align-items-center justify-content-center">
      <img alt="user-persona" width="70%" src="./images/user-persona.png"/>
    </div>

    <h4 className="pt-5">User Journey</h4>
    <p>To understand the user concerns, I tried to  go through the user journey map and display her moods and pain points and opportunity areas to further clearify the problem and offer unique solution.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-journey" width="70%" src="./images/user-journey.png"/>
    </div>
    <h4 className="pt-5">Competetive Analysis</h4>
    <p>After conducting survey, questionaires, the goal is to determine end user needs and tailor the best solution to make a seemless user experience.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-persona" width="70%" src="./images/competitive-analysis.png"/>
    </div>
    <div className="find pt-5">
   <p className="sol">Key Findings</p>
 
    <p>The most common features</p>
    <ul>
    <li>High quality photos and representation.</li>
    <li>Detailed food descriptions</li>
    <li>Easy website Navigation</li>
    </ul>
    
    
    <p>Opportunity</p>
    <ul>
    <li>Pre order schedule</li>
    <li>Custom Menu Selections</li>
    <li>Nutritional Transperancy</li>
    <li>Accessibility feature</li>
    
    </ul>    
  </div>

  <h2 className="tags pt-5">IDEATE</h2>

    <h4 className="pt-5">Site Map</h4>
    <p>The site map represents the structure of the website. The header of the website shows home, contact, menu options and custom selections categorized by different foods to provide easy navigation for customers, and food cart.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="site-map" width="70%" src="./images/site-map.png"/>
    </div>
    <h4 className="pt-5">User Flow</h4>
    <p>I designed the user experience by imagining the user flow of all stages they go through before placing order.</p>
    <div className="container d-flex align-items-center justify-content-center">
    <img alt="user-flow" width="70%" src="./images/user-flow.png"/>
    </div>
    <p className="pt-5">This user experience is more personalized and give user more control over the options and selecting their personalized choices and save meal time preps that they spend at home to prepare meals. So it is more user friendly and transparent.</p>

    <h4 className="pt-5">USER TESTING (WIREFRAMES)</h4>
    <img className="pt-5" width="100%" alt="wire-frames" src="./images/wire-frame.png"/>
    <p className="pt-5">I asked the participants to navigate through the prototype with out guidance and suggest where it needs improvement.</p>

    <div className="color-back p-5">
   <p className="sol">Take Aways</p>
    <ul>
    <li>It was recieved well by the participants and have easy navigation.</li>
    <li>The menu items can improve by adding more categorization.</li>
    </ul>
    </div>
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
    <img className="pt-5" width="70%" alt="wire-frames" src="./images/wire-frame-2.png"/>
    </Row>
    <Row>
    <img className="pt-5" width="70%" alt="wire-frames" src="./images/wire-frame-1.png"/>
    </Row>
       </div> 
 
    <h4 className="pt-5">High Fidelity Design</h4>
    <p className="pt-5">The high-fidelity design showcases a seamless fusion of intricate detailing and cutting-edge functionality, elevating user experience to unparalleled heights. Every element has been meticulously crafted to exude sophistication and professionalism while ensuring intuitive navigation and effortless interaction.</p>
    <img className="pt-5" width="100%" alt="high-fidelity" src="./images/high-fidelity.png"/>

    <h4 className="pt-5">Final Prototype</h4>
    <div className="container d-flex align-items-center justify-content-center">
    <img className="pt-5" alt="Prototype-gif" width="50%" height="50%" src="./images/gif-1.gif"/>
    </div>
    <h4 className="pt-5">STYLE GUIDE</h4>
    <div className="container d-flex align-items-center justify-content-center">
    <img className="pt-5" alt="style-guide" width="80%" height="80%" src="./images/style-guide.png"/>
    </div>
    <h4 className="pt-5" id="conclusion">CONCLUSION</h4>
    <p className="pt-5">In conclusion, the high-fidelity design represents a significant leap 
      forward in enhancing user experience through its refined aesthetics and seamless 
      functionality. However, to further 
      improve the user experience, it is suggested to conduct thorough usability 
      testing to identify any potential pain points and refine the design accordingly. 
      Additionally,some of the things that I would like to improve in my design are:</p>
      <ul>
        <li>Add multiple selections without showing the prompt.</li>
        <li>Add accessibility navigation feature on website that I have noticed on a lot of website and those who are still working on it they added those details.</li>
        </ul>

      <p>Things that I have learned along the way are:</p>
      <ul>
        <li>Story telling is an art of presenting the case study.</li>
        <li>Good choice of words is harder than working on design templates and to present it as a story.</li>
        <li>Iterating and taking suggestion is all what it takes to make a good design a best design.</li>
        </ul>
        </div>
   
  </Container>
  </Styles>
)