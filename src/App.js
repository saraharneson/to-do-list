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
    console.log(this.state.items)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ text: event.target.value })
  }

  // addItem () {
  // }

  // should we use something to use enter as submit, or just use button?
  // enterText (e) {
  // }

  render () {
    const items = this.state.items
    return (
      <React.Fragment>
        <h1 className='header'>To Do List</h1>
        <form>
          <div className='field'>
            <div className='control'>
              <input className='input is-large'
                type='text'
                onChange={(e) => this.handleChange(e)}
                placeholder='add a "to do" item'
                value={this.state.text} />
              <button className='add-item button is-info'
                type='submit'
                onSubmit={items.push}>add</button>
              <Item text={this.state.text} item={this.state.items} />
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default App
