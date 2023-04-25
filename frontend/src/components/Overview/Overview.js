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


const Overview = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isOpen2, setIsOpen2] = useState(true)
    const [isOpen3, setIsOpen3] = useState(true)
    const [isOpen4, setIsOpen4] = useState(true)

      return (
        <Container className="overview-container">
        <Helmet>
            <title>Overview | Kreek</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='overview'>
            <span>Overview</span>
        </Container>

        <Container className='overview-header'>
            <div className='overview-header-left'>
                <Icon.FileEarmarkText className='overview-header-icon' size={50}/>
                <h2>BiSwap: a DEX with low trading fees on BNB Chain</h2>
            </div>

            <div className='overview-header-right'>
                B+
            </div>            
        </Container>

        <Container className='analysis'>
            <Container className='technical-analysis'>
                <h3>Technical Analysis</h3>
                <Container className='tech1 tech' >
                    <div className='analysis-header'>
                        <h4>Business Model Analysis</h4>
                        <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    </div>
                    <div className='tech1sec1 sec' style={isOpen ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                        <h5 className="secTitle">Business model & Value Proposition</h5>
                        <div className='secContent'>
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
                        <h5 className="secTitle">Customer Segments</h5>
                        <div className='secContent'>
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
                            <h5 className="secTitle">Pools & Volume</h5>
                            <div className='secContent'>
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
                            <h5 className="secTitle">Customer Persona</h5>
                            <div className='secContent'>
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
                <h3>Market Analysis</h3>

                <Container className='market1 market'>
                        <div className='analysis-header'>
                            <h4>Social Media Analysis</h4>
                            <Button onClick={() => setIsOpen3(!isOpen3)}>{isOpen3 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                        </div>
                        <div className='market1sec1 sec' style={isOpen3 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">Twitter Analysis</h5>
                            <div className='secContent'>
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
                            <h5 className="secTitle">Blog Analysis</h5>
                            <div className='secContent'>
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
                            <h5 className="secTitle">On-Chain Analysis</h5>
                            <div className='secContent'>
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
                            <h5 className="secTitle">Twitter Analysis</h5>
                            <div className='secContent'>
                                <ul>
                                    <li>Retail investors who need to swap tokens</li>
                                    <li>Institutiona funds who conduct AMM business</li>
                                    <li>VASPs who IDO</li>
                                </ul>
                            </div>
                        </div>

                        <div className='market2sec2 sec' style={isOpen4 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">LinkedIn Analysis</h5>
                            <div className='secContent'>
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

const Project = (props) => {
    return (
        <Container className="project-container">
            <Container className="project">
                {props.icon}
                <Container className="projectInfo">
                    <h2>{props.projectInfo["projectName"]}</h2>
                    <p>{props.projectInfo["projectDescription"]}</p>
                    <p>{props.projectInfo["projectDate"]}</p>
                </Container>
            </Container>
            <Container className='projectAction'>
                <Button className='projectAction-add-button' variant="outline-primary">View</Button>
                <Button className='projectAction-delete-button' variant="outline-primary">Delete</Button>
            </Container>
        </Container>
    )
}

export default Overview