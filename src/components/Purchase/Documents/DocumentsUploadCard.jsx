import React, { useState } from 'react'
import './documentuploadcard.css'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'
import PropertySellingPrice from '../../RegisterSale/PropertySellingPrice/PropertySellingPrice'

/* configure Infura auth settings */
const projectId = process.env.REACT_APP_INFURA_KEY
const projectSecret = process.env.REACT_APP_INFURA_SECRET_KEY
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

/* create the client */
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

function DocumentsUploadCard() {
  const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      updateFileUrl(url)
      console.log('IPFS URI: ', url)
      console.log(process.env.REACT_APP_INFURA_KEY)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  return (
    <div className="DocumentsUploadCard">
      <div className="DocumentsUploadCardTop">
        <div className="DocumentsUploadCardDivName">
          <div> Upload the documents required for the purchase</div>
        </div>
      </div>

      <div className="DocumentsUploadCardList">
        <div>
          <div className="DocumentsUploadCardlabel">Registration doc.</div>
          <div>
            <input type="file" onChange={onChange} required />
          </div>
        </div>
      </div>
      <button className="DocumentsUploadCardDocBtn">Upload Docs</button>
    </div>
  )
}

export default DocumentsUploadCard
