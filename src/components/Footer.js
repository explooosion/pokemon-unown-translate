import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Power by &nbsp;
          <a className="footer-link" href="https://github.com/explooosion">@Robby</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
