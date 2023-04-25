import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, DropdownButton, Dropdown, Button} from "react-bootstrap";
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


const ProjectList = () => {
    const [file, setFile] = useState();
    const inputFile = useRef(null);
    const [previewFile, setPreviewFile] = useState();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const p = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAllProjects',
            headers: {}, 
            data: {}
          }).then(function (response) {
            console.log("debug1")
            console.log(response['data'])
            setProjectList(response['data']['project_list'])
            return response['data']
          })
    }, [])
    
      return (
        <Container className="summary-container">
        <Helmet>
            <title>Summary | Kreek</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='project-title'>
            <span>Project Name</span>
        </Container>

        <Container className='summary'>
            <span>Summary</span>
            <Container className='summary-content'>
                <Container className='indicator'>
                    <h5>Indicator 1</h5>
                    <span>17</span>
                </Container>

                <Container className='indicator'>
                    <h5>Indicator 2</h5>
                    <span>5</span>
                </Container>

                <Container className='indicator'>
                    <h5>Indicator 3</h5>
                    <span>8</span>
                </Container>
            </Container>
        </Container>

        <Container className='actions'>
        <span>Action</span>
            <Container className='actions-content'>
                <Container className='action-col'>
                    <ActionCard type='error' title="Require 1 or more security audit report" message="Suggest the VASP to submit at least another security audit report within 45 days. Details...."/>
                    <ActionCard type='error' title="Code has high similarity to Uniswap" message="Suggest the VASP to further clarify the differences for not violating Business Source License. Details...."/>
                    <ActionCard type='error' title="Core contract has been modified recently" message="Dangerous to update the core smart contract code. The audit reports may not be sufficient. Details..."/>
                </Container>

                <Container className='action-col'>
                    <ActionCard type='warning' title="Code has not been updates for long time" message="Suggest the VASP to link Github account or submit a new code base. Details..."/>
                    <ActionCard type='warning' title="High botting rate" message="Suggest to review the VASP’s solution on bot detection and IP restriction. Details..."/>
                    <ActionCard type='warning' title="Orderbook Spoofing" message="There is a high chance that the order book design has no restriction on spoofing. Details..."/>
                </Container>

                <Container className='action-col' title="Partnership with risky projects" message="The VASP has released a partnership announcement recently, with a risky project. Details...">
                    <ActionCard type='message' title="Risky wallets interaction" message="The deployed contract has attracted many newly wallets. Require VASP to validate their users. Details...."/>
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


    return (
        <Container className="action-card" style={style}>
            {icon}
            <div>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
            </div>
        </Container>
    )
}

export default ProjectList