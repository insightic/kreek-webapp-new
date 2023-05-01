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


const OverviewEuler = (props) => {
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
            <title>Overview | Kreek</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='overview'>
            <span>Overview</span>
        </Container>

        <Container className='overview-header'>
            <div className='overview-header-left'>
                <img src='https://storage.googleapis.com/subgraph-images/1656114240805euler-transparent.png' className="project-icon"/>
                <h2>Euler Finance</h2>
            </div>

            <div className='overview-header-right'>
                B-
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
                                Euler's business model revolves around providing decentralized lending and borrowing services on the Ethereum blockchain. It generates revenue through interest accrued on loans, with a portion held in reserves for bad debts. The model relies on the Euler Governance Token (EUL) for protocol management, enabling a decentralized approach.

                                Euler offers a unique value proposition by enabling permissionless listings, asset tiering for risk management, tokenized debts, protected collateral, feeless flash loans, and risk-adjusted borrowing capacity. By leveraging decentralized price oracles, Euler ensures a secure and transparent experience for users, promoting capital efficiency and a user-centric approach.
                            </div>
                            <h6>Tags</h6>
                            <div className='tags'>
                                <div>Loan</div>
                                <div>P2P Trading</div>
                                <div>Collateral Control</div>
                                <div>Deposits</div>
                                <div>Risk Management</div>
                                <div>DAO</div>
                                <div>Flashloan</div>
                                <div>Price Oracle</div>
                            </div>
                            <h6>Related regulations</h6>
                            <p>[ref1], [ref2], [ref3]</p>
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
                                <li>Individuals and institutions cryptocurrency adopters: both lender and borrowers for various purposes, such as earning interest, leveraging trading positions, liquidity provision, or covering short-term expenses.</li>
                                <li>Developers: Those looking to build applications, products, or services on top of Euler's protocol, leveraging its features such as tokenized debts and feeless flash loans.</li>
                                <li>Flash loans applier</li>
                                <li>Governance participants: token holders who want to contribute to the platform's development and decision-making process by participating in governance proposals and voting.</li>
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
                                        <td>1555</td>
                                    </tr>
                                    <tr>
                                        <td>TVL</td>
                                        <td>$113,934</td>
                                    </tr>
                                    <tr>
                                        <td>Changes</td>
                                        <td>-11.42%</td>
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
                                        <td>288,378</td>
                                    </tr>
                                    <tr>
                                        <td>Bot Rate</td>
                                        <td>31%</td>
                                    </tr>
                                    <tr>
                                        <td>Retails / Total (volume)</td>
                                        <td>16%</td>
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
                            <h4>DAO Goverments Analysis</h4>
                            <Button onClick={() => setIsOpen3(!isOpen3)}>{isOpen3 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                        </div>
                        <div className='market1sec1 sec' style={isOpen3 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">
                                Governments Monitoring
                                {isOpen31 ? 
                                    <span onClick={() => setIsOpen31(!isOpen31)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen31(!isOpen31)}>&#9660;</span>
                                }      
                            </h5>
                            <div className='secContent' style={isOpen31 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                                <table>
                                    <tr>
                                        <td>Number of Proposals</td>
                                        <td>83</td>
                                    </tr>
                                    <tr>
                                        <td>Smart Contract Changes</td>
                                        <td>6 times</td>
                                    </tr>
                                    <tr>
                                        <td>Grant Changes</td>
                                        <td>12 times</td>
                                    </tr>
                                    <tr>
                                        <td>Skewness of voting power</td>
                                        <td>High</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className='market1sec2 sec' style={isOpen3 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <h5 className="secTitle">
                                Important Events
                                {isOpen32 ? 
                                    <span onClick={() => setIsOpen32(!isOpen32)}>&#9650;</span> :
                                    <span onClick={() => setIsOpen32(!isOpen32)}>&#9660;</span>
                                }      
                            </h5>
                            <div className='secContent' style={isOpen32 ? {visibility:'visible', opacity:'1', maxHeight:'500px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
                            <table>
                                    <tr>
                                        <th>Event</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                    <tr>
                                        <td>Contract Upgrades (eIP 14) </td>
                                        <td>SUCCEEDED</td>
                                        <td>Aug 12, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>Move All Asset Price Oracles to Chainlink</td>
                                        <td>SUCCEEDED</td>
                                        <td>Sep 5, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>Update the Interest Rate Model</td>
                                        <td>SUCCEEDED</td>
                                        <td>Feb 19, 2023</td>
                                    </tr>
                                </table>
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


export default OverviewEuler