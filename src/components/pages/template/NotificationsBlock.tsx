import React from "react"
import { Component } from "react"
import { JsxEmit } from "typescript"

import "../../css/NotificationsBlock.css"

export class NotificationsBlock extends Component {
  private notifications = []

  public constructor(props: object) {
    super(props)
  }

  public render = (): JSX.Element => {
    return (
      <div className="tp-notifications-block">
        {Object.values(this.props["notifications"])}
      </div>
    )
  }
}
