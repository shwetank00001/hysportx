import React from 'react'
import { Badge, Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from 'reactstrap'
import SlideDark from './slideDark'
 const inter =[
  {title:'Inter School',detail: 'Inter school qualify round start get participate', icon :'', date:'December 9, 2023'},
  {title:'Inter School',detail: 'Inter school qualify round start get participate', icon :'', date:'December 9, 2023'},
  {title:'Inter School',detail: 'Inter school qualify round start get participate', icon :'', date:'December 9, 2023'},
  {title:'Inter School',detail: 'Inter school qualify round start get participate', icon :'', date:'December 9, 2023'},
  {title:'Inter School',detail: 'Inter school qualify round start get participate', icon :'', date:'December 9, 2023'},
  {title:'Inter School',detail: 'Inter school qualify round start get participate', icon :'', date:'December 9, 2023'}
 ]
function GamesCard() {
  return (
     <>
       <Card
    className=""
    color='danger'
    inverse
    style={{
      
    }}
  >
    <CardHeader style={{backgroundColor:'red'}} >
      <h2>FW GAMES</h2>
      <Badge dot={true} ></Badge>

    </CardHeader>
    <CardBody>
                     
      <CardText className='m-0 p-0 d-flex'>
        <Row>

        <Col xl={6} style={{}}>
         <div className='bg-white' style={{height:'100%'}}>

      {/* <SlideDark  /> */}
         </div>
        </Col>
        <Col xl={6} >
          <Row className='mt-1' >
 
        {inter.map((i)=>
        
        
        <div key={i} style={{width:'170px', backgroundColor:''}} className='d-flex'>
          <Card  color='primary' className='p-5 '></Card>
          <div className='d-grid place-item-center'  >
             <h6 className='mb-'>Inter Gym</h6>
             <p style={{fontSize:'8px', marginTop:''}}>Inter School qualify round start get participate</p>
             <i style={{fontSize:'8px'}} className='bx bx-calendar'>December, 9 , 2023</i>
          </div>
          </div>
        
        )}
        </Row>
        </Col>
        </Row>
      </CardText>
    </CardBody>
  </Card>
     </>
  )
}

export default GamesCard