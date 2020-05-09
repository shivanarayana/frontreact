import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { createBrowserHistory as history} from 'history';
//import history from './history';
import { withRouter } from "react-router-dom";

class StudentCampus extends Component {

  handleClickCampus = () => {    
    this.props.history.push("/api/CampusLogin");
    window.location.reload(false);
}

handleClickStudent = () => {
  this.props.history.push("/api/StudentLogin");
  window.location.reload(false);
}


  render() {
    return (
      <div className="Student campus table" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <tablebody>
          <tr>
            <td>
              <img src={require("./Campus logo.JPG")} alt="" className="img-non-responsive" />
              <br /><b>Campus</b><p style={{
                fontSize: "10px"
              }}>FOR ALL CAMPUSES UNDER VU</p></td>
            <td>
              <img src={require("./Student logo.JPG")} alt="" className="img-non-responsive" />
              <br /><b>Student</b><p style={{
                fontSize: "10px"
              }}>STUDENTS UNDER VU</p></td>
          </tr>
          <tr style={{
            fontSize: "13px"
          }}>
            <td>VU is one of the largest universities in India with 218 colleges affiliated to it with an intake capacity of over 467,100 undergraduate students and 12,666 postgraduate students. The university encompasses technical and management fields which offer 30 undergraduate and 71 postgraduate courses.It has around 1800 PhD candidates.
                </td>
            <td>VU is one of the largest universities in India with 218 colleges affiliated to it with an intake capacity of over 467,100 undergraduate students and 12,666 postgraduate students. The university encompasses technical and management fields which offer 30 undergraduate and 71 postgraduate courses.It has around 1800 PhD candidates.
                </td>
          </tr>
          <tr>
            <td>
           
            <button type="button" class="btn btn-primary btn-sm" onClick={this.handleClickCampus}>
              
              LOGIN HERE</button>
           
            <br/>            
            </td>
            <td>
            
            <button type="button" class="btn btn-primary btn-sm" onClick={this.handleClickStudent}>LOGIN HERE</button>
        
            <br/>
            </td>
          </tr>
        </tablebody>
      </div>
    );
  }
}

export default withRouter(StudentCampus);

//onclick={() => history.push('http://localhost:3000/api/StudentLogin')}