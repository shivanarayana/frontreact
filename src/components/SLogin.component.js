import React, { Component } from 'react';
import { render } from 'react-dom';

export default class StuLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'Enter Your Password Here',
            valuename: 'Enter Your UserName Here'
        };
        this.handleName = this.handleName.bind(this);
        this.handlePwd = this.handlePwd.bind(this);
    }

    handleName(event) {
        this.setState({ valuename: event.target.valuename });
    }

    handlePwd(event) {
        this.setState({ password: event.target.password });
    }


    render() {
        return (
            <div className="Student table" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                valuearea: "center",
                backgroundColor: "blue"
            }}>
                <table>
                    <td><tr><br/>
                        <label>
                            <input type="text" value={this.state.valuename} onChange={this.handleName} />
                        </label>
                    </tr>
                    <tr>
                        <label>
                            <input type="text" value={this.state.password} onChange={this.handlePwd} />
                        </label>
                    </tr>
                    <tr>
                        <button type="button" class="btn btn-secondary btn-sm">Login</button>
                    </tr>
                    </td>
                    <td><button type="button" class="btn btn-secondary btn-sm">Signup</button></td>
                </table>
            </div>
        );
    }
}