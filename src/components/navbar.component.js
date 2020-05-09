import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand"><b>VIRTUAL UNIVERSITY</b></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Faculty" className="nav-link">Faculty</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Placements" className="nav-link">Placements</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Events" className="nav-link">Events</Link>
          </li>
          <li className="navbar-item">
          <Link to="/ContactUsShiva" className="nav-link">ContactUs</Link>
          </li>
                            
        </ul>
        </div>
      </nav>
    );
  }
}