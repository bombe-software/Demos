import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render(){
    return(
      <div>
      <footer className="footer">
        <div className="container footer-override">
          <div className="content has-text-centered">
            <p>
              Desarrollado por Bombe Software
            </p>
            <p>
              
              <a className="icon" href="https://facebook.com/bombesoftware">
                <i className="fa fa-facebook"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a className="icon" href="https://twitter.com/bombesoftware">
                <i className="fa fa-twitter"></i>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a className="icon" href="https://instagram.com/bombesoftware">
                <i className="fa fa-instagram"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default Footer;
