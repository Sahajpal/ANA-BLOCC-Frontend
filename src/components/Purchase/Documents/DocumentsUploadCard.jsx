import React, { Component } from 'react'
import './documentuploadcard.css'
import Upload from './../Upload/Upload'
import axios from 'axios'

class DocumentsUploadCard extends Component {
  onFileUpload = () => {
    const formData = new FormData()

    formData.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name,
    )
    axios.post('api/uploadfile', formData)
  }
  fileData = () => {
    if (this.state.selectedFile) {
      return
    }
  }
  render() {
    return (
      <div className="DocumentsUploadCard">
        <div className="DocumentsUploadCardTop">
          <div className="DocumentsUploadCardDivName">
            <div> Upload the documents required for the purchase</div>
          </div>
        </div>

        <div className="DocumentsUploadCardList">
          <div>
            <div className="DocumentsUploadCardlabel">Mutation doc.</div>
            <Upload></Upload>
          </div>
          <div>
            <div className="DocumentsUploadCardlabel">Registration doc.</div>
            <Upload></Upload>
          </div>
        </div>
        <button
          className="DocumentsUploadCardDocBtn"
          onClick={this.onFileUpload}
        >
          Upload Docs
        </button>
      </div>
    )
  }
}

export default DocumentsUploadCard
