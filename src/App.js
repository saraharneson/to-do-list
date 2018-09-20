import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Item from './item'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      items: []
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ text: event.target.value })
  }

  deleteItem (e) {
    const itemsCopy = [...this.state.items]
    const idx = itemsCopy.indexOf(e.target.value)
    itemsCopy.splice(idx, 1)
    this.setState({
      items: itemsCopy
    })
  }

  addItem (e) {
    const newItem = { 'value': this.state.text.trim() }
    this.setState({
      items: this.state.items.concat(newItem)
    })
    this.setState({
      text: ''
    })
  }

  render () {
    const items = [...this.state.items]
    return (
      <React.Fragment>
        <h1 className='header'>To Do List</h1>
        <div>
          <div className='field is-centered'>
            <div className='control'>
              <input className='input is-large'
                type='text'
                onChange={(e) => this.handleChange(e)}
                placeholder='add a "to do" item'
                value={this.state.text} />
              <button className='add-item button is-primary' onClick={(e) => this.addItem(e)}
              >add</button>
              {items.map((item, idx) =>
                <Item deleteItem={this.deleteItem} itemValue={item.value} key={idx} items={this.state.items} />)}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
