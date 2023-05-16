import React, {useState, useEffect, useRef, Fragment} from 'react';
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
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
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

    const statuses = {
        Complete: 'text-green-700 bg-green-50 ring-green-600/20',
        'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
        Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
      }
      const projects = [
        {
          id: 1,
          name: 'GraphQL API',
          href: '#',
          status: 'Complete',
          createdBy: 'Leslie Alexander',
          dueDate: 'March 17, 2023',
          dueDateTime: '2023-03-17T00:00Z',
          imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 2,
          name: 'New benefits plan',
          href: '#',
          status: 'In progress',
          createdBy: 'Leslie Alexander',
          dueDate: 'May 5, 2023',
          dueDateTime: '2023-05-05T00:00Z',
          imageUrl:'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 3,
          name: 'Onboarding emails',
          href: '#',
          status: 'In progress',
          createdBy: 'Courtney Henry',
          dueDate: 'May 25, 2023',
          dueDateTime: '2023-05-25T00:00Z',
          imageUrl:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 4,
          name: 'iOS app',
          href: '#',
          status: 'In progress',
          createdBy: 'Leonard Krasner',
          dueDate: 'June 7, 2023',
          dueDateTime: '2023-06-07T00:00Z',
          imageUrl:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 5,
          name: 'Marketing site redesign',
          href: '#',
          status: 'Archived',
          createdBy: 'Courtney Henry',
          dueDate: 'June 10, 2023',
          dueDateTime: '2023-06-10T00:00Z',
          imageUrl:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
      return (
        <Container className="projectlist-container">
        <Helmet>
            <title>Projects | Insightic</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        {/* Sticky search header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-black/5 px-4 shadow-sm sm:px-6 lg:px-8">
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form className="flex flex-1" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only text-gray-600">
                    Search
                    </label>
                    <div className="relative w-full">
                    <MagnifyingGlassIcon
                        className="pointer-events-none absolute z-50 inset-y-0 left-2 h-full w-5 text-gray-600"
                        aria-hidden="true"
                    />
                    <input
                        id="search-field"
                        className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-600 focus:ring-0 sm:text-sm placeholder:text-gray-600"
                        placeholder="Search..."
                        type="search"
                        name="search"
                    />
                    </div>
                </form>
            </div>
        </div>

        <ul role="list" className="divide-y divide-gray-100 mt-3">
            {projectList.map((project, index) => (
                <li key={project.index} className="flex items-center justify-between gap-x-6 py-2 mt">
                <div className="flex gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={project.icon} alt="" />
                    <div className="min-w-0">

                        <div className="flex items-start gap-x-3">
                            <p className="text-sm mb-0 font-semibold leading-6 text-gray-900">{project.name}</p>
                            <p
                                className={classNames(
                                statuses["In Progress"],
                                'rounded-md whitespace-nowrap mt-0.5 mb-0 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                                )}
                            >
                                {project.status ?  project.status : "In Porgress"}
                            </p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p className="whitespace-nowrap">
                                Due on <time dateTime={project.dueDateTime}>May 25, 2023</time>
                            </p>
                            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <p className="truncate">Created by Author</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-none items-center gap-x-4">
                    <Link
                    onClick={() => setProjectIdx(index)} to='/overview'
                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                    >
                    Overview<span className="sr-only">, {project.name}</span>
                    </Link>
                    <Link
                    onClick={() => setProjectIdx(index)} to='/home'
                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                    >
                    Assessment<span className="sr-only">, {project.name}</span>
                    </Link>
                    <Link
                    onClick={() => setProjectIdx(index)} to='/summary'
                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                    >
                    Actions<span className="sr-only">, {project.name}</span>
                    </Link>
                    <Menu as="div" className="relative flex-none">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                            >
                                Edit<span className="sr-only">, {project.name}</span>
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                            >
                                Move<span className="sr-only">, {project.name}</span>
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                            >
                                Delete<span className="sr-only">, {project.name}</span>
                            </a>
                            )}
                        </Menu.Item>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
                </li>
            ))}
            </ul>



        {/* <Container className='page-name'>
            <span>List of Projects</span>
            <Button as={Link} to='/new-project' className='projectAction-add-button' variant="outline-primary">Add</Button>
        </Container> */}
        {/* {projectList.map((project, index) => <Project index={index} setProjectIdx={setProjectIdx} project={project}/>)} */}

        {/* <Container className="project-container">
            <Container className="project">
                <img src='https://storage.googleapis.com/subgraph-images/1656114240805euler-transparent.png' className="project-icon"/>
                <Container className="projectInfo">
                    <h2>Euler Finance</h2>
                    <p>defi</p>
                    <p>{props.projectInfo["projectDate"]}</p>
                </Container>
            </Container>
            <Container className='projectAction'>
                <Button className='projectAction-nav-button' as={Link} to='/overview-euler' style={{background:'linear-gradient(to right, #857BC5, #A09FFD)'}} variant="outline-primary"><Icon.HouseDoor />Main Page</Button>
                <Button className='projectAction-nav-button' as={Link} to='/home' style={{background:'linear-gradient(to right, #00B5A3, #00CAA4)'}} variant="outline-primary"><Icon.FileEarmarkCode />Smart Contract</Button>
                <Button className='projectAction-nav-button' as={Link} to='/summary-euler' style={{background:'linear-gradient(to right, #03ACF2, #3BC8F8)'}} variant="outline-primary"><Icon.ListTask />Action Page</Button>
                <Button className='projectAction-delete-button' variant="outline-primary">Delete</Button>
            </Container>
        </Container> */}

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
                <Button className='projectAction-nav-button' onClick={() => props.setProjectIdx(props.index)} as={Link} to='/overview' style={{background:'linear-gradient(to right, #857BC5, #A09FFD)'}} variant="outline-primary"><Icon.HouseDoor />Main Page</Button>
                <Button className='projectAction-nav-button' onClick={() => props.setProjectIdx(props.index)} as={Link} to='/home' style={{background:'linear-gradient(to right, #00B5A3, #00CAA4)'}} variant="outline-primary"><Icon.FileEarmarkCode />Smart Contract</Button>
                <Button className='projectAction-nav-button' onClick={() => props.setProjectIdx(props.index)} as={Link} to='/summary' style={{background:'linear-gradient(to right, #03ACF2, #3BC8F8)'}} variant="outline-primary"><Icon.ListTask />Action Page</Button>
                <Button className='projectAction-delete-button' variant="outline-primary">Delete</Button>
            </Container>
        </Container>
    )
}

export default ProjectList