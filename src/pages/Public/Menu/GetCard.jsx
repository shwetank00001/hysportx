import classNames from 'classnames';
import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'

function GetCard(props) {
   const a=props.index
   if(!props.icon){
   var icon =''
   }else{
    icon=props.icon
   }
    const [tab, setTab] = useState(a[0].title)
    const toggle = e => {
        if (tab !== e) {
          setTab(e);
        }
      };
  return (
    <>
    
    <Card
    className="#fff "
  
  >
    <CardHeader className="m-0   d-flex justify evenly bg-black #fff" >
      <Row xl={12} className=' p-1 justify-center'>
        {/* <span className="p-1">prop.Heading</span> */}
        <div style={{fontSize:'.7vw',margin:'0', padding:'0'}} className="text-center ">       
        <Nav tabs   className="d-flex m-0 p-0 justify-between"  >
      {props.index.map((key)=><>
        <NavItem style={{width:'94px'}} key={key} className="m-0 p-0 ">
        <NavLink 
            
              // className='m-xxl-0 p-1 '
            //   style={{ cursor: "pointer" }}
            //   className={classNames({
            //     active: tab === key.title,
            //   })}
              onClick={function noRefCheck(){
                var e =key.title
                toggle(e)
                // setTab(key.title)
              }}
              >
            <b style={{fontWeight:'300',color:key.color, margin:'0',padding:'0'}}>
                {key.title}
                </b>
            </NavLink>
            </NavItem>
          
            </>)}
            <NavItem className=''>
            <NavLink>
            <i style={{fontSize:'2vw'}} className={icon}></i>
            </NavLink>
            </NavItem>
    </Nav>
    </div>
  </Row>
    {/* <Col className='text-end'>{props.icon}</Col> */}
    </CardHeader>
    
    <CardBody>
    <TabContent activeTab={tab}>
        {
           props.index.map((e)=><>
            <TabPane key={e} tabId={e.title}>
            <Row>
              <Col sm="12">
             <Button type='primary'>

              {e.description}
             </Button>
                
              </Col>
            </Row>
          </TabPane>
          </>)
        }
    </TabContent>
      {/* <CardTitle tag="h5">
        Special Title Treatment
        </CardTitle>
        <CardText>
        With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
        Go somewhere
    </Button> */}
    </CardBody>
   
  </Card>
    </>
  )
}

export default GetCard