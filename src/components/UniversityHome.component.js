import React, { Component } from 'react';
import { render } from 'react-dom';
import StudentCampus from "./StudentCampus.component.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer.component.js";
import { Link } from 'react-router-dom';

export default class UniversityHome extends Component {

    render() {

        return (

            <div className="containerdescription" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}>
                <tablehead>
                    <tr>
                        <td><img style= {{width: "100%"}} src={require("./building.JPG")} alt="" className="img-non-responsive" /></td>
                    </tr>
                    <tr >
                        <th><h1><br />Welcome</h1></th>
                    </tr>
                    <tr>
                        <td><p style={{ color: "DarkBlue" }}>The Virtual University offers Higher Education in Technical Fields</p></td>
                    </tr>
                    <Router>
                        <tr>
                            <StudentCampus />
                        </tr>
                        <tr>
                            <Footer />
                        </tr>
                    </Router>
                </tablehead>
            </div>


        );
    }
}