import React from 'react'
import { Badge, Button, Card, CardBody, Col, Container, Input, Row } from 'reactstrap'
import WelcomeComp from '../Dashboard/WelcomeComp'
import MonthlyEarning from '../Dashboard/MonthlyEarning'
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import Tabs from '../Common/Tabs';
import LeftSider from './LeftSider';

function index () {
 const button =[
    {colo:'primary'},
    {colo:'warning'},
    {colo:'success'},
 ]

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs breadcrumbItem="Product Service Fee" title="Dashboard" />
          <Row className='mb-4'>
            <Col xl={12}>
                <Card color='danger' className='mx-auto mb-3 py-3'>ff</Card>
            </Col>
          </Row>
          <Row>
            <Col xl={9}>
             <Row>
                {button.map((i)=>
                <Col key={i} sm={4}><Button color={i.colo} className='font-size-11'>Place Product_Service_Fees</Button></Col>
                )}
             </Row>
              <Row className='flex my-3 justify-content-between'>
                <Col sm={8} className=' d-flex gap-2'>
                   
                    <Card color='' className='btn-soft-primary p-1 d-flex'>
                  
                          Check your Product_Service_Fees 
                     
                        
                     

                    </Card>
                    <Card color='' className='btn-soft-danger px-3'>
                        <i className='far fa-bell font-size-16 my-auto'></i>
                    </Card>
                    <Card color='' className='btn-soft-success px-3 '>
                       <i className='fas fa-circle-notch font-size-16 my-auto'></i>
                    </Card>
                </Col>
                <Col sm={2} className='my-2'>
                    <Input color='dark' className='btn-outline-dark'></Input>
                </Col>
              </Row>
            <Row>
                <Tabs></Tabs>
            </Row>
            </Col>
            <Col xl={3}>
            
                  {/* <Col md="4" key={"_col_" + key}> */}
                    <LeftSider/>
                  {/* </Col> */}
            
            </Col>
          </Row>  
        </Container>
      </div>
    </React.Fragment>
  )
}

export default index