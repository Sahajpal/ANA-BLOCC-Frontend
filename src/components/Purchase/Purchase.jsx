import * as React from 'react'
import './purchase.css'
import Stepper from './Stepper'
import Upload from './Upload/Upload'
import MediumButton from '../Button/Medium/MediumButton'
import DocumentsUploadCard from './Documents/DocumentsUploadCard'

export default function Purchase() {
  return (
    <div>
      <Stepper></Stepper>
      <div className="DocumentTabMainDivList">
        <DocumentsUploadCard />
      </div>
    </div>
  )
}
