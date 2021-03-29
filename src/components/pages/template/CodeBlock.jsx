import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";

import tux from "../../../img/tux.svg";
import reactIcon from "../../../img/reactLogo.svg"

export class CodeBlock extends Component {
  createCodeItems = (lines) => {
    return lines.map((l, i) => (
      <li className="tp-code" key={i}>
        <pre dangerouslySetInnerHTML={{ __html: this.props.highlight(l) }}></pre>
      </li>
    ));
  };

  createCodeResultItems = (lines) => {
    return lines.map((l, i) => (
      <li className="tp-code result" key={i}>
        <pre>{l}</pre>
      </li>
    ));
  };

  render = () => {
    return (
      <div className="tp-code_block">
        <div className="tp-code_container">
          <div className="tp-code_box">
            <div className="dots">
              <div className="dot-red"></div>
              <div className="dot-green"></div>
              <div className="dot-yellow"></div>
            </div>

            <div className="tp-code_buffer-bar">
              <div className="tp-code_buffer">
                <span className="tp-code_buffer--name">1: dooboox/</span>
                <FontAwesomeIcon icon={faFolder} />
              </div>

              <div className="tp-code_buffer">
                <span className="tp-code_buffer--name">2: NERDTree </span>
                <img src={reactIcon} alt="no icon"/>
              </div>

              <div className="tp-code_buffer buffer_active">
                <span className="tp-code_buffer--name">3: main.ts +</span>
                <svg
                  fill="#81a1c1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48px"
                  height="48px"
                >
                  <path d="M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z" />
                </svg>
              </div>

              <div></div>

              <div className="tp-code_buffer buffer-title">
                <span className="tp-code_buffer-name">buffers</span>
              </div>
            </div>

            <ul className="tp-code_list">
              {this.createCodeItems(this.props.lines)}
            </ul>

            <ul className="tp-code_list result_list">
              <p className="result-title">Result: </p>
              {this.createCodeResultItems(this.props.result)}
            </ul>

            <div className="tp-code_state-bar">
              <div className="tp-code_mode">
                <span>NORMAL</span>
              </div>

              <div className="tp-code_bar-type">
                <span>BAR TYPE: MOBILE</span>
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>

              <div className="tp-code_main-info">
                <div className="tp-code_buffer-name">
                  <span>~/coderpool/example/main.ts</span>
                </div>

                <div className="tp-code_extension-name">
                  <span>typescript</span>
                  <svg
                    fill="#5E81AC"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48px"
                    height="48px"
                  >
                    <path d="M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z" />
                  </svg>
                </div>
              </div>

              <div className="tp-code_system-type">
                <span>utf-8</span>
                <img src={tux} alt="no icon" />
              </div>

              <div className="tp-code_buffer-info">
                <span className="buffer-procents">100%</span>
                <span className="buffer-size">12/50</span>
                <span className="buffer-symbol-number">ln:26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
