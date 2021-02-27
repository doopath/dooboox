import React from "react"
import { Component } from "react"
import { Notification } from './Notification';

import "../../css/NotificationsBlock.css"

export class NotificationsBlock extends Component {
  public constructor(props: object) {
    super(props)
  }

  public render = (): JSX.Element => {
    return (
      <div className="tp-notifications-block">
        {this.props["notifications"].map((item: Notification) => item.render())}
      </div>
    )
  }
}
