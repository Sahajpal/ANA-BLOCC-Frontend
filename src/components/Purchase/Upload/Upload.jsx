import './upload.css'
import React, { Component } from 'react'

class App extends Component {
  state = {
    selectedFile: null,
  }

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.onFileChange} />
      </div>
    )
  }
}

export default App
