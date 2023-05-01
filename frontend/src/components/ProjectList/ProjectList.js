import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, DropdownButton, Dropdown, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectList.css";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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


const ProjectList = (props) => {
    const [file, setFile] = useState();
    const inputFile = useRef(null);
    const [previewFile, setPreviewFile] = useState();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
    const setProjectIdx= props.setProject;
    const projectIdx = props.project;
    const projectList = props.allProjects;
    const selectedProject = projectList[projectIdx];
    
      return (
        <Container className="projectlist-container">
        <Helmet>
            <title>Projects | Kreek</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='page-name'>
            <span>List of Projects</span>
            <Button as={Link} to='/new-project' className='projectAction-add-button' variant="outline-primary">Add</Button>
        </Container>
        {projectList.map((project, index) => <Project index={index} setProjectIdx={setProjectIdx} project={project}/>)}

        <Container className="project-container">
            <Container className="project">
                <img src='https://storage.googleapis.com/subgraph-images/1656114240805euler-transparent.png' className="project-icon"/>
                <Container className="projectInfo">
                    <h2>Euler Finance</h2>
                    <p>defi</p>
                    {/* <p>{props.projectInfo["projectDate"]}</p> */}
                </Container>
            </Container>
            <Container className='projectAction'>
                <Button className='projectAction-nav-button' as={Link} to='/home' style={{background:'linear-gradient(to right, #857BC5, #A09FFD)'}} variant="outline-primary"><Icon.HouseDoor />Main Page</Button>
                <Button className='projectAction-nav-button' as={Link} to='/overview-euler' style={{background:'linear-gradient(to right, #FFB902, #FDDE01)'}} variant="outline-primary"><Icon.FileEarmarkCode />Smart Contract</Button>
                <Button className='projectAction-nav-button' as={Link} to='/summary' style={{background:'linear-gradient(to right, #03ACF2, #3BC8F8)'}} variant="outline-primary"><Icon.ListTask />Action Page</Button>
                <Button className='projectAction-delete-button' variant="outline-primary">Delete</Button>
            </Container>
        </Container>

        {/* <Project /> */}

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

const Project = (props) => {
    return (
        <Container className="project-container">
            <Container className="project">
                <img src= {props.project['icon']} className="project-icon"/>
                <Container className="projectInfo">
                    <h2>{props.project["name"]}</h2>
                    <p>{props.project["tags"].join(', ')}</p>
                    {/* <p>{props.projectInfo["projectDate"]}</p> */}
                </Container>
            </Container>
            <Container className='projectAction'>
                <Button className='projectAction-nav-button' onClick={() => props.setProjectIdx(props.index)} as={Link} to='/home' style={{background:'linear-gradient(to right, #857BC5, #A09FFD)'}} variant="outline-primary"><Icon.HouseDoor />Main Page</Button>
                <Button className='projectAction-nav-button' onClick={() => props.setProjectIdx(props.index)} as={Link} to='/overview' style={{background:'linear-gradient(to right, #FFB902, #FDDE01)'}} variant="outline-primary"><Icon.FileEarmarkCode />Smart Contract</Button>
                <Button className='projectAction-nav-button' onClick={() => props.setProjectIdx(props.index)} as={Link} to='/summary' style={{background:'linear-gradient(to right, #03ACF2, #3BC8F8)'}} variant="outline-primary"><Icon.ListTask />Action Page</Button>
                <Button className='projectAction-delete-button' variant="outline-primary">Delete</Button>
            </Container>
        </Container>
    )
}

export default ProjectList