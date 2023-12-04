import React, { useMemo, useState } from 'react'
import { Button, Card, CardBody, CardText, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import TableContainer from 'components/Common/TableContainer';
import DatePicker from 'react-flatpickr';
import RecentTable from '../Product/RecentTable';

function Tabs() {
    const [customActiveTab, setcustomActiveTab] = useState("1");

    const toggleCustom = tab => {
        if (customActiveTab !== tab) {
          setcustomActiveTab(tab);
        }
      };

     
    const tabs =[
      {id:'1', title:'Recent ', content : ''},
      {id:'2', title:'All ', content : ''},
      {id:'3', title:'Product/Service ', content : ''},
      {id:'4', title:'Registraon Fees', content : ''},
      // {id:'5', title:'Recent ', content : ''},
      // {id:'6', title:'Recent ', content : ''}
    ]
  return (  <>
                  <Row>


                    <Nav tabs className="nav-tabs-custom gap-4 mx-1 ">
                      {
                        tabs.map((i)=>
                      
                    <NavItem key={i}>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        // className={classnames({
                        //   active: customActiveTab === "1",
                        // })}
                        className='m-0 px-2 py-0'
                        onClick={() => {
                          toggleCustom(i.id);
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">{i.title}</span>
                      </NavLink>
                    </NavItem>
                      )
                    }
                   
                   
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        // className={classnames({
                        //   active: customActiveTab === "4",
                        // })}
                        className='py-0 px-2'
                        onClick={() => {
                          toggleCustom("5");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none text-muted d-sm-block">Most Repeated</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className='m-0 p-0'>
                      <DatePicker style={{width:'100px', marginLeft:'20px'}}/>
                         {/* <Input
                         style={{width:'120px', height:'25px', marginLeft:'10px', backgroundColor:'blue'}}
                           id="exampleDate"
                           name="date"
                           
                           placeholder="date placeholder"
                           type="date"
                         /> */}
                        {/* <Button className='btn-soft-success m-0 p-0' >

                       
                        <span className="d-none  d-sm-block">Most Repeated</span>
                        </Button> */}
                     
                    </NavItem>
                  </Nav>
                  </Row>
            
                 
                

                  <TabContent
                    activeTab={customActiveTab}
                    className=" text-muted"
                  >
                    <TabPane tabId="1">
                      
                        <RecentTable/>
                        
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven&apos;t heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table VHS viral locavore cosby
                            sweater. Lomo wolf viral, mustache readymade
                            thundercats keffiyeh craft beer marfa ethical. Wolf
                            salvia freegan, sartorial keffiyeh echo park vegan.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
               
              </>

  )
}

export default Tabs