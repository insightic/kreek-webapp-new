import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const WhitepaperAccordion = (props) => {
  const {
    setClaim,
    data,
  } = props;

  const [isOpen, setIsOpen] = useState(false)
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <Container className='section whitepaper'>
      <Button className='button-main' onClick={() => setIsOpen(!isOpen)}>Whitepaper (10/50 passed) {isOpen ? <Icon.CaretDown className="button-icon"/> : <Icon.CaretRight className="button-icon"/>} </Button>
      {isOpen &&
        data.map(item => (
          <Button
            id={item.claimId}
            key={item.claimId}
            className='button-sub'
            onClick={(event) => { setClaim(event); setSelectedButton(item.claimId); }}
            style={{ visibility: 'visible', opacity: '1' }}
          >
            {item.claimName}
          </Button>
        ))
      }
      {selectedButton && isOpen && (
        [
          <Button className='button-ter a' style={{ visibility: 'visible', opacity: '1' }}>
            [{data.find(item => item.claimId === selectedButton).claimId}] {data.find(item => item.claimId === selectedButton).claimName}
            <br></br>
            {data.find(item => item.claimId === selectedButton).claimDescription}
          </Button>,
          <Button className='button-ter b' style={{ visibility: 'visible', opacity: '1' }}>
            {data.find(item => item.claimId === selectedButton).fxDescription} 
            <br></br>
            File: {data.find(item => item.claimId === selectedButton).fxfilename}
            #P{data.find(item => item.claimId === selectedButton).fxpageNumber}
          </Button>,
          <Button className='button-ter c' style={{ visibility: 'visible', opacity: '1' }}>
            {data.find(item => item.claimId === selectedButton).gxcodeDescription} 
            <br></br>
            File: {data.find(item => item.claimId === selectedButton).gxcodeFileName}
            #L{data.find(item => item.claimId === selectedButton).gxcodeLine}
          </Button>,
          <Button className='button-ter d' style={{ visibility: 'visible', opacity: '1' }}>
            Validation Status: {data.find(item => item.claimId === selectedButton).validationStatus ? "True" : "False"} 
            <br></br>
            {data.find(item => item.claimId === selectedButton).validationDescription}
          </Button>
        ]
      )}
      </Container>
  );
}

export default WhitepaperAccordion
