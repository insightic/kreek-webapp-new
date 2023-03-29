import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, CardDeck, Jumbotron, Button, Dropdown, DropdownButton} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Helmet } from 'react-helmet';
import * as Icon from 'react-bootstrap-icons';
import { CopyBlock, dracula } from "react-code-blocks";
import sample from "./codeblock.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ResizableTable from '../ResizableTable/ResizableTable';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import axios from "axios";

const Home = () => {
    const ADDED = [1, 2];
    const REMOVED = [6];
    const [showArrow, setShowArrow] = React.useState(false);
    const [lineFrom, setLineFrom] = React.useState(null);
    const [lineTo, setLineTo] = React.useState(null);
    const updateXarrow = useXarrow();
    const [project, setProject] = useState(0)
    const [projectList, setProjectList] = useState([])

    const data = async () => {
        // const url = 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectName'
        const url = 'http://localhost:9000/getProjects'
        const response = await fetch(url, {
            method: 'GET',
        })
        .then((res) => res.text())
        const res = await response
        alert(res)
    }


    const getAllProjects = () => axios({
          method: "POST",
          url:"/getAllProjects",
          data:{
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password")
           }
        })
        .then((response) => {
            if (response.status == 200) {
                setProjectList(response['data']['data']['projects'])
          } else {
                return []
          }
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })


    let dummydata = [
        {'file': 'code1.sol', 'ADDED': [1, 2], 'REMOVED': [5,6], 'code': sample['jsx']},
        {'file': 'code2.sol', 'ADDED': [2, 3], 'REMOVED': [4,8], 'code': sample['html']},
        {'file': 'code3.sol', 'ADDED': [1, 3], 'REMOVED': [2,6], 'code': sample['objectivec']},
        {'file': 'code4.sol', 'ADDED': [1, 4], 'REMOVED': [5,7], 'code': sample['python']},
        {'file': 'code5.sol', 'ADDED': [3, 5], 'REMOVED': [2,8], 'code': sample['java']}
    ]

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)

    const [codeList, setCodeList] = useState(dummydata)
    const firstFile = codeList.length > 0 ? codeList[0]['file'] : null
    const [activeFile, setActiveFile] = useState(firstFile)

    var newFile = useRef(null)

    const close = (idx) => {
        let old = [...codeList]
        console.log(activeFile)
        let currActiveidx = codeList.findIndex((elem) => elem['file'] == activeFile)
        old.splice(idx,1)
        setCodeList(old)
        console.log(old)
        if (old.length == 0) {
            newFile.current = null
            setActiveFile(null)
        } else if(currActiveidx > old.length - 1) {
            currActiveidx = currActiveidx - 1;
            newFile.current = old[currActiveidx]['file']
        } else {
            console.log(newFile)
            newFile.current = old[currActiveidx]['file']
        }
        
    }

    const setClaim = (event) => {
        updateXarrow()
        setLineFrom(event.currentTarget.id)
        setShowArrow(true)
        setLineTo('end'+ activeItem['ADDED'][0])
        updateXarrow()
    }

    useEffect(() => {
        if (newFile.current != null) {
            console.log('Fruit', newFile);
            setActiveFile(newFile.current)
        }
      }, [codeList])

    useEffect(() => {
        getAllProjects();
    }, []);

      const activeItem = codeList.findIndex((elem) => elem['file'] == activeFile) != -1 ? codeList[codeList.findIndex((elem) => elem['file'] == activeFile)] : null

      return (
        <Container className="home-container">
        <Helmet>
            <title>Home | Kreek</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='project-name'>
            Project: {/* Uniswap V3 */}
            {console.log(projectList)}
            <DropdownButton id="dropdown-basic-button" title={projectList[project] ? projectList[project]['projectName']: "No Projects"}>
                {projectList.map((project, index) => 
                    (<Dropdown.Item onClick={() => setProject(index)}>{project['projectName']}</Dropdown.Item>))}
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
            <div>Project Type: {projectList[project] ? projectList[project]['projectType']: "NA"} </div>
        </Container>

        {/* <Button onClick={data}>test</Button> */}


        <Row className="label-row d-none d-md-flex d-lg-none" xs={0} md={0} lg={3}>
                <Container className="label-row-box check">
                    <Container className="label-row-title">
                        <Icon.InfoCircle className="label-icon"/><span>Overall Code Quality</span>
                    </Container>
                    {/* <Container className='label-row-content'>
                        This is an information alert
                    </Container> */}
                </Container>
                <Container className="label-row-box warning">
                    <Container className="label-row-title">
                        <Icon.ExclamationCircle className="label-icon"/><span>Explanations</span>
                    </Container>
                    {/* <Container className='label-row-content'>
                        Explain the code in natural languages
                    </Container> */}
                </Container>
                <Container className="label-row-box success">
                    <Container className="label-row-title">
                        <Icon.CheckCircle className="label-icon"/><span>Success</span>
                    </Container>
                    {/* <Container className='label-row-content'>
                        Passed # validation tests
                    </Container> */}
                </Container>
                <Container className="label-row-box error">
                    <Container className="label-row-title">
                        <Icon.XCircle className="label-icon"/><span>Critical Risks</span>
                    </Container>
                    {/* <Container className='label-row-content'>
                        There are # critical risk(s)
                    </Container> */}
                </Container>
        </Row> 


        <Xwrapper>
        <Xarrow
                start={lineFrom}
                end={lineTo}
                startAnchor={'right'}
                path={"grid"}
                dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
                showHead={false}
                showXarrow = {true}
                strokeWidth={5}
                // animateDrawing={1}
        />
        <ResizableTable resizable={true} resizeOptions={{liveDrag:true, onDrag:updateXarrow}}>
        <tbody className="home">
          <tr>
            <td className="sections" xs={3} md={3} lg={3}>
                <Container className='section whitepaper'>
                    <Button className='button-main' onClick={() => setIsOpen1(!isOpen1)}>Whitepaper (10/50 passed) {isOpen1 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>} </Button>
                    <Button id='sec1but1' className='button-sub' onClick={setClaim} style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Total number of tokens issued</Button>
                    <Button id='sec1but2' className='button-sub' onClick={setClaim} style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Claim 2</Button>
                    <Button id='sec1but3' className='button-sub' onClick={setClaim} style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Claim 3</Button>
                    <Button id='sec1but4' className='button-sub' onClick={setClaim} style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Claim 4</Button>
                </Container>

                <Container className='section regulations'>
                    <Button className='button-main' onClick={() => setIsOpen2(!isOpen2)}>Regulations (5/5 passed){isOpen2 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <Button id='sec2but1' className='button-sub' onClick={setClaim} style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 1</Button>
                    <Button id='sec2but2' className='button-sub' onClick={setClaim} style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 2</Button>
                    <Button id='sec2but3' className='button-sub' onClick={setClaim} style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 3</Button>
                    <Button id='sec2but4' className='button-sub' onClick={setClaim} style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 4</Button>
                </Container>

                <Container className='section industrial-standard'>
                    <Button className='button-main' onClick={() => setIsOpen3(!isOpen3)}>Industry Standard{isOpen3 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <Button id='sec3but1' className='button-sub' onClick={setClaim} style={isOpen3 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Reference 1</Button>
                    <Button id='sec3but2' className='button-sub' onClick={setClaim} style={isOpen3 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Reference 2</Button>
                    <Button id='sec3but3' className='button-sub' onClick={setClaim} style={isOpen3 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Reference 3</Button>
                </Container>
            
            </td>

            <td className="browser" xs={6} md={6} lg={6}>
                
            <Container className='tabs'>
                {   
                    codeList.length > 0 &&
                    codeList.map((item, idx) => 
                        <Button className={activeFile == item['file'] ? 'tab tab-active' : 'tab'} onClick={() => setActiveFile(item['file'])}>{item['file']} <Icon.X onClick={() => close(idx)} className="tab-icon"/></Button>
                    )
                }
                {/* <Button className={activeIdx == 0 ? 'tab tab-active' : 'tab'} onClick={() => setActiveIdx(0)}>0 <Icon.X onClick={() => close(0)} className="tab-icon"/></Button>
                <Button className={activeIdx == 1 ? 'tab tab-active' : 'tab'} onClick={() => setActiveIdx(1)}>1 <Icon.X onClick={() => close(1)} className="tab-icon"/></Button>
                <Button className={activeIdx == 2 ? 'tab tab-active' : 'tab'} onClick={() => setActiveIdx(2)}>2 <Icon.X onClick={() => close(2)} className="tab-icon"/></Button>
                <Button className={activeIdx == 3 ? 'tab tab-active' : 'tab'} onClick={() => setActiveIdx(3)}>3 <Icon.X onClick={() => close(3)} className="tab-icon"/></Button>
                {codeList.length == 5 && <Button className={activeIdx == 4 ? 'tab tab-active' : 'tab'} onClick={() => setActiveIdx(4)}>4 <Icon.X onClick={() => close(4)} className="tab-icon"/></Button>} */}
            </Container>
            {activeItem && <SyntaxHighlighter 
                clssName='code'
                language="javascript" 
                style={localStorage.getItem('theme') === 'theme-light' ? docco : dark}
                showLineNumbers = {true}
                wrapLines={true}
                lineProps={lineNumber => {
                    let id = 'end' + lineNumber
                    let style = { display: 'block' };
                    if (activeItem['ADDED'].includes(lineNumber)) {
                      style.backgroundColor = '#dbffdb';
                    } else if (activeItem['REMOVED'].includes(lineNumber)) {
                      style.backgroundColor = '#ffecec';
                    }
                    return { style, id };
                  }}
            > 
            {activeItem['code']}
            </SyntaxHighlighter>}
            {activeItem==null && <SyntaxHighlighter 
                clssName='code'
                language="javascript" 
                style={dark}
                showLineNumbers = {true}
                wrapLines={true}
            > 
            "No file is selected"
            </SyntaxHighlighter>}
                
            </td>

            <td className="label" xs={3} md={3} lg={3}>
                
            <Container className="label-box check">
                    <Container className="label-title">
                        {/* <Icon.InfoCircle className="label-icon"/> */}
                        <span className='label-indicator'>90</span>
                        <span>Overall Code Quality</span>
                    </Container>
                    {/* <Container className='label-content'>
                        This is an information alert
                    </Container> */}
                </Container>
                <Container className="label-box warning">
                    <Container className="label-title">
                        {/* <Icon.ExclamationCircle className="label-icon"/> */}
                        <span className='label-indicator'>40</span>
                        <span>Explanations</span>
                    </Container>
                    {/* <Container className='label-content'>
                        Explain the code in natural languages
                    </Container> */}
                </Container>
                <Container className="label-box success">
                    <Container className="label-title">
                        {/* <Icon.CheckCircle className="label-icon"/> */}
                        <span className='label-indicator'>90</span>
                        <span>Success</span>
                    </Container>
                    {/* <Container className='label-content'>
                        Passed # validation tests
                    </Container> */}
                </Container>
                
            </td>
          </tr>

        </tbody>
      </ResizableTable>
      </Xwrapper>


        </Container>
    );
}

export default Home