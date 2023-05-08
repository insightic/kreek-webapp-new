import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, DropdownButton, Dropdown, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Overview.css";
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


const Overview = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    const [isOpen2, setIsOpen2] = useState(true)
    const [isOpen3, setIsOpen3] = useState(true)
    const [isOpen4, setIsOpen4] = useState(true)

    const [isOpen11, setIsOpen11] = useState(true)
    const [isOpen12, setIsOpen12] = useState(true)
    const [isOpen21, setIsOpen21] = useState(true)
    const [isOpen22, setIsOpen22] = useState(true)
    const [isOpen31, setIsOpen31] = useState(true)
    const [isOpen32, setIsOpen32] = useState(true)
    const [isOpen41, setIsOpen41] = useState(true)
    const [isOpen42, setIsOpen42] = useState(true)
    const [isOpen43, setIsOpen43] = useState(true)

    const projectIdx = props.project;
    const allProjects = props.allProjects;
    const selectedProject = allProjects[projectIdx];

      return (
        <Container className="overview-container">
        <Helmet>
            <title>Overview | Insightic</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='overview'>
            <span>Overview</span>
        </Container>

        <Container className='overview-header'>
            <div className='overview-header-left'>
                {allProjects.length > 0 ? <img src={selectedProject['icon']} className="project-icon"/> : ""}
                <h2>{allProjects.length > 0 ? selectedProject['name'] : "NA"}</h2>
            </div>

            <div className='overview-header-right'>
                B+
            </div>            
        </Container>

        <Container className='analysis'>
            <Container className='technical-analysis'>
                <Container className='tech1 tech' >
                    <div className='analysis-header'>
                        <h4>Business Model Analysis</h4>
                        <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    </div>
                    <div className='tech1sec1 sec' style={isOpen ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                        <h5 className="secTitle">
                            Business model & Value Proposition  
                           {isOpen11 ? 
                            <span onClick={() => setIsOpen11(!isOpen11)}>&#9650;</span> :
                            <span onClick={() => setIsOpen11(!isOpen11)}>&#9660;</span>
                           }
                        </h5>
                        <div className='secContent' style={isOpen11 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <div>
                                Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral 
                                Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the 
                                best service and creates new standards in DeFi.
                            </div>
                            <h6>Tags</h6>
                            <div className='tags'>
                                <div>P2P Trading</div>
                                <div>Deposits</div>
                            </div>
                            <h6>Related regulations</h6>
                            <p>https://www.1.com</p>
                        </div>
                    </div>

                    <div className='tech1sec2 sec' style={isOpen ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                        <h5 className="secTitle">
                            Customer Segments
                            {isOpen12 ? 
                            <span onClick={() => setIsOpen12(!isOpen12)}>&#9650;</span> :
                            <span onClick={() => setIsOpen12(!isOpen12)}>&#9660;</span>
                           }
                        </h5>
                        <div className='secContent' style={isOpen12 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <ul>
                                <li>Retail investors who need to swap tokens</li>
                                <li>Institutiona funds who conduct AMM business</li>
                                <li>VASPs who IDO</li>
                            </ul>
                        </div>
                    </div>
                </Container>

                <Container className='tech2 tech'>
                    <div className='analysis-header'>
                        <h4>On-Chain Data Analysis</h4>
                        <Button onClick={() => setIsOpen2(!isOpen2)}>{isOpen2 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    </div>
                    <Container className='secs' style={isOpen2 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                        <div className='tech2sec1 sec'>
                            <h5 className="secTitle">
                                Pools & Volume
                                {isOpen21 ? 
                                    <span onClick={() => setIsOpen21(!isOpen21)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen21(!isOpen21)}>&#9660;</span>
                                }
                            </h5>
                            <div className='secContent' style={isOpen21 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <table>
                                    <tr>
                                        <td>Number of Pools</td>
                                        <td>3,234,132</td>
                                    </tr>
                                    <tr>
                                        <td>7 Days Volume</td>
                                        <td>$76,261,658</td>
                                    </tr>
                                    <tr>
                                        <td>24 Hrs Volumne</td>
                                        <td>$5,291,480</td>
                                    </tr>
                                    <tr>
                                        <td>Changes</td>
                                        <td>-61.71%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className='tech2sec2 sec'>
                            <h5 className="secTitle">
                                Customer Persona
                                {isOpen22 ? 
                                    <span onClick={() => setIsOpen22(!isOpen22)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen22(!isOpen22)}>&#9660;</span>
                                }    
                            </h5>
                            <div className='secContent' style={isOpen22 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <table>
                                    <tr>
                                        <td>Unique Address</td>
                                        <td>1,2888,378</td>
                                    </tr>
                                    <tr>
                                        <td>Bot Rate</td>
                                        <td>21%</td>
                                    </tr>
                                    <tr>
                                        <td>Retails / Total (volume)</td>
                                        <td>26%</td>
                                    </tr>
                                    <tr>
                                        <td>Retails / Total (Acct.)</td>
                                        <td>86%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Container>
                </Container>
            </Container>

            <Container className='market-analysis'>

                <Container className='market1 market'>
                        <div className='analysis-header'>
                            <h4>Social Media Analysis</h4>
                            <Button onClick={() => setIsOpen3(!isOpen3)}>{isOpen3 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                        </div>
                        <div className='market1sec1 sec' style={isOpen3 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">
                                Twitter Analysis
                                {isOpen31 ? 
                                    <span onClick={() => setIsOpen31(!isOpen31)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen31(!isOpen31)}>&#9660;</span>
                                }      
                            </h5>
                            <div className='secContent' style={isOpen31 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <div>
                                    Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral 
                                    Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the 
                                    best service and creates new standards in DeFi.
                                </div>
                                <h6>Tags</h6>
                                <div className='tags'>
                                    <div>P2P Trading</div>
                                    <div>Deposits</div>
                                </div>
                                <h6>Related regulations</h6>
                                <p>https://www.1.com</p>
                            </div>
                        </div>

                        <div className='market1sec2 sec' style={isOpen3 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">
                                Blog Analysis
                                {isOpen32 ? 
                                    <span onClick={() => setIsOpen32(!isOpen32)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen32(!isOpen32)}>&#9660;</span>
                                }      
                            </h5>
                            <div className='secContent' style={isOpen32 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <ul>
                                    <li>Retail investors who need to swap tokens</li>
                                    <li>Institutiona funds who conduct AMM business</li>
                                    <li>VASPs who IDO</li>
                                </ul>
                            </div>
                        </div>
                </Container>

                <Container className='market2 market'>
                        <div className='analysis-header'>
                            <h4>Team Background Analysis</h4>
                            <Button onClick={() => setIsOpen4(!isOpen4)}>{isOpen4 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                        </div>
                        <div className='market2sec1 sec' style={isOpen4 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">
                                On-Chain Analysis
                                {isOpen41 ? 
                                    <span onClick={() => setIsOpen41(!isOpen41)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen41(!isOpen41)}>&#9660;</span>
                                }     
                            </h5>
                            <div className='secContent' style={isOpen41 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <div>
                                    Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral 
                                    Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the 
                                    best service and creates new standards in DeFi.
                                </div>
                                <h6>Tags</h6>
                                <div className='tags'>
                                    <div>P2P Trading</div>
                                    <div>Deposits</div>
                                </div>
                                <h6>Related regulations</h6>
                                <p>https://www.1.com</p>
                            </div>
                        </div>

                        <div className='market2sec2 sec' style={isOpen4 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">
                                Twitter Analysis
                                {isOpen42 ? 
                                    <span onClick={() => setIsOpen42(!isOpen42)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen42(!isOpen42)}>&#9660;</span>
                                }     
                            </h5>
                            <div className='secContent' style={isOpen42 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <ul>
                                    <li>Retail investors who need to swap tokens</li>
                                    <li>Institutiona funds who conduct AMM business</li>
                                    <li>VASPs who IDO</li>
                                </ul>
                            </div>
                        </div>

                        <div className='market2sec2 sec' style={isOpen4 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">
                                LinkedIn Analysis
                                {isOpen43 ? 
                                    <span onClick={() => setIsOpen43(!isOpen43)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen43(!isOpen43)}>&#9660;</span>
                                }     
                            </h5>
                            <div className='secContent' style={isOpen43 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <ul>
                                    <li>Retail investors who need to swap tokens</li>
                                    <li>Institutiona funds who conduct AMM business</li>
                                    <li>VASPs who IDO</li>
                                </ul>
                            </div>
                        </div>
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


export default Overview