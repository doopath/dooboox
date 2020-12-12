import React, { Component } from "react";

// CSS Styles
import "./css/Footer.css";

export class Footer extends Component {
  render = (): JSX.Element => {
    return (
      <footer>
        <div className="footer_container">
          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">MENU</p>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  MAIN
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  SUMMARY
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  AUTHORS
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">ТЕМЫ</p>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  DEFINITION
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  ALGORITHMS
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  HISTORY
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  SAMPLES
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">AUTHORS</p>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  NICCOLO
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  MEDICI
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  HAYDN
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  TOREADOR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
}
