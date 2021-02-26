import React from "react"
import { Component } from "react"

import "../../css/Notification.css"

export class Notification extends Component {
  public constructor(props: object) {
    super(props)
    console.log(`Current id - ${props["id"]} (In the constructor)`)
  }

  private waitTimeout = async (): Promise<void> => {
    await new Promise((resolve: Function) => setTimeout(resolve, 10000))
    await this.props["actionCreator"]("REMOVE_NOTIFICATION", this.props["id"])
    console.log("REMOVED\n")
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
