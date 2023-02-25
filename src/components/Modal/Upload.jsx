import React, { Component } from 'react'
import axios from 'axios'

class Upload extends Component {
    state = { selectedFile: null }
  
    onFileChange = (event) => {
      this.setState({ selectedFile: event.target.files[0] })
    }
  
    onFileUpload = () => {
      const formData = new FormData()
      formData.append(
        'myFile',
        this.state.selectedFile,
        this.state.selectedFile.name,
      )
      axios.post('api/uploadfile', formData)
    }
  
    render() {
      return (
        <div>
          <div>
            <input type="file" onChange={this.onFileChange} />
          </div>
        </div>
      )
    }
  }

  export default Upload