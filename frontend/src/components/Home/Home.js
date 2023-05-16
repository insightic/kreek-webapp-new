import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, CardDeck, Jumbotron, Button, Dropdown, DropdownButton} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
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
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Home = (props) => {
    let location = useLocation();
    const ADDED = [1, 2];
    const REMOVED = [6];
    const [showArrow, setShowArrow] = React.useState(false);
    const [lineFrom, setLineFrom] = React.useState(null);
    const [lineTo, setLineTo] = React.useState(null);
    const updateXarrow = useXarrow();

    console.log(location);
    // const [projectList, setProjectList] = useState([])
    const [assessmentList, setAssessmentList] = useState([])

    let project = props.project;
    let setProject = props.setProject;
    let projectList = props.allProjects.length > 0 ? props.allProjects : [];

    // useEffect(() => {
    //     const p = axios({
    //         method: 'POST',
    //         url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAllProjects',
    //         headers: {}, 
    //         data: {}
    //       }).then(function (response) {
    //         console.log("debug")
    //         console.log(response['data'])
    //         return response['data']
    //       })

    //     const p1 = axios({
    //         method: 'POST',
    //         url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
    //         headers: {}, 
    //         data: {"projectId": 1}
    //       }).then(function (response) {
    //         console.log("debug1")
    //         console.log(response['data'])
    //         return response['data']
    //       })
    
    //       const p2 = axios({
    //         method: 'POST',
    //         url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
    //         headers: {}, 
    //         data: {"projectId": 2}
    //       }).then(function (response) {
    //         return response['data']
    //       })
    
    //       const p3 = axios({
    //         method: 'POST',
    //         url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
    //         headers: {}, 
    //         data: {"projectId": 3}
    //       }).then(function (response) {
    //         return response['data']
    //       })
    
    //       const p4 = axios({
    //         method: 'POST',
    //         url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getProjectByProjectId',
    //         headers: {}, 
    //         data: {"projectId": 4}
    //       }).then(function (response) {
    //         return response['data']
    //       })

    //     axios.all([p1, p2, p3, p4]).then(axios.spread((...responses) => {
    //         const responseOne = responses[0]
    //         const responseTwo = responses[1]
    //         const responseThree = responses[2]
    //         const responseFour = responses[3]
    //         console.log('responses: ')
    //         console.log(responseOne['codes'])
    //         console.log(responseTwo['codes'])
    //         console.log(responseThree['codes'])
    //         console.log(responseFour['codes'])
    //         setProjectList([responseOne, responseTwo, responseThree, responseFour])
    //         console.log([responseOne, responseTwo, responseThree, responseFour][project]['codes'])
    //         setCodeList([responseOne, responseTwo, responseThree, responseFour][project]['codes'])
    //         // use/access the results
    //         })).catch(errors => {
    //             console.log(errors.response.data)
    //         // react on errors.
    //         }).finally(() => {
    //             console.log("Done");
    //         });
    //         console.log(projectList)
    // }, [])

    useEffect(() => {
        const p1 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAssessmentByProjectId',
            headers: {}, 
            data: {"projectId": 1}
          }).then(function (response) {
            return response['data']
          })
    
          const p2 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAssessmentByProjectId',
            headers: {}, 
            data: {"projectId": 2}
          }).then(function (response) {
            return response['data']
          })
    
          const p3 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAssessmentByProjectId',
            headers: {}, 
            data: {"projectId": 3}
          }).then(function (response) {
            return response['data']
          })
    
          const p4 = axios({
            method: 'POST',
            url: 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080/getAssessmentByProjectId',
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
            console.log("assessment:")
            console.log(responseOne)
            console.log(responseTwo)
            console.log(responseThree)
            console.log(responseFour)
            setAssessmentList([responseOne, responseTwo, responseThree, responseFour])
            // use/access the results
            })).catch(errors => {
                console.log(errors.response.data)
            // react on errors.
            }).finally(() => {
                console.log("Done");
            });
    }, [])


    const dummydata = [
        {'file': 'BSWToken.sol', 'ADDED': [1, 2], 'REMOVED': [5,6], 'code': sample['html']},
        {'file': 'BiswapERC20.sol', 'ADDED': [2, 3], 'REMOVED': [4,8], 'code': sample['html']},
        {'file': 'BiswapFactory.sol', 'ADDED': [1, 3], 'REMOVED': [2,6], 'code': sample['objectivec']},
        {'file': 'BiswapPair.sol', 'ADDED': [1, 4], 'REMOVED': [5,7], 'code': sample['python']},
        {'file': 'IBiswapCallee.sol', 'ADDED': [3, 5], 'REMOVED': [2,8], 'code': sample['java']}
    ]


    // const claimData = [
    //     {
    //         id: 'sec1but1',
    //         claimId: 'dex011',
    //         claimName: 'Token symbol',
    //         claimDescription: 'Tokens symbol is BSW',
    //         fxDescription: 'Ticker Symbol: BSW ',
    //         fxfilename: 'Whitepaper.pdf',
    //         fxpageNumber: 1,
    //         gxcodeDescription: 'contract BSWToken is BEP20(\'Biswap\', \'BSW\')',
    //         gxcodeFileName: 'BSWToken.sol',
    //         gxcodeLine: 1021,
    //         validationStatus: true,
    //         validationDescription: 'The two outputs are the same'
    //       },
    //     {
    //       id: 'sec1but2',
    //       claimId: 'dex012',
    //       claimName: 'Blockchain Standard',
    //       claimDescription: 'BEP-20 standard',
    //       fxDescription: 'Chain: BNB Chain (BEP-20)',
    //       fxfilename: 'Whitepaper.pdf',
    //       fxpageNumber: 1,
    //       gxcodeDescription: 'contract BSWToken is BEP20(\'Biswap\', \'BSW\')',
    //       gxcodeFileName: 'BSWToken.sol',
    //       gxcodeLine: 1021,
    //       validationStatus: true,
    //       validationDescription: 'The two outputs are the same'
    //     },
    //     {
    //         id: 'sec1but3',
    //         claimId: 'dex013',
    //         claimName: 'Token Supply',
    //         claimDescription: '700000000',
    //         fxDescription: 'Max Supply: 700 000 000 BSW tokens',
    //         fxfilename: 'Whitepaper.pdf',
    //         fxpageNumber: 1,
    //         gxcodeDescription: 'The total token supply is 700,000,000',
    //         gxcodeFileName: 'BSWToken.sol',
    //         gxcodeLine: 10,
    //         validationStatus: true,
    //         validationDescription: 'The two outputs are the same'
    //       }
    // ]

    const claimData = [
        {
            id: 'sec1but1',
            claimId: 'dex011',
            claimName: 'Token symbol',
            claimDescription: 'Tokens symbol is BSW',
            whitepaper: 'Ticker Symbol: BSW ',
            code: 'contract BSWToken is BEP20(\'Biswap\', \'BSW\')',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
          },
        {
          id: 'sec1but2',
          claimId: 'dex012',
          claimName: 'Blockchain Standard',
          claimDescription: 'BEP-20 standard',
          whitepaper: 'Chain: BNB Chain (BEP-20)',
          code: 'Contract BSWToken is BEP20(\'Biswap\', \'BSW\')',
          validationStatus: true,
          validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but3',
            claimId: 'dex013',
            claimName: 'Token Supply',
            claimDescription: '700000000',
            whitepaper: 'Max Supply: 700 000 000 BSW tokens',
            code: 'The total token supply is 700,000,000',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but4',
            claimId: 'dex014',
            claimName: 'Token Standard',
            claimDescription: 'Is ERC20 Token Standard Implemented?',
            whitepaper: 'No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem',
            code: 'Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface.',
            validationStatus: false,
            validationDescription: 'The two outputs are not the same'
        },
        {
            id: 'sec1but5',
            claimId: 'dex015',
            claimName: 'SwapFee Tiers',
            claimDescription: 'How many types of Swap Fee Tiers are mentioned in code?',
            whitepaper: 'NA',
            code: 'There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1.',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but6',
            claimId: 'dex016',
            claimName: 'Swap Fee',
            claimDescription: 'What is the swap fee for a single token swap?',
            whitepaper: 'The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%. ',
            code: 'The default swap fee is 1 basis point (0.01%).',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but7',
            claimId: 'dex017',
            claimName: 'Swap Fee',
            claimDescription: 'How much of the swap fee will be taken by developers by _mintFee()?',
            whitepaper: 'Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.',
            code: 'The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract. ',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but8',
            claimId: 'dex018',
            claimName: 'Code Applicability',
            claimDescription: 'Is the code Applicable to AMM?',
            whitepaper: 'The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange. ',
            code: 'Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection.',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but9',
            claimId: 'dex019',
            claimName: 'Trading Pair Support',
            claimDescription: 'Is trading pairs other than those with WBNB allowed?',
            whitepaper: 'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
            code: 'The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB.',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but10',
            claimId: 'dex0110',
            claimName: 'Preventing frontrunning attacks',
            claimDescription: 'Is the smart contracts capable to prevent frontrunning attacks?',
            whitepaper: 'NA',
            code: 'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but11',
            claimId: 'dex0111',
            claimName: 'Token prices',
            claimDescription: 'Is on-chain or off-chain price feeds used for the token prices?',
            whitepaper: 'NA',
            code: 'The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool.',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but12',
            claimId: 'dex0112',
            claimName: 'Decentralized governance mechanism',
            claimDescription: 'Does the smart contract implement a decentralized governance mechanism?',
            whitepaper: 'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
            code: 'No, the Biswap smart contract does not implement a decentralized governance mechanism.',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
        {
            id: 'sec1but13',
            claimId: 'dex0113',
            claimName: 'Maximum Transaction Amount or Frequency',
            claimDescription: 'Is there a restriction on the maximum transaction amount or frequency for a given address?',
            whitepaper: 'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
            code: 'The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address.',
            validationStatus: true,
            validationDescription: 'The two outputs are the same'
        },
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
        console.log('Fruit', props)
        if (projectList.length > 0) {
            setCodeList(projectList[project]['codes'])
        }
    }, [projectList])

    useEffect(() => {
        if (newFile.current != null) {
            console.log('Fruit', newFile);
            setActiveFile(newFile.current)
        }
      }, [codeList])

    useEffect(() => {
        if (projectList[project]) {
            setCodeList(projectList[project]['codes'])
        }
    }, [project])


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
            <div>Project Type: <span>{projectList[project] ? projectList[project]['types'].join(', '): "NA"} </span></div>

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


        {/* <Xwrapper> */}
        {/* <Xarrow
                start={lineFrom}
                end={lineTo}
                startAnchor={'right'}
                path={"grid"}
                dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: -2 }}
                showHead={false}
                showXarrow = {true}
                strokeWidth={5}
                // animateDrawing={1}
        /> */}
        <ResizableTable resizable={true} resizeOptions={{liveDrag:true, onDrag:updateXarrow, widths:[300,500,400]}}>
        <tbody className="home">
          <tr>
            <td className="sections" xs={2} md={2} lg={2}>
                <div className="sidebar">
                <WhitepaperAccordion setClaim={setClaim} data={claimData}></WhitepaperAccordion>

                <Container className='section regulations'>
                    <button className='button-main rounded bg-blue-100 hover:bg-blue-200' onClick={() => setIsOpen2(!isOpen2)}>Regulations (5/5 passed){isOpen2 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</button>
                    <div style={isOpen2 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <Button id='sec2but1' className='button-sub' onClick={setClaim} >Rule 1</Button>
                        <Button id='sec2but2' className='button-sub' onClick={setClaim}>Rule 2</Button>
                        <Button id='sec2but3' className='button-sub' onClick={setClaim}>Rule 3</Button>
                        <Button id='sec2but4' className='button-sub' onClick={setClaim}>Rule 4</Button>
                    </div>
                </Container>

                <Container className='section industrial-standard'>
                    <button className='button-main rounded bg-green-100 hover:bg-green-200' onClick={() => setIsOpen3(!isOpen3)}>Industry Standard{isOpen3 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</button>
                    <div style={isOpen3 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <Button id='sec3but1' className='button-sub' onClick={setClaim} >Reference 1</Button>
                        <Button id='sec3but2' className='button-sub' onClick={setClaim}>Reference 2</Button>
                        <Button id='sec3but3' className='button-sub' onClick={setClaim}>Reference 3</Button>
                    </div>
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
                className='code'
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
                className='code'
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
                <CodeQualityStat />
                <SecurityAnalysisStat />
                <Explanation />
                <CodeOriginality />
                {/* <Container className='section-right code-quality'>
                    <Button className='button-main' onClick={() => setIsOpen4(!isOpen4)}>Code Quality {isOpen4 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>} </Button>
                    <div style={isOpen4 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <Button id='sec1but1' className='button-sub' >
                            <div className="button-content">
                                <span>maintainability: {assessmentList[project] ? assessmentList[project]["codeQuality"] ? assessmentList[project]["codeQuality"]["maintainability"]['value'] : "NA" : "NA"}</span>
                                <br></br>
                                <a href="#">createdBy: {assessmentList[project] ? assessmentList[project]["codeQuality"] ? assessmentList[project]["codeQuality"]["maintainability"]['createdBy'] : "NA" : "NA"}</a>
                            </div>
                        </Button>
                        <Button id='sec1but2' className='button-sub'>
                            <div className="button-content">
                                <span>test coverage: {assessmentList[project] ? assessmentList[project]["codeQuality"] ? assessmentList[project]["codeQuality"]["testCoverage"]['value'] : "NA" : "NA"}</span>
                                <br></br>
                                <a href="#">createdBy: {assessmentList[project] ? assessmentList[project]["codeQuality"] ? assessmentList[project]["codeQuality"]["testCoverage"]['createdBy'] : "NA" : "NA"}</a>
                            </div>
                        </Button>
                        <Button id='sec1but3' className='button-sub'>
                            <div className="button-content">
                                <span>performance: {assessmentList[project] ? assessmentList[project]["codeQuality"] ? assessmentList[project]["codeQuality"]["performance"]['value'] : "NA" : "NA"}</span>
                                <br></br>
                                <a href="#">createdBy: {assessmentList[project] ? assessmentList[project]["codeQuality"] ? assessmentList[project]["codeQuality"]["performance"]['createdBy'] : "NA" : "NA"}</a>
                            </div>
                        </Button>
                    </div>
                </Container>

                <Container className='section-right security-analysis'>
                    <Button className='button-main' onClick={() => setIsOpen5(!isOpen5)}>Security Analysis{isOpen5 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <div style={isOpen5 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <Button id='sec2but1' className='button-sub' >
                            <div className="button-content">
                                score: 80/100
                                <br></br>
                                risk level: low
                                <br></br>
                                <a href="#">createdBy: Hacken</a>
                            </div>
                        </Button>
                        <Button id='sec2but2' className='button-sub'>
                            <div className="button-content">
                                audits:
                                <br></br>
                                <a href="https://example.com/hacken_audit.pdf">createdBy: Hacken</a>
                                <br></br>
                                <a href="https://example.com/verazt_audit.pdf">createdBy: verazt</a>
                            </div>
                        </Button>
                    </div>
                </Container>

                <Container className='section-right explanation'>
                    <Button className='button-main' onClick={() => setIsOpen6(!isOpen6)}>Explanation{isOpen6 ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>}</Button>
                    <div style={isOpen6 ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
                        <Button id='sec3but1' className='button-sub'>{assessmentList[project] ? assessmentList[project]["explanation"]["value"] : "NA"}</Button>
                    </div>
                </Container> */}

                {/* <div className='section-right code-check'>
                    <h5>Code Originality</h5>
                    <div>
                        <h6>UniSwap</h6>
                        <span style={{color:'red'}}>63%</span>
                    </div>
                    <div>
                        <h6>PancakeSwap</h6>
                        <span style={{color:'orange'}}>49%</span>
                    </div>
                    <div>
                        <h6>ParaSwap</h6>
                        <span style={{color:'green'}}>29%</span>
                    </div>
                    
                </div> */}
                
                </div>
            </td>
          </tr>

        </tbody>
      </ResizableTable>
      {/* </Xwrapper> */}


        </Container>
    );
}

export default Home

const CodeQualityStat = (props) => {
    const stats = [
        { name: 'Maintainability', stat:'A', creator: 'SonarCube', },
        { name: 'Test Coverage', stat: '80%', creator: 'Jest'},
        { name: 'Performance', stat: 'B', creator: 'GPT'},
    ]
    
    return (
      <div className="max-w-xs w-60">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Code Quality</h3>
        <dl className="mt-2 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-1 md:divide-x md:divide-y-2">
          {stats.map((item) => (
            <div key={item.name} className="px-1 py-0 sm:p-4">
              <dt className="text-base text-left p-1 font-semibold text-gray-900">{item.name}</dt>
              <dd className="mt-1 flex items-baseline p-1 justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  {item.stat}
                  <span className="ml-2 text-sm font-medium text-gray-500">created By {item.creator}</span>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    )
}

const CodeOriginality = (props) => {
    const stats = [
        { name: 'UniSwap', stat:'63%'},
        { name: 'PancakeSwap', stat: '49%'},
        { name: 'ParaSwap', stat: '29%'},
    ]
    
    return (
      <div className="max-w-xs w-60">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Code Quality</h3>
        <dl className="mt-2 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-1 md:divide-x md:divide-y-2">
          {stats.map((item) => (
            <div key={item.name} className="px-1 py-0 sm:p-4 flex flex-row justify-between">
              <dt className="text-base text-left p-1 font-semibold text-gray-900">{item.name}</dt>
              <dd className="mt-1 flex items-baseline p-1 justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  {item.stat}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    )
}

const SecurityAnalysisStat = (props) => {
    const stats = [
        { name: 'Score', stat:'80/100', creator: 'Hacken', risi:'low'},
        { name: 'Audits', stat: '85/100', creator: 'verazt', risk:'low'},
    ]
    return (
      <div className="max-w-xs w-60">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Security Analysis</h3>
        <dl className="mt-2 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-1 md:divide-x md:divide-y-2">
          {stats.map((item) => (
            <div key={item.name} className="px-1 py-0 sm:p-4">
              <dt className="text-base text-left p-1 font-semibold text-gray-900">{item.name}</dt>
              <dd className="mt-1 flex items-baseline p-1 justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  {item.stat}
                  <span className="ml-2 text-sm font-medium text-gray-500">created By {item.creator}</span>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    )
}

const Explanation = (props) => {
    const stats = [
        { desc: 'BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services.'},
    ]
    return (
      <div className="max-w-xs w-60">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Explanation</h3>
        <dl className="mt-2 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-1 md:divide-x md:divide-y-2">
          {stats.map((item) => (
            <div key={item.desc} className="px-1 py-0 sm:p-4">
              <dt className="text-sm font-normal text-left p-1 text-gray-900">{item.desc}</dt>
            </div>
          ))}
        </dl>
      </div>
    )
}