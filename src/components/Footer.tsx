import React, { Component } from "react"
import { NavLink } from "react-router-dom";

import "./css/Footer.css"

export class Footer extends Component {
  render = (): JSX.Element => {
    return (
      <footer>
        <div className="footer_container">
          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">МЕНЮ</p>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["home"]}`} className="footer-menu-link">
                  ГЛАВНАЯ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["content"]}`} className="footer-menu-link">
                  ОГЛАВЛЕНИЕ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["authors"]}`} className="footer-menu-link">
                  АВТОРЫ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["about"]}`} className="footer-menu-link">
                  О ПРОЕКТЕ
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">ТЕМЫ</p>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["content"]}`} className="footer-menu-link">
                  ОБЩЕЕ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["content"]}`} className="footer-menu-link">
                  КРИПТОГРАФИЯ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["content"]}`} className="footer-menu-link">
                  ШИФРОВАНИЕ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["content"]}`} className="footer-menu-link">
                  RSA
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <ul className="footer-menu-list">
              <p className="footer-menu-title">АВТОРЫ</p>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["authors"]}`} className="footer-menu-link">
                  ОБЩЕЕ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["authors"]}`} className="footer-menu-link">
                  М. НИКИШОВ
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["authors"]}`} className="footer-menu-link">
                  А. РУБАШКИН
                </NavLink>
              </li>
              <li className="footer-menu-item">
                <NavLink to={`/${this.props["authors"]}`} className="footer-menu-link">
                  С. МАРЕСИН
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
