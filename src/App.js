import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './Home';
import {Project} from './Project';
import {Project2} from './Project2';
import {Project3} from './Project3';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Footer} from './Footer';
import {ScrollUp} from './ScrollUp';


class App extends Component {
  render(){
  return (
   
   <React.Fragment>
    
       <Layout>
        <Router>
        <NavigationBar />
      
          <Routes>
        
            <Route exact path="/" element={<Home />} />
            <Route  path="Project" element={<Project />} />
            <Route  path="Project2" element={<Project2 />} />
            <Route  path="Project3" element={<Project3 />} />

          </Routes>

         
          <ScrollUp />
      

        <Footer />
        </Router>
      </Layout>
   
    </React.Fragment>
   
  );
  }
}

export default App;
