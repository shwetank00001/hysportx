import React from 'react'
import { Badge, Card, Col, Row } from 'reactstrap'

function EcoomerceCard(props) {
   const card = props.card
  //  console.log(card)
  return (
    <>
      
    <div style={{ width: '90vw' }} name='card' className='d-flex border border-dark mx-5 '>

        {card.map((i) =>
        <Row key={i}>

         <Col  xl={3}>

        <Card  color='secondary' className='m-1'>
          <div className=''>
              {i.title}
          </div>

      </Card>
        </Col>
        </Row>
      )}
      </div>
      
      <label htmlFor="card">for</label>
      </>
  )
}

export default EcoomerceCard