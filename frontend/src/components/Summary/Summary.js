import React, {Fragment, useState, useEffect, useRef} from 'react';
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
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon, XCircleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Summary = (props) => {
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
            <span>{allProjects.length > 0 ? selectedProject['name'] : "NA"}</span>
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
                    <ActionCard type='error' title="Require 1 or more security audit report" message="Suggest the VASP to submit at least another security audit report within 45 days. "/>
                    <ActionCard type='error' title="Code has high similarity to Uniswap" message="Suggest the VASP to further clarify the differences for not violating Business Source License. "/>
                    <ActionCard type='error' title="Core contract has been modified recently" message="Dangerous to update the core smart contract code. The audit reports may not be sufficient. "/>
                </Container>

                <Container className='action-col'>
                    <ActionCard type='warning' title="Code has not been updates for long time" message="Suggest the VASP to link Github account or submit a new code base. "/>
                    <ActionCard type='warning' title="High botting rate" message="Suggest to review the VASP’s solution on bot detection and IP restriction. "/>
                    <ActionCard type='warning' title="Orderbook Spoofing" message="There is a high chance that the order book design has no restriction on spoofing. "/>
                </Container>

                <Container className='action-col' title="Partnership with risky projects" message="The VASP has released a partnership announcement recently, with a risky project. ">
                    <ActionCard type='message' title="Risky wallets interaction" message="The deployed contract has attracted many newly wallets. Require VASP to validate their users. "/>
                </Container>
            </Container>
        </Container>

        <Container className='tasks'>
        <span>Tasks</span>
            <Container className='tasks-content'>
                <Container className='tasks-col'>
                    <ActionCard type='error' title="Require 1 or more security audit report" message="Suggest the VASP to submit at least another security audit report within 45 days. "/>
                </Container>

                <Container className='tasks-col'>
                    <ActionCard type='warning' title="Code has not been updates for long time" message="Suggest the VASP to link Github account or submit a new code base. "/>
                </Container>

                <Container className='tasks-col' title="Partnership with risky projects" message="The VASP has released a partnership announcement recently, with a risky project. ">
                    <ActionCard type='message' title="Risky wallets interaction" message="The deployed contract has attracted many newly wallets. Require VASP to validate their users. "/>
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
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
            </svg>   
            : props.type === "warning" ?
            <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path>
            </svg>
            : props.type === "message" ?
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            : 
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(show) {document.body.style.overflow = 'hidden';}
        else {document.body.style.overflow = 'unset';}
     }, [show]);

    const bg = props.type === "error" ? "bg-red-50" : props.type === "warning" ? "bg-yellow-50" : props.type === "message" ? "bg-blue-50" : "bg-green-50"

    return (
        <Container className="action-card" style={style}>
            <div className={"rounded-md p-4" + bg}>
                <div className="flex">
                    <div className="flex-shrink-0">
                        {icon}
                    </div>
                    <div className="ml-3">
                    <h3 className="text-sm font-bold text-yellow-800 text-left mb-0 leading-6">{props.title}</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                        <p className="text-left">
                        {props.message.length > 80 ? props.message.substring(0,80) + '...' : props.message}
                        <span onClick={() => setShow(true)} variant="outline-primary">Details</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            {/* <div>
                {icon}
                <h5>{props.title}</h5>
            </div>
            <p>
                {props.message.length > 80 ? props.message.substring(0,80) + '...' : props.message}
                <span onClick={() => setShow(true)} variant="outline-primary">Details</span>
            </p> */}
            
            <PopUp icon={icon} type={props.type} show={show} setShow={setShow} title={props.title} message={props.message} />
        </Container>
    )
}


const PopUp1 = (props) => {
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


const PopUp = (props) => {
    const close = () => props.setShow(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const icon = props.type === "error" ?
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
        {props.icon}
    </div>     
    : props.type === "warning" ?
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
        {props.icon}
    </div>
    : props.type === "message" ?
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
        {props.icon}
    </div>
    : <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"> 
        {props.icon}
    </div>


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
        <Transition.Root className="transition-all" show={props.show} as={Fragment}>
            <Dialog as="div" className="relative z-10 transition-all" onClose={props.setShow}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                                <div>
                                    {icon}
                                    <div className="mt-3 text-center sm:mt-5">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{props.title}</h3>
                                        <div className="mt-2">
                                        <p className="text-sm text-gray-500">{props.message}</p>
                                        </div>
                                    </div>
                                </div>

                                <fieldset>
                                <legend className="sr-only">Notifications</legend>
                                    <div className="space-y-5">
                                        <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                            id="comments"
                                            aria-describedby="comments-description"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                            Email to VASP applicant
                                            </label>
                                            <p id="comments-description" className="text-gray-500">
                                            Send an email to the applicants
                                            </p>
                                        </div>
                                        </div>
                                        <div className="relative mt-0 flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label htmlFor="candidates" className="font-medium text-gray-900">
                                            Add to watchlist
                                            </label>
                                            <p id="candidates-description" className="text-gray-500">
                                            Get notified when there is updates
                                            </p>
                                        </div>
                                        </div>
                                        <div className="relative mt-0 flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                            id="offers"
                                            aria-describedby="offers-description"
                                            name="offers"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label htmlFor="offers" className="font-medium text-gray-900">
                                            Feedback to internal regulator consultants
                                            </label>
                                            <p id="offers-description" className="text-gray-500">
                                            Allow the internal regulator consultants to review
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="mt-5 sm:mt-6 flex justify-center">
                                    <button onClick={close} type="button" className="inline-flex w-24 mx-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Confirm</button>
                                    <button onClick={close} type="button" className="inline-flex w-24 mx-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
            </Dialog>
        </Transition.Root>
        

    )
}




export default Summary