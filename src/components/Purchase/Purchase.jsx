import * as React from 'react'
import './purchase.css'
import Stepper from './Stepper'
import DocumentsUploadCard from './Documents/DocumentsUploadCard'
import PropertySellingPrice from '../RegisterSale/PropertySellingPrice/PropertySellingPrice'

export default function Purchase() {
  return (
    <div>
      <Stepper></Stepper>
      <div className="DocumentTabMainDivList">
        <DocumentsUploadCard />
      </div>
      <PropertySellingPrice/>
    </div>
  )
}
