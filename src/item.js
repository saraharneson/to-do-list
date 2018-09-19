import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'

class Item extends Component {
  constructor () {
    super()
    this.state = {
      isEditing: false,
      text: '',
      items: []
    }
  }

  export default Item