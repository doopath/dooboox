import React from "react"
import { Component } from "react"

import "../../css/Notification.css"

export class Notification extends Component {
  /**
   * @description
   * A class of a notification. Using to show some information to user.
   * There is a class of NotificationBlock that gets a list of such notifications
   * and shows it. Usually you can add a notification with actionCreator and 
   * ADD_NEW_NOTIFICATION action type. Every notification set itself property isHidden
   * after some timeout and when you add a new one - a method of the reducer hides 
   * notifications whose time is lost.
   * 
   * @param message: string - private
   * A message that will be shown in a notification card.
   * @param timeout: number - private
   * A notification after this timeout will be hidden.
   * @param isHidden: boolean - public
   * A flag that says if timeout is lost or not.
   */

  private message: string
  private timeout: number
  public isHidden: boolean

  public constructor(props: object) {
    super(props)
    this.isHidden = false
    this.timeout = props["timeout"] || 10
    this.message = props["message"]
    this.validateMessage()
  }

  private validateMessage = (): void => {
    if (this.message.length > 70) {
      throw new Error(`Notifications message length cannot be more than
      70 symbols, but given message has ${this.message.length} symbols!`)
    }
  }

  private waitTimeout = async (): Promise<void> => {
    await new Promise((resolve: Function) => setTimeout(resolve, this.timeout*1000))
    this.isHidden = true
  }

  private getNotificationAnimationTimeout = (): string => {
    return String(this.timeout) + "s"
  }

  private getTimelineAnimationTimeout = (): string => {
    return String(Math.round(this.timeout * 0.9)) + "s"
  }

  public componentDidMount = (): void => {
    this.waitTimeout()
  }

  public render = (): JSX.Element => {
    return (
      <div className="tp-notification" style={{animationDuration: this.getNotificationAnimationTimeout()}}>
        <div className="tp-notification__header">
          <div className="tp-notification__timeout-line" style={{animationDuration: this.getTimelineAnimationTimeout()}}></div>
        </div>
        <div className="tp-notification__body">
          <p className="tp-notification__message">{this.message}</p>
        </div>
      </div>
    )
  }
}
