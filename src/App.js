import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      items: []
    }
  }

  // updateText (event) {
  //   this.setState({ text: event.target.value })
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
          <div className='field has-addons'>
            <div className='control'>
              <input className='input is-large is-expanded' type='text' onChange={this.updateText} placeholder='add a "to do" item' text={this.state.text} />
              <button className='addItem button is-info' type='submit' onSubmit={items.push}>add</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default App
