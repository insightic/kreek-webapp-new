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
      }
      </Container>
  );
}

export default WhitepaperAccordion
