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
import axios from "axios";
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

      const [whitepapers, setWhitepapers] = useState([]);
      const [codefiles, setCodefiles] = useState([]);

      let handleSubmit = async (event) => {
        event.preventDefault();
        const projectName = event.target.projectName.value;
        const email = event.target.email.value;
        const projectDesc = event.target.projectDesc.value;
        
        alert(JSON.stringify({
            'projectName': projectName,
            'email': email,
            'projectDesc': projectDesc,
            'whitepapers': whitepapers,
            'codefiles': codefiles
        }))

        axios({
            method: "POST",
            url:"/createProject",
            data:{
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password"),
                projectId: 12,
                projectName: projectName,
                smartContracts: []
             }
          })
          .then((response) => {
              if (response.status == 200) {
                  console.log(response)
                  alert("Project Created Successfully")
            } else {
                  console.log(response)
                    alert("Error Creating Project")
            }
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          })
    
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
            <Form className="new-project-form" onSubmit={handleSubmit}>
                <Form.Group controlId="form.Name">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" name="projectName" placeholder="Enter Project Name" />
                </Form.Group>
                <Form.Group controlId="form.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="form.Textarea">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control as="textarea" name="projectDesc" rows={3} />
                </Form.Group>
                <Form.Group controlId="form.Whitepaper">
                    <Form.Label>Whitepaper</Form.Label>
                    <Form.Control type="file" accept=".pdf" onChange={(e) => setWhitepapers(e.target.files)} multiple />
                    <Container className="filelist">
                    {whitepapers.length > 0 && Array.from(whitepapers).map( (whitepaper, index) => {
                        return (
                            <div>
                                <span>{String(whitepaper.name)}</span>
                                <span className="preview-button" onClick={() => setPreviewFile(whitepaper)}>Preview</span>
                            </div>
                        )
                    }
                    )}
                    </Container>
                </Form.Group>
                <Form.Group controlId="form.SourceCode">
                    <Form.Label>Source Code Files</Form.Label>
                    <Form.Control type="file" accept=".pdf" onChange={(e) => setCodefiles(e.target.files)} multiple />
                    <Container className="filelist">
                    {codefiles.length > 0 && Array.from(codefiles).map( (codefile, index) => {
                        return (
                            <div>
                                <span>{String(codefile.name)}</span>
                                <span className="preview-button" onClick={() => setPreviewFile(codefile)}>Preview</span>
                            </div>
                        )
                    }
                    )}
                    </Container>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/* <Row className='buttonRow'>


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
        </Row> */}

        </Container>
            
            </td>

            <td className="preview" xs={6} md={6} lg={6}>
                {!previewFile && <div className="pdfViewer-placeholder">
                    <h4>PDF File Viewer</h4>
                    <div>Step 1: Fill in the form on the left</div>                    
                    <div>Step 2: Upload the files under Whitepapers and Source Code Files</div>
                    <div>Step 3: Click on the Preview button to view the file</div>
                    </div>}
                
                {previewFile && (<><Document
                    file={URL.createObjectURL(previewFile)}
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
            <button className="pdf-button" type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
            </button>
            <button className="pdf-button" type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
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