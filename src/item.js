import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'

class Item extends Component {
  constructor () {
    super()
    this.state = {
      isEditing: false
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.state.isEditing
          ? <h1>waiting for items!</h1>
          : <h1>{this.props.item.value}</h1>
        }
      </React.Fragment>
    )
  }
}

export default Item
