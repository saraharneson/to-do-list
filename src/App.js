import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Item from './item'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      items: [
        { value: 'wash the car' },
        { value: 'walk the dog' }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ text: event.target.value })
  }

  addItem (e) {
    const newItem = { 'value': this.state.text }
    this.setState({
      items: this.state.items.concat(newItem)
    })
    e.preventDefault()
  }

  render () {
    const items = this.state.items
    return (
      <React.Fragment>
        <h1 className='header'>To Do List</h1>
        <form>
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
                <Item itemValue={item.value} key={idx} />)}
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default App
