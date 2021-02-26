import React from "react"
import { Component } from "react"

import "../../css/NotificationsBlock.css"

export class NotificationsBlock extends Component {
  public constructor(props: object) {
    super(props)
  }

  public render = (): JSX.Element => {
    return (
      <div className="tp-notifications-block">
        {console.log(
          `\nCurrent notifications: ${Object.keys(
            this.props["notifications"]
          )}\n`
        )}
        {Object.values(this.props["notifications"])}
      </div>
    )
  }
}
