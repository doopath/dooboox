import React from "react"
import { Component } from "react"

import "../../css/Notification.css"

export class Notification extends Component {
  private message: string

  public constructor(props: object) {
    super(props)
    this.message = props["message"]
  }

  private waitTimeout = async (): Promise<void> => {
    await new Promise((resolve: Function): void => {
      setTimeout((): void => {
        resolve([this.props["actionCreator"]("REMOVE_LAST_NOTIFICATION")])
      }, 10000)
    })
  }

  public render = (): JSX.Element => {
    this.waitTimeout()
    return (
      <div className="tp-notification">
        <div className="tp-notification__header">
          <div className="tp-notification__timeout-line"></div>
        </div>
        <div className="tp-notification__body">
          <p className="tp-notification__message">{this.message}</p>
        </div>
      </div>
    )
  }
}
