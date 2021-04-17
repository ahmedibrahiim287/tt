import React, { Component } from "react";
import logo from "../logo.png";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top navbar-dark " >
        <div className="container">
         
        <div className="navbar-header naaz">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          {" "}
          <span className="sr-only">Toggle navigation</span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">

        <img className="Logo" src={logo}  alt="Logo"/>
        
        </a>{" "}
      </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           
            <ul className="d-md-none nav navbar-nav navbar-right">
              <li>

              </li>
            </ul>


            <ul className="nav navbar-nav navbar-left">
            <li>
                <a href="#features" className="page-scroll">
                      Home
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                Clients
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                Services
                </a>
              </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                Contact us 
                </a>
              </li>
            </ul>

          </div>
      
        </div>
      </nav>
    );
  }
}

export default Navigation;
