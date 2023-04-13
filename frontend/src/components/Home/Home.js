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
import WhitepaperAccordion from '../WhitepaperAccordion/WhitepaperAccordion';
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
    const [tempProject, setTempProject] = useState(null)

    useEffect(() => {
        const p1 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
            headers: {}, 
            data: {"projectId": 1}
          }).then(function (response) {
            return response['data']
          })
    
          const p2 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
            headers: {}, 
            data: {"projectId": 2}
          }).then(function (response) {
            return response['data']
          })
    
          const p3 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
            headers: {}, 
            data: {"projectId": 3}
          }).then(function (response) {
            return response['data']
          })
    
          const p4 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
            headers: {}, 
            data: {"projectId": 4}
          }).then(function (response) {
            return response['data']
          })

        axios.all([p1, p2, p3, p4]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseThree = responses[2]
            const responseFour = responses[3]
            console.log('responses: ')
            console.log(responseOne)
            console.log(responseTwo)
            console.log(responseThree)
            console.log(responseFour)
            setProjectList([responseOne, responseTwo, responseThree, responseFour])
            console.log([responseOne, responseTwo, responseThree, responseFour][project]['codes'])
            setCodeList([responseOne, responseTwo, responseThree, responseFour][project]['codes'])
            // use/access the results
            })).catch(errors => {
                console.log(errors.response.data)
            // react on errors.
            }).finally(() => {
                console.log("Done");
            });
            console.log(projectList)
    }, [])


    const dummydata = [
        {'file': 'BSWToken.sol', 'ADDED': [1, 2], 'REMOVED': [5,6], 'code': sample['html']},
        {'file': 'BiswapERC20.sol', 'ADDED': [2, 3], 'REMOVED': [4,8], 'code': sample['html']},
        {'file': 'BiswapFactory.sol', 'ADDED': [1, 3], 'REMOVED': [2,6], 'code': sample['objectivec']},
        {'file': 'BiswapPair.sol', 'ADDED': [1, 4], 'REMOVED': [5,7], 'code': sample['python']},
        {'file': 'IBiswapCallee.sol', 'ADDED': [3, 5], 'REMOVED': [2,8], 'code': sample['java']}
    ]


    const claimData = [
        {
            id: 'sec1but1',
            claimId: 'dex011',
            claimName: 'Token symbol',
            claimDescription: 'Tokens symbol is BSW',
            fxDescription: 'Ticker Symbol: BSW ',
            fxfilename: 'Whitepaper.pdf',
            fxpageNumber: 1,
            gxcodeDescription: 'contract BSWToken is BEP20(\'Biswap\', \'BSW\')',
            gxcodeFileName: 'BSWToken.sol',
            gxcodeLine: 1021,
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
          },
        {
          id: 'sec1but2',
          claimId: 'dex012',
          claimName: 'Blockchain Standard',
          claimDescription: 'BEP-20 standard',
          fxDescription: 'Chain: BNB Chain (BEP-20)',
          fxfilename: 'Whitepaper.pdf',
          fxpageNumber: 1,
          gxcodeDescription: 'contract BSWToken is BEP20(\'Biswap\', \'BSW\')',
          gxcodeFileName: 'BSWToken.sol',
          gxcodeLine: 1021,
          validationStatus: true,
          validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but3',
            claimId: 'dex013',
            claimName: 'Token Supply',
            claimDescription: '700000000',
            fxDescription: 'Max Supply: 700 000 000 BSW tokens',
            fxfilename: 'Whitepaper.pdf',
            fxpageNumber: 1,
            gxcodeDescription: 'The total token supply is 700,000,000',
            gxcodeFileName: 'BSWToken.sol',
            gxcodeLine: 10,
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
          }
    ]

    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(false)
    const [isOpen6, setIsOpen6] = useState(false)

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


    // const [sidebarWidth, setSidebarWidth] = useState(undefined);
    // const [sidebarTop, setSidebarTop] = useState(undefined);

    // useEffect(() => {
    //     const sidebarEl = document.querySelector('.sidebar').getBoundingClientRect();
    //     setSidebarWidth(sidebarEl.width);
    //     setSidebarTop(sidebarEl.top);
    //     window.addEventListener('scroll', isSticky);
    //   }, []);
       
    // useEffect(() => {
    //     if (!sidebarTop) return;
    //     window.addEventListener('scroll', isSticky);
    //     return () => {
    //         window.removeEventListener('scroll', isSticky);
    //     };
    // }, [sidebarTop]);
       
    // const isSticky = (e) => {
    //     const sidebarEl = document.querySelectorAll('.sidebar');
    //     const scrollTop = window.scrollY;
    //     sidebarEl.forEach(elem => { 
    //         if (scrollTop >= sidebarTop - 20) {
    //             elem.classList.add('is-sticky');
    //         } else {
    //             elem.classList.remove('is-sticky');
    //         }
    //     } )
    // }

    const activeItem = codeList.findIndex((elem) => elem['fileName'] == activeFile) != -1 ? codeList[codeList.findIndex((elem) => elem['fileName'] == activeFile)] : null

      return (
        <Container className="home-container">
        <Helmet>
            <title>Home | Kreek</title>
            {/* <meta name="description" content="CivicTech Lab at National University of Singapore is a research hub led by Dr. Weiyu Zhang. We are a team of social scientists, computer scientists, and digital cultural analysts. " /> */}
        </Helmet>

        <Container className='project-name'>
            Project: {/* Uniswap V3 */}
            {/* {console.log(projectList)} */}
            <DropdownButton id="dropdown-basic-button" title={projectList[project] ? projectList[project]['name']: "No Projects"}>

                {projectList.map((project, index) => 
                    (<Dropdown.Item onClick={() => setProject(index)}>{project['name']}</Dropdown.Item>))}
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
            <div>Project Type: {projectList[project] ? projectList[project]['types']: "NA"} </div>

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
            <td className="sections" xs={2} md={2} lg={2}>
                <div className="sidebar">
                <WhitepaperAccordion setClaim={setClaim} data={claimData}></WhitepaperAccordion>

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
                </div>
            </td>

            <td className="browser" xs={8} md={8} lg={8}>
                
            <Container className='tabs'>
                {   
                    codeList.length > 0 &&
                    codeList.map((item, idx) => 
                        <Button className={activeFile == item['fileName'] ? 'tab tab-active' : 'tab'} onClick={() => setActiveFile(item['fileName'])}>{item['fileName']} <Icon.X onClick={() => close(idx)} className="tab-icon"/></Button>
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
                    // if (activeItem['ADDED'].includes(lineNumber)) {
                    //   style.backgroundColor = '#dbffdb';
                    // } else if (activeItem['REMOVED'].includes(lineNumber)) {
                    //   style.backgroundColor = '#ffecec';
                    // }
                    return { style, id };
                  }}
            > 
            {activeItem['data']}
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

            <td className="label" xs={2} md={2} lg={2}>
                <div className='sidebar'>
                <Container className='section-right code-quality'>
                    <Button className='button-main' onClick={() => setIsOpen4(!isOpen4)}>Code Quality {isOpen4 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>} </Button>
                    <Button id='sec1but1' className='button-sub' style={isOpen4 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <div class="button-content">
                            <span>maintainability: A</span>
                            <br></br>
                            <a href="#">createdBy: SonarQube</a>
                        </div>
                    </Button>
                    <Button id='sec1but2' className='button-sub' style={isOpen4 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <div class="button-content">
                            <span>test coverage: 80%</span>
                            <br></br>
                            <a href="#">createdBy: Jest</a>
                        </div>
                    </Button>
                    <Button id='sec1but3' className='button-sub' style={isOpen4 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <div class="button-content">
                            <span>performance: B</span>
                            <br></br>
                            <a href="#">createdBy: Load Impact</a>
                        </div>
                    </Button>
                </Container>

                <Container className='section-right security-analysis'>
                    <Button className='button-main' onClick={() => setIsOpen5(!isOpen5)}>Security Analysis{isOpen5 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <Button id='sec2but1' className='button-sub' style={isOpen5 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <div class="button-content">
                            score: 80/100
                            <br></br>
                            risk level: low
                            <br></br>
                            <a href="#">createdBy: Hacken</a>
                        </div>
                    </Button>
                    <Button id='sec2but2' className='button-sub'style={isOpen5 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <div class="button-content">
                            audits:
                            <br></br>
                            <a href="https://example.com/hacken_audit.pdf">createdBy: Hacken</a>
                            <br></br>
                            <a href="https://example.com/verazt_audit.pdf">createdBy: verazt</a>
                        </div>
                    </Button>
                </Container>

                <Container className='section-right explanation'>
                    <Button className='button-main' onClick={() => setIsOpen6(!isOpen6)}>Explanation{isOpen6 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <Button id='sec3but1' className='button-sub' style={isOpen6 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services.</Button>
                </Container>
                
                </div>
            </td>
          </tr>

        </tbody>
      </ResizableTable>
      </Xwrapper>


        </Container>
    );
}

export default Home