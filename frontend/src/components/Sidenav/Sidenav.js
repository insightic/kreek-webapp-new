import React, { Fragment, useState }from 'react';
import ReactDOM from 'react-dom';
import {Nav, Button, OverlayTrigger, Tooltip, ToggleButton, Navbar, NavDropdown, Col, Row, Container, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidenav.css"
import { Link } from "react-router-dom"
import user from "../../assets/user.png"
import Toggle from '../../Toggle.js'
import * as Icon from 'react-bootstrap-icons';
import axios from "axios";
import icon from "../../assets/favicon.png"

import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const Sidenav = (props) => {
  const { location } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/project-list', icon: HomeIcon, current: true },
    // { name: 'Team', href: '#', icon: UsersIcon, current: false },
    // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    // { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]
  const teams = [
    { id: 1, name: 'BiSwap LP', href: '/overview', initial: 'B', current: false },
    { id: 2, name: 'Wolf Game', href: '/overview', initial: 'W', current: false },
    { id: 3, name: 'Pool Together', href: '/overview', initial: 'P', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  let activeStyle = {
    textDecoration: "underline",
  };

  function logMeOut(event) {
    axios({
      method: "PUT",
      url:"/logout",
      headers:{
        "authorization": props.token
       }
    })
    .then((response) => {
      props.setToken(undefined)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip" style={{position:"fixed"}}>
      {text}
    </Tooltip>
  );

  
    return (
      <div className='sidenav-containers'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? 'text-indigo-600 border-indigo-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 h-full lg:z-10 lg:flex lg:w-60 lg:flex-col" style={{"height":"calc(100vh - 35px)", "overflow":"visible"}}>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-3 overflow-y-auto border-r border-gray-200 bg-white px-6" style={{"height":"calc(100vh - 35px)", "overflow":"visible"}}>
            <div className="flex h-20 shrink-0 items-center">
              <img
                className="h-12 w-auto"
                src={icon}
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 pl-0 flex-col gap-y-3">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Recent Projects</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <Link
                          onClick={() => props.setProject(team.id - 1)}
                          to={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-5 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://www.kindpng.com/picc/m/76-763119_anonymous-user-icon-circle-hd-png-download.png"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Anonymous</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        {/* <OverlayTrigger 
        placement="right" 
        delay={{ show: 10, hide: 10 }} 
        overlay={renderTooltip("User Profile")}>
          <img src={user} className="user"/>
        </OverlayTrigger>

        <Nav.Link className="nav-icon-container" as={Link} to="/new-project">
          <OverlayTrigger 
          placement="right" 
          delay={{ show: 10, hide: 10 }} 
          overlay={renderTooltip("Search")}>
            <Icon.CardText className="nav-icon"/> 
          </OverlayTrigger>

        </Nav.Link>

        <Nav className="mr-auto">
          <Nav.Link className="nav-icon-container" as={Link} to="/project-list">
            <OverlayTrigger placement="right" delay={{ show: 10, hide: 10 }} overlay={renderTooltip("Home")}>
              <Icon.House className="nav-icon"/>
            </OverlayTrigger>
          </Nav.Link>

        </Nav>

        <div className='nav-lower'>
          <Nav.Link className="nav-icon-container" as={Button} onClick={logMeOut}>
          <Nav.Link className="nav-icon-container" as={Link} to="/homenew">
            <OverlayTrigger placement="right" delay={{ show: 10, hide: 10 }} overlay={renderTooltip("Log out")}>
              <Icon.DoorOpen className="nav-icon"/>
            </OverlayTrigger>
          </Nav.Link>
          <Toggle togClass={props.togClass} setTogClass={props.setTogClass}/>
        </div> */}
      </div>
    );
  }
  

export default Sidenav