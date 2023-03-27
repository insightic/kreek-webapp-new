import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, CardDeck, Form, Jumbotron, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewProject.css";
import { Helmet } from 'react-helmet';
import * as Icon from 'react-bootstrap-icons';
import sample from '../Home/codeblock.js';
import csv from '../../assets/csv.png';
import ResizableTable from '../ResizableTable/ResizableTable';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import samplePdf from "../../assets/sample.pdf"
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const NewProject = () => {
    const [file, setFile] = useState();
    const inputFile = useRef(null);
    const [previewFile, setPreviewFile] = useState();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const browsefile = () => {
        inputFile.current.click();
      };

      const readfile = () => {
        setPreviewFile(file);
      };

      return (
        <Container className="newproject-container">
        <Helmet>
            <title>Home | Kreek</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='project-name'>
            Create a New Project
        </Container>



        <ResizableTable resizable={true} resizeOptions={{liveDrag:true}}>
        <tbody className="newproject">
          <tr>
            <td className="sections" xs={6} md={6} lg={6}>
            <Container>
            <Row className='buttonRow'>
            <Col className='buttonCol'>
                <Form.Control type="file" ref={inputFile} accept=".*" style={{display: 'none'}} onChange={(e) => {setFile(e.target.files[0])}}/>
                <Button className='secButton3' onClick={() => browsefile()}>
                <img src={csv} width='25px' className='inputMethodButton'></img>
                Upload Csv
                </Button>
            </Col>

            <Col className='buttonCol'>
                <Button className='secButton3' onClick={() => readfile(file)}>
                Read File
                </Button>
            </Col>

            <Col className='buttonCol'>
            </Col>

            {file && <Container style={{marginTop:'15px'}}>File Seclected: {file.name}</Container>}
        </Row>

        </Container>
            
            </td>

            <td className="preview" xs={6} md={6} lg={6}>
                
                {file && (<><Document
                    file={URL.createObjectURL(file)}
                    // options={{ workerSrc: "../../assets/sample.pdf" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                    width={400}
                    height={document.getElementsByClassName('PdfDiv')[0]?.clientHeight*0.8 ?? 150}
                    pageScale={1}
                    className="rounded overflow-hidden shadow-lg "
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    pageNumber={pageNumber}
                    />
                </Document>
            <div>
            <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
            </button>
            <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
            Next
            </button>
            </div>
            </>
                )}
                {/* <embed className="pdf" src={samplePdf} type="application/pdf"></embed> */}

                {/* {file && (
                    <embed src={URL.createObjectURL(file)} type="application/pdf" width="100%" height="600px" />
                )} */}
                
            </td>

          </tr>
        </tbody>
      </ResizableTable>




        </Container>
    );
}

export default NewProject