import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, CardDeck, Jumbotron, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Helmet } from 'react-helmet';
import * as Icon from 'react-bootstrap-icons';
import { CopyBlock, dracula } from "react-code-blocks";
import sample from "./codeblock.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Home = () => {
    const ADDED = [1, 2];
    const REMOVED = [6];

    let dummydata = [
        {'file': 'code1.sol', 'ADDED': [1, 2], 'REMOVED': [5,6], 'code': sample['jsx']},
        {'file': 'code2.sol', 'ADDED': [2, 3], 'REMOVED': [4,8], 'code': sample['html']},
        {'file': 'code3.sol', 'ADDED': [1, 3], 'REMOVED': [2,6], 'code': sample['objectivec']},
        {'file': 'code4.sol', 'ADDED': [1, 4], 'REMOVED': [5,7], 'code': sample['python']},
        {'file': 'code5.sol', 'ADDED': [2, 5], 'REMOVED': [2,8], 'code': sample['java']}
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

    useEffect(() => {
        if (newFile.current != null) {
            console.log('Fruit', newFile);
            setActiveFile(newFile.current)
        }
      }, [codeList])

      const activeItem = codeList.findIndex((elem) => elem['file'] == activeFile) != -1 ? codeList[codeList.findIndex((elem) => elem['file'] == activeFile)] : null
    
      return (
        <Container className="home-container">
        <Helmet>
            <title>Home | Kreek</title>
            <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " />
        </Helmet>

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

        <Row className="home">
            <Col className="sections" xs={3} md={3} lg={2}>
                <Container className='section whitepaper'>
                    <Button className='button-main' onClick={() => setIsOpen1(!isOpen1)}>Whitepaper{isOpen1 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>} </Button>
                    <Button className='button-sub' style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Claim 1</Button>
                    <Button className='button-sub' style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Claim 2</Button>
                    <Button className='button-sub' style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Claim 3</Button>
                    <Button className='button-sub' style={isOpen1 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Claim 4</Button>
                </Container>

                <Container className='section regulations'>
                    <Button className='button-main' onClick={() => setIsOpen2(!isOpen2)}>Regulations{isOpen2 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <Button className='button-sub' style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 1</Button>
                    <Button className='button-sub' style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 2</Button>
                    <Button className='button-sub' style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 3</Button>
                    <Button className='button-sub' style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Rule 4</Button>
                </Container>

                <Container className='section industrial-standard'>
                    <Button className='button-main' onClick={() => setIsOpen3(!isOpen3)}>Industrial Standard{isOpen3 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <Button className='button-sub' style={isOpen3 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Reference 1</Button>
                    <Button className='button-sub' style={isOpen3 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Reference 2</Button>
                    <Button className='button-sub' style={isOpen3 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>Reference 3</Button>
                </Container>
            </Col>
            
            <Col className="browser" xs={5} md={9} lg={7}>
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
                    let style = { display: 'block' };
                    if (activeItem['ADDED'].includes(lineNumber)) {
                      style.backgroundColor = '#dbffdb';
                    } else if (activeItem['REMOVED'].includes(lineNumber)) {
                      style.backgroundColor = '#ffecec';
                    }
                    return { style };
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
            </Col>  
             
            <Col className="label d-none d-lg-block" xs={0} md={0} lg={3}>
                <Container className="label-box check">
                    <Container className="label-title">
                        <Icon.InfoCircle className="label-icon"/><span>Overall Code Quality</span>
                    </Container>
                    <Container className='label-content'>
                        This is an information alert
                    </Container>
                </Container>
                <Container className="label-box warning">
                    <Container className="label-title">
                        <Icon.ExclamationCircle className="label-icon"/><span>Explanations</span>
                    </Container>
                    <Container className='label-content'>
                        Explain the code in natural languages
                    </Container>
                </Container>
                <Container className="label-box success">
                    <Container className="label-title">
                        <Icon.CheckCircle className="label-icon"/><span>Success</span>
                    </Container>
                    <Container className='label-content'>
                        Passed # validation tests
                    </Container>
                </Container>
                <Container className="label-box error">
                    <Container className="label-title">
                        <Icon.XCircle className="label-icon"/><span>Critical Risks</span>
                    </Container>
                    <Container className='label-content'>
                        There are # critical risk(s)
                    </Container>
                </Container>
            </Col> 
        </Row>


        </Container>
    );
}

export default Home