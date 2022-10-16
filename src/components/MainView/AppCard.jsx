import React from 'react'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'

import { useNavigate} from 'react-router-dom'
import './AppCard.css'

const AppCard = ({name, route}) => {
  const navigate = useNavigate();

  return (
    <div className='appcard' onClick={() => navigate(`/${route}`)}>
      <Row>
        <Col md={4} lg={4} sm={4}>
          <div  className="icon">
            <img src={`icons/MainView/${route}.svg`}></img>
          </div>
        </Col>
        <Col md={8} lg={8} sm={8}>
          <div className='title'>
            <h3>{name}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AppCard