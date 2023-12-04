import React, { useEffect, useState } from 'react';
// import Breadcrumb from 'components/Common/Breadcrumb'
import Breadcrumb from '../../components/Common/Breadcrumb'
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Select from "react-select";
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import axios from 'axios';


function index() {
    const [activeTab, setactiveTab] = useState("1");

    const [selectedMulti, setselectedMulti] = useState(null);
    
  const toggle = tab => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  
  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab]

      if (tab >= 1 && tab <= 4) {
        // setoggleTabVertical(tab)
        setPassedStepsVertical(modifiedSteps)
      }
    }
  }


  


const nav =[
{id:'CREATE HYSPORTX EXERCISE', title:'CREATE HYSPORTX EXERCISE' , icon :''},
{id:'CREATE HYSPORTX EXERCISE', title:'CREATE HYSPORTX EXERCISE' , icon :''},
{id:'CREATE HYSPORTX EXERCISE', title:'CREATE HYSPORTX EXERCISE' , icon :''},
{id:'CREATE HYSPORTX EXERCISE', title:'CREATE HYSPORTX EXERCISE' , icon :''},
]

function handleMulti(selectedMulti) {
setselectedMulti(selectedMulti);
}
const categorytitle = [
{
 
  options: [
    { label: "Muscle Group", value: "Muscle Group" },
    { label: "Experience Level", value: "Experience Level" },
    { label: "Exercise Type", value: "Exercise Type" },
    { label: "Equipment", value: "Equipment" },
  ]
},

];





  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />
          <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Default Tabs</CardTitle> */}
                  
                  <CardHeader className='m-0 p-0'>

                 
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                    Manage Category
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        List
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                  </CardHeader>
                  <TabContent activeTab={activeTab} className="p-3 text-muted">
                    <TabPane tabId="1">
                      <Row >
                        <Col sm="11 mx-auto">
                        <Card>
                            <CardHeader>
                                ADD Category
                            </CardHeader>
                            
                            <Form className='mx-5 mt-4'>
                               
                               <Row className="mb-4  ">
                                 <Label
                                   htmlFor="horizontal-email-Input"
                                   className="col-sm-2 mx-5 col-form-label text-end"
                                 >
                                  Category Title
                                 </Label>
                                 <Col sm={8}>
                                    <Row className='input-group'>

                                  <Select
                                    value={selectedMulti}
                                    // isMulti={true}
                                    onChange={() => {
                                        handleMulti();
                                    }}
                                   options={categorytitle}
                                    className="select2-selection col-sm-7 p-0"
                                    />
                                
                                    </Row>
                                 </Col>
                               </Row>
                            
                               <Row className="mb-4 ">
                                 <Label
                                   htmlFor="horizontal-firstname-Input"
                                   className="col-sm-2 col-form-label text-end mx-5"
                                 >
                                   Category 
                                 </Label>
                                 <Col sm={8}>
                                    <Row className='col-sm-7'>

                                   <Input
                                     type="text"
                                     className="form-control px-1 "
                                     id="horizontal-firstname-Input"
                                     placeholder="Enter Your"
                                     />
                                     </Row>
                                 </Col>
                               </Row>
                               <Row className="mb-4 ">
                                 <Label
                                   htmlFor="horizontal-firstname-Input"
                                   className="col-sm-2 col-form-label text-end mx-5"
                                 >
                                   
                                 </Label>
                                 <Col sm={8}>
                                    <Row className='col-sm-7'>

                                   <Button
                                    //  type="submit"
                                     color="success"
                                     className="form-control px-1 "
                                    

                                     placeholder="Enter Your"
                                     >
                                        Submit
                                     </Button>
                                     </Row>
                                 </Col>
                               </Row>
                               
                             
                              
                               
                               
            
                            
                              </Form>
                          
                        </Card>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                           <Card>
                            <CardHeader>
                                <h5>
                                    Category List
                                </h5>
                            </CardHeader>
                            <CategoryList/>
                           </Card>
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
                </CardBody>
              </Card>
         
         
         

        
        </Container>
      </div>
     </React.Fragment>
   
  )
}

export default index