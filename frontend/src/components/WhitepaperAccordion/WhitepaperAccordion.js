import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './WhitepaperAccordion.css';
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon, CodeBracketIcon, DocumentIcon } from '@heroicons/react/20/solid'

const WhitepaperAccordion = (props) => {
  const {
    setClaim,
    data,
  } = props;

  const [isOpen, setIsOpen] = useState(false)
  const [selectedButton, setSelectedButton] = useState(null);

  const h5Styles = {
    fontWeight: 600,
    marginBottom: '0px',
    fontSize: '0.8rem',
  }

  const spanStyles = {
    textAlign: 'left',
    width: '100%',
    padding: '0px 10px',
  }

  return (
    <Container className='section whitepaper'>
      <button className='button-main rounded bg-red-100 hover:bg-red-200' onClick={() => setIsOpen(!isOpen)}>Whitepaper (10/50 passed) {isOpen ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>} </button>
      <div style={isOpen ? {visibility:'visible', opacity:'1'}:{visibility:'hidden', opacity:'0', height:'0px', padding:'0'}}>
      {data.map((item) => (
        <ClaimCard item={item} />
      ))}
      </div>
      {/* {isOpen &&
        data.map(item => (
          <Button
            id={item.claimId}
            key={item.claimId}
            className='button-sub'
            onClick={(event) => {setSelectedButton(item.claimId); }}
            style={{ visibility: 'visible', opacity: '1' }}
          >
            {item.claimName}
          </Button>
        ))
      }
      {selectedButton && isOpen && 

        <Container className='analysis-home'>
          <div className="analysis-header"><Icon.Check2Square /> <h3>Analysis</h3> </div>
          <div className='button-ter' style={{ visibility: 'visible', opacity: '1' }}>
          <h5 style={h5Styles}>[{data.find(item => item.claimId === selectedButton).claimId}] {data.find(item => item.claimId === selectedButton).claimName}</h5>
            <div style={spanStyles}>{data.find(item => item.claimId === selectedButton).claimDescription}</div>
          </div>
          <div className='button-ter' style={{ visibility: 'visible', opacity: '1' }}>
          <h5 style={h5Styles}>Whitepaper claims by Ray</h5>
            <div style={spanStyles}>{data.find(item => item.claimId === selectedButton).whitepaper}</div>
          </div>
          <div className='button-ter' style={{ visibility: 'visible', opacity: '1' }}>
          <h5 style={h5Styles}>Code evidence by XH</h5>
            <div style={spanStyles}>{data.find(item => item.claimId === selectedButton).code}</div>
          </div>
          <div className='button-ter' style={{ visibility: 'visible', opacity: '1' }}>
          <h5 style={h5Styles}>Validation Status:  {data.find(item => item.claimId === selectedButton).validationStatus ? "True ✅" : "False ❌"}</h5>
            <div style={spanStyles}>{data.find(item => item.claimId === selectedButton).validationDescription}</div>
          </div>
        </Container>
      } */}
      </Container>
  );
}

export default WhitepaperAccordion

const ClaimCard = (props) => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="lg:col-start-3 lg:row-end-1 mb-4">
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap mb-0">
          <div className="flex-auto pl-2 pt-0 hover:cursor-pointer w-52" onClick={() => setOpen(!open)}>
            <dd className="inline-flex items-centerpx-2 py-1 text-xs font-medium font-semibold">
              {props.item.validationStatus ? "✅" : "❌"} [{props.item.claimId}] 
            </dd>
            <dd className="mt-1 text-sm font-semibold leading-1 text-gray-900">{props.item.claimDescription}</dd>
          </div>
          <div className="transition-all" style={open ? {visibility:'visible', opacity:'1', maxHeight:'1000px'}:{visibility:'hidden', opacity:'0', maxHeight:'0px', padding:'0', margin:'0'}}>
            <div className="mt-2 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-2 pt-2">
              <dt className="flex-none">
                <DocumentIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
              </dt>
              <dd className="text-sm text-left font-medium leading-2 text-gray-900">{props.item.whitepaper}</dd>
            </div>
            <div className="mt-2 flex w-full flex-none gap-x-4 px-2">
              <dt className="flex-none">
                <CodeBracketIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
              </dt>
              <dd className="text-sm text-left leading-6 text-gray-500">
                <time dateTime="2023-01-31">{props.item.code}</time>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}
