import React from "react"
import { Component } from "react"

import "../../css/Notification.css"

export class Notification extends Component {
  public isHidden: boolean
  private timeout: number

  public constructor(props: object) {
    super(props)
    this.isHidden = false
    this.timeout = props["timeout"] || 10
  }

  private waitTimeout = async (): Promise<void> => {
    await new Promise((resolve: Function) => setTimeout(resolve, this.timeout*1000))
    this.isHidden = true
  }

  public componentDidMount = (): void => {
    this.waitTimeout()
  }

  public render = (): JSX.Element => {
    return (
      <div className="tp-notification">
        <div className="tp-notification__header">
          <div className="tp-notification__timeout-line"></div>
        </div>
        <div className="tp-notification__body">
          <p className="tp-notification__message">{this.props["message"]}</p>
        </div>
      </div>
    )
  }
}
