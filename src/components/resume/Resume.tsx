import './Resume.css'
import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import Header from '../header/Header'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess(pdf: any) {
    setNumPages(pdf.numPages)
    setPageNumber(1)
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  const onDownloadClick = () => {
    fetch('./pdf/Adrien_Dudon_CV.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let aLink = document.createElement('a');
        aLink.href = fileURL;
        aLink.download = 'Adrien_Dudon_CV';
        aLink.click();
      })
    })
  }

  return (
    <>
      <Header color="transparent" />
      <div className="resume-container">
        <button className="resume__download-btn" onClick={onDownloadClick}>
          <FontAwesomeIcon icon={solid('download')} /> Download my CV
        </button>

        <p className="resume-container__warning">The PDF file below is a bit buggy, I am looking for a better
          solution.</p>
        <p className="resume-container__warning"><strong>For now, please, download my resume directly from the link
          above to prevent any issues :-). Many thanks!</strong></p>

        <Document className="resume-document" file="./pdf/Adrien_Dudon_CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page renderMode="canvas" className="resume-page" pageNumber={pageNumber} />

          <div className="page-controls">
            <button disabled={pageNumber <= 1} type="button" onClick={previousPage}>‹</button>
            <span>{pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</span>
            <button type="button" disabled={pageNumber >= numPages!} onClick={nextPage}>›</button>
          </div>
        </Document>

      </div>
    </>
  )
}

export default Resume