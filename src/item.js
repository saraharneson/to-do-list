import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'

class Item extends Component {
  constructor (props) {
    super()
    this.state = {
      isEditing: false,
      text: props.itemValue
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ text: event.target.value })
  }

  edit () {
    this.setState({
      isEditing: true
    })
  }

  save () {
    this.setState({
      isEditing: false
    })
  }

  render () {
    return (
      <React.Fragment>
        {this.state.isEditing
          ? <input className='edit-field'
            value={this.state.text}
            placeholder={this.state.text}
            onBlur={() => this.save()}
            onChange={(event) => this.handleChange(event)} />
          : <div className='item-list'
            onDoubleClick={() => this.edit()}>
            <input className='check-box' type='checkbox' />
            <p className='displayed-items'>{this.state.text}
              <button
                className='delete is-small'
                onClick={this.props.deleteItem}
              />
            </p>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default Item
