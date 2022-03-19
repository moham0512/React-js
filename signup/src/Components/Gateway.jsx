import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./Gateway.css";
import SignUp from "./SignUp";
import Login from "./Login";
import "./fonts/RoyaR.woff";

class Gateway extends React.Component {
  constructor() {
    super();

    this.state = {
      flag: false,
      fontFamilyName : "bnazanin"
    };
  }

  buttonHandler(event) {
    const signuBtn = ReactDOM.findDOMNode(this.refs.signup);
    const loginBtn = ReactDOM.findDOMNode(this.refs.login);

    signuBtn.classList.remove("focus");
    loginBtn.classList.remove("focus");

    event.target.classList.add("focus");
  }

  render() {
    return (
      <div id="main">
        <Router>
          <div className="buttons">
            <button id="signup" onClick={this.buttonHandler.bind(this)}>
              <Link ref="signup" className="links focus" to="/signup">
                ثبت نام
              </Link>
            </button>
            <button id="login" onClick={this.buttonHandler.bind(this)}>
              <Link ref="login" className="links" to="/login">
                ورود
              </Link>
            </button>
          </div>
          <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route exact path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default Gateway;
