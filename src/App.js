import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component"
import UniversityHome from "./components/UniversityHome.component";
import Faculty from "./components/Faculty.component";
import Placements from "./components/Placements.component";
import Events from "./components/Events.component";
import ContactUs from "./components/ContactUs.component";
import CamLogin from "./components/CLogin.component";
import StuLogin from "./components/SLogin.component";
import history from './history';

function App() {
  return (
    <Router history={history}>
        <div className="container">       
        <Navbar />        
        <Route path="/" exact component={UniversityHome} />
        <Route path="/Faculty" exact component={Faculty} />
        <Route path="/Placements" exact component={Placements} />
        <Route path="/Events" exact component={Events} />
        <Route path="/ContactUs" exact component={ContactUs} />         
        <Route path="/api/CampusLogin" exact component={CamLogin} />   
        <Route path="/api/StudentLogin" exact component={StuLogin} />   
        </div>        
      </Router>
  );
}

export default App;
