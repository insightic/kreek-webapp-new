import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, DropdownButton, Dropdown, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Summary.css";
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


const SummaryEuler = (props) => {
    const [file, setFile] = useState();
    const inputFile = useRef(null);
    const [previewFile, setPreviewFile] = useState();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    const [projectList, setProjectList] = useState([]);
    const projectIdx = props.project;
    const allProjects = props.allProjects;
    const selectedProject = allProjects[projectIdx];

      return (
        <Container className="summary-container">
        <Helmet>
            <title>Summary | Insightic</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='project-title'>
            <span>Euler Finance</span>
        </Container>

        <Container className='summary'>
            <span>Summary</span>
            <Container className='summary-content'>
                <Container className='indicator'>
                    <h5>Total Suggestion</h5>
                    <span>17</span>
                </Container>

                <Container className='indicator'>
                    <h5>Completed</h5>
                    <span>5</span>
                </Container>

                <Container className='indicator'>
                    <h5>Action needed</h5>
                    <span>8</span>
                </Container>
            </Container>
        </Container>

        <Container className='actions'>
        <span>Action</span>
            <Container className='actions-content'>
                <Container className='action-col'>
                    <ActionCard type='error' title="The DAO voting is highly centralized." message="10 votings events are led by a single address (> 50% weight). Request the VASP to propose a more balanced voting strategies."
                    addElem = {<div className='addElem'>
                        <h6>Reference:</h6>
                        <span>[1] <a href="https://limechain.tech/blog/dao-voting-mechanisms-explained-2022-guide/"> DAO Voting Mechanisms Explained [2022 Guide] </a></span>
                    </div>}/>
                    
                    <ActionCard type='error' title="The DAO voting is highly centralized." message="Request the VASP to conduct KYC for addresses, unless reducing their voting weights:" addElem={
                        <div className='addElem'>
                            <span>0x1A185F9F55b161E921C74FDeF3C444b8Dd2B8B16</span>
                            <span>0x2aB8019A3191861F8235ec9FC5a9087d04682480</span>
                            <span>0xD178F2d93B92Ac47cf51a899463Eca8acC37A8D5</span>
                            <span>0x66cD62c6F8A4BB0Cd8720488BCBd1A6221B765F9</span>
                        </div>}/>
                    <ActionCard type='error' title="Core contract has been modified recently." message="Suggest the VASP to submit at least two security audit reports that covers the upgrades within 45 days."/>
                </Container>

                <Container className='action-col'>
                    <ActionCard type='warning' title="A new developer address added." message="Request the VASP to conduct KYC for the new developer. No contract modification is allowed until the KYC is verified."/>
                </Container>

                <Container className='action-col' title="Partnership with risky projects" message="The VASP has released a partnership announcement recently, with a risky project. ">
                    {/* <ActionCard type='message' title="Risky wallets interaction" message="The deployed contract has attracted many newly wallets. Require VASP to validate their users. "/> */}
                </Container>
            </Container>
        </Container>

        <Container className='tasks'>
        <span>Tasks</span>
            <Container className='tasks-content'>
                <Container className='tasks-col'>
                    <ActionCard type='error' title="Add security audit report" message="Suggest the VASP to submit at least another security audit report within 45 days. "/>
                </Container>

                <Container className='tasks-col'>
                    <ActionCard type='warning' title="Update code and whitepapers" message="Suggest the VASP to link Github account or submit a new code base. "/>
                </Container>

                <Container className='tasks-col'>
                    <ActionCard type='message' title="Check the interaction of the wallets" message="The deployed contract has attracted many newly wallets. Require VASP to validate their users. "/>
                </Container>
            </Container>
        </Container>


        </Container>
    );
}

const iconSize = 40
const dummyProjectList = [
    {
        "icon": <Icon.CurrencyExchange className="project-icon" style={{'color': 'red'}} size={iconSize} />,
        "projectInfo": {
            "projectName": "Uniswap V2",
            "projectDescription": "Decentralized exchange",
            "date": "2021-01-01",
        }
    },
    {
        "icon": <Icon.CurrencyBitcoin className="project-icon" style={{'color': 'blue'}} size={iconSize} />,
        "projectInfo": {
            "projectName": "AAVE V3",
            "projectDescription": "Lending protocol",
            "date": "2022-03-10",
        }
    },
    {
        "icon": <Icon.CurrencyEuro className="project-icon" style={{'color': 'purple'}} size={iconSize} />,
        "projectInfo": {
            "projectName": "Biswap",
            "projectDescription": "Decentralized exchange on BSC",
            "date": "2022-05-16",
        }
    },

]

const ActionCard = (props) => {
    const style = props.type === "error" ? 
                {
                    "backgroundColor": "#E6D0D0",
                    'color': '#EB5757'
                } : props.type === "warning" ?
                {
                    "backgroundColor": "#E7DED6",
                    'color': '#F2994A'
                } : props.type === "message" ? 
                {
                    "backgroundColor": "#CADAE4",
                    'color': '#2F80ED'
                } : {
                    "backgroundColor": "#FFFFFF",
                    'color': '#721C24'
                }

    const icon = props.type === "error" ?
                <Icon.ExclamationTriangle className="action-icon" style={{'color': '#EB5757'}} size={iconSize} /> 
                : props.type === "warning" ?
                <Icon.ExclamationCircle className="action-icon" style={{'color': '#F2994A'}} size={iconSize} /> 
                : props.type === "message" ?
                <Icon.CheckCircle className="action-icon" style={{'color': '#2F80ED'}} size={iconSize} />
                : <Icon.InfoCircle className="action-icon" style={{'color': '#721C24'}} size={iconSize} />

    const [show, setShow] = useState(false);

    useEffect(() => {
        if(show) {document.body.style.overflow = 'hidden';}
        else {document.body.style.overflow = 'unset';}
     }, [show]);

    return (
        <Container className="action-card" style={style}>
            <div>
                {icon}
                <h5>{props.title}</h5>
            </div>
            <p>
                {props.message.length > 80 ? props.message.substring(0,80) + '...' : props.message}
                <span onClick={() => setShow(true)} variant="outline-primary">Details</span>
            </p>
            
            {show ? <PopUp setShow={setShow} title={props.title} message={props.message} addElem={props.addElem} /> : null}
        </Container>
    )
}


const PopUp = (props) => {
    const close = () => props.setShow(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (e) => {
      const option = e.target.value;
      const isChecked = e.target.checked;
  
      if (isChecked) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
        setSelectedOptions(selectedOptions.filter((o) => o !== option));
      }
    };

    return (
        <Container className="popup">
            <Container className="popup-content">
                <div className="close" onClick={close}>
                    &times;
                </div>
                <h3>{props.title}</h3>
                <p>{props.message}</p>
                {props.addElem}

                <Form className='popup-action'>
                    <Form.Check
                        inline
                        label="Email to VASP applicant"
                        type="checkbox"
                        id="option1"
                        value="option1"
                        onChange={handleCheckboxChange}
                        checked={selectedOptions.includes("option1")}
                    />
                    <Form.Check
                        inline
                        label="Add to watchlist"
                        type="checkbox"
                        id="option2"
                        value="option2"
                        onChange={handleCheckboxChange}
                        checked={selectedOptions.includes("option2")}
                    />
                    <Form.Check
                        inline
                        label="Feedback to internal regulator consultants"
                        type="checkbox"
                        id="option3"
                        value="option3"
                        onChange={handleCheckboxChange}
                        checked={selectedOptions.includes("option3")}
                    />
                </Form>
                <Button variant="outline-primary" onClick={close}>Confirm</Button>
                <Button variant="outline-primary" onClick={close}>Cancel</Button>
            </Container>
        </Container>
    )
}

export default SummaryEuler