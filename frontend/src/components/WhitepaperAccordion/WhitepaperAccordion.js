import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './WhitepaperAccordion.css';

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
            [{data.find(item => item.claimId === selectedButton).claimId}] {data.find(item => item.claimId === selectedButton).claimName}
            <br></br>
            {data.find(item => item.claimId === selectedButton).claimDescription}
          </div>
          <div className='button-ter' style={{ visibility: 'visible', opacity: '1' }}>
            {data.find(item => item.claimId === selectedButton).fxDescription} 
            <br></br>
            File: {data.find(item => item.claimId === selectedButton).fxfilename}
            #P{data.find(item => item.claimId === selectedButton).fxpageNumber}
          </div>
          <div className='button-ter' style={{ visibility: 'visible', opacity: '1' }}>
            {data.find(item => item.claimId === selectedButton).gxcodeDescription} 
            <br></br>
            File: {data.find(item => item.claimId === selectedButton).gxcodeFileName}
            #L{data.find(item => item.claimId === selectedButton).gxcodeLine}
          </div>
          <div className='button-ter' style={{ visibility: 'visible', opacity: '1' }}>
            Validation Status: {data.find(item => item.claimId === selectedButton).validationStatus ? "True" : "False"} 
            <br></br>
            {data.find(item => item.claimId === selectedButton).validationDescription}
          </div>
        </Container>
      }
      </Container>
  );
}

export default WhitepaperAccordion
