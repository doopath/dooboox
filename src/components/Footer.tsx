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
              <p className="footer-menu-title">МЕНЮ</p>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  ГЛАВНАЯ
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  СОДЕРЖАНИЕ
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  АВТОРЫ
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  О ПРОЕКТЕ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">ТЕМЫ</p>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  ОПРЕДЕЛЕНИЕ
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  АЛГОРИТМЫ
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  ИСТОРИЯ
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="/" className="footer-menu-link">
                  ПРИМЕРЫ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">АВТОРЫ</p>
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
