import React from 'react'
import { Badge, Button, Card, CardBody, Col, Container, Input, Row } from 'reactstrap'
import WelcomeComp from '../Dashboard/WelcomeComp'
import MonthlyEarning from '../Dashboard/MonthlyEarning'
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import Tabs from '../Common/Tabs';
import LeftSider from '../Product/LeftSider';
import SessionTable from './SessionTable';
// import NotificationCard from './NotificationCard';

function index () {
 const button =[
    {colo:'primary', tittle :'Noficatoins '},
    {colo:'danger', tittle:'Email History'},
    {colo:'success',tittle:'Sessions'},
    
 ]

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
        <Breadcrumbs title="Participator" breadcrumbItem='Session' />
          <Row className='mb-4'>
            <Col xl={12}>
                <Card color='danger' className='mx-auto mb-3 py-3'>ff</Card>
            </Col>
          </Row>
          <Row>
            <Col xl={9}>
             <div className='d-flex gap-2'>
                {button.map((i)=>
                <div key={i} ><Button color={i.colo} className='font-size-16 p-2'>{i.tittle}</Button></div>
                )}
             </div>
              <Row className='flex my-3 justify-content-between'>
                <Col sm={10} className=' d-flex gap-2'>
                   
                    <Card color='' className='btn-soft-primary p-1 font-size-20 d-flex'>
                  
                             Check Your Sessions 
                     
                        
                     

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
                <SessionTable/>
                {/* <HistoryTable/> */}
                {/* <NotificationCard/> */}
            </Row>
            </Col>
            <Col xl={3}>
            
                 
                    <LeftSider/>
                 
            
            </Col>
          </Row>  
        </Container>
      </div>
    </React.Fragment>
  )
}

export default index