import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuearea: 'Enter Your Message Here',
      valuename: 'Name',
      valuemail: 'E-mail',
      valuesubject: 'Subject',
      valuecontact: 'Contact'
    };    

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ valuename: event.target.valuename });
  }

  handleEmail(event) {
    this.setState({ valuemail: event.target.valuemail });
  }

  handleSubject(event) {
    this.setState({ valuesubject: event.target.valuesubject });
  }

  handleContact(event) {
    this.setState({ valuecontact: event.target.valuecontact });
  }

  handleChange(event) {
    this.setState({ valuearea: event.target.valuearea });
  }

  handleSubmit(event) {
    alert('Details Submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      < div style={{backgroundColor: "blue"}}>

        <tableform className="Student campus table" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          valuearea: "center"
        }}>
          <form onSubmit={this.handleSubmit}>
            <tr>
              <br/>
              <label>
                <input type="text" value={this.state.valuename} onChange={this.handleName} />
              </label> 
              <label>
                <input type="text" value={this.state.valuemail} onChange={this.handleEmail} />
              </label>
            </tr>
            <tr>
                <label>
                  <input  type="text" value={this.state.valuesubject} onChange={this.handleSubject} />
                </label>
                <label>
                  <input type="text" value={this.state.valuecontact} onChange={this.handleContact} />
                </label>         
              
            </tr>
            <tr>
              
                <label>
                  <textarea style={{
                    width: "520px"
                  }} value={this.state.valuearea} onChange={this.handleChange} />
                </label><br />
              
            </tr>
            <tr>
            
            <button type="button" class="btn btn-secondary btn-sm">SEND MESSAGE</button>
                            
            </tr>            
            
            <tr><br/><p style={{
                fontSize: "12px", color: "dark"
              }}>
            © ALL RIGHTS RESERVED | SKILL ASSESSMENT FOR MAVOIX SOLUTIONS PVT LTD
              </p>
              </tr>
              </form>
        </tableform>
      </div>

    );
  }
}

export default Footer;