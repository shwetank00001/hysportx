import React from 'react'
import { Button, Card, CardBody, CardText, Col, Row } from 'reactstrap'

function NotificationCard() {
    const notification =[
        {id:'1',logo:'gggg', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm', status:'1'},
        {id:'2',logo:'ddd', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm'},
        {id:'3',logo:'ffff', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm', status:'1'},
        {id:'4',logo:'sss', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm', status:'1'},
        {id:'5',logo:'gggg', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm', status:'1'},
        {id:'6',logo:'gggg', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm'},
        {id:'7',logo:'gggg', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm', status:'1'},
        {id:'8',logo:'gggg', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm'},
        {id:'9',logo:'gggg', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm', status:'1'},
        {id:'10',logo:'gggg', title:'Your Item is shipped', detail:'If several languages coalescae the grammar, ', date:' 24-10-2023',time:'05:00pm'},

    ]
  return (<>
  <Col>
  {notification.map((i)=>
  
  <Card key={i} className=' '>
    <Row className='mx-2 d-flex align-items-center'>

      <Col className='mt-4' xl={2}>
        <Card color='primary' className='p-3' >{i.logo}</Card>
      </Col>
        <Col xl={6}>
           <h6 className='p-0 mx-0 my-1'>{i.title? i.title :''}</h6>
           <p className='font-size-10 m-0 p-0'>{i.detail} </p>
           <p className='font-size-10 m-0 p-0'>{i.detail} </p>
     
           <Row className='my-1'>
            <Col sm={4} className='font-size-11'>Dated : {i.date}</Col>
            <Col className='font-size-11'>Time : {i.time} </Col>
           </Row>
        </Col>
    
     
    <Col xl={2}>
     <div className='text-center'>
        <i className='fas fa-star'></i>
      </div>
    </Col>
    
        <Col xl={2}>
            <p className='text-muted font-size-10 my-0  mx-1 p-0'>status</p>
        {(i.status ? 
        <Button className='btn-soft-primary' size='small'>Read</Button>:
        <Button className='btn-soft-warning' size='small'>Unread</Button>
     
        )}
        </Col>
  
    </Row>
  </Card>
  )}
  </Col>
  </>  )
}

export default NotificationCard