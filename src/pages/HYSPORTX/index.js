import React, { useEffect, useMemo, useState } from 'react';
// import Breadcrumb from 'components/Common/Breadcrumb'
import Breadcrumb from '../../components/Common/Breadcrumb'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Row, Spinner, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import Select from "react-select";
import { Await, Link, Route, redirect, useNavigate } from 'react-router-dom';
import TableContainer from 'components/Common/TableContainer';



function index() {


     const navigate = useNavigate();
     const [loading, setLoading] = useState(false)
    const [activeTabVartical, setoggleTabVertical] = useState(1)
    const [passedStepsVertical, setPassedStepsVertical] = useState([1])
    const [modal, setmodal] = useState(false);
    const [modal1, setmodal1] = useState(false);
    const [modal2, setmodal2] = useState(false);
    const [modal3, setmodal3] = useState(false);
    const [modal4, setmodal4] = useState(false);
    const [modal5, setmodal5] = useState(false);
    const [modal6, setmodal6] = useState(false);
    const [selectedMulti, setselectedMulti] = useState(null);
    const [activeTab, setactiveTab] = useState(1);
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const toggleVertical = tab => {
        if (verticalActiveTab !== tab) {
          setverticalActiveTab(tab);
        }
      };


      function toggleTabVertical(tab) {
        if (activeTabVartical !== tab) {
          var modifiedSteps = [...passedStepsVertical, tab]
    
          if (tab >= 1 && tab <= 4) {
            setoggleTabVertical(tab)
            setPassedStepsVertical(modifiedSteps)
          }
        }
      }
  useEffect(() => {
    loadings()
  
    
  }, [])
  
 function loadings(){
    // if( localStorage.getItem('_token') != 'null'){
    
    //   if( localStorage.getItem('_token') == '11111'){
    //     window.location.href ="https://hysprtsx.com"
    //     setLoading(false)
    //   }else{
    //     setLoading(false)
    //     window.location.href ="https://fittestwarrior.com/front/#/login";  
    //   }
    // }
    // if(localStorage.getItem('_token') == 'null'){
    //   window.location.href ="https://fittestwarrior.com/front/#/login";

    // }
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
 const modality = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" }
      ]
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" }
      ]
    }
  ];
 const equipment = [
    {
      label: "Picnic",
      options: [
        { label: "Barbell", value: "Barbell" },
        { label: "Weight palate", value: "Weight palate" },
        { label: "BODY WEIGHT", value: "BODY WEIGHT" }
      ]
    },
]


const columns = useMemo(
  () => [
      {
          Header: 'ID',
          accessor: 'id',
      },
      {
          Header: ' Name',
          accessor: 'name',
      },
      {
          Header: 'Code',
          accessor: 'code'
      },
      {
          Header: 'Link',
          accessor: 'link'
      },
      {
          Header: 'Description',
          accessor: 'description'
      },
      {
          Header: 'Action',
          accessor: 'action'
      },
      
  ],
  []
);

  const [selectedGroup, setselectedGroup] = useState(null)

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }
  const optionGroup = [
    {
      // label: "Picnic",
      options: [
        { label: "Distance", value: "Distance" },
        { label: "Time", value: "Time" },
        { label: "Lift", value: "Lift" },
        { label: "Sets", value: "Sets" },
        { label: "Reps", value: "Reps" },
      ],
    }
  ]

const data = [
  {  id:'1',
      name: "Jennifer Chang",
      code: "Regional Director",
      link: 28,
      Description: "Singapore hfhfhfhhfhfh",
      action: "2010/11/14"
  },
  {  id:'1',
      name: "Jennifer Chang",
      code: "Regional Director",
      link: 28,
      Description: "Singapore hfhfhfhhfhfh",
      action: "2010/11/14"
  },
  {  id:'1',
      name: "Jennifer Chang",
      code: "Regional Director",
      link: 28,
      Description: "Singapore hfhfhfhhfhfh",
      action: "2010/11/14"
  },


];


 
 const performncetag = [
    {
      label: "Picnic",
      options: [
        { label: "Lift", value: "Lift" },
        { label: "Time", value: "Time" },
        { label: "Distance", value: "Distance" }
      ]
    },
    // {
    //   label: "Camping",
    //   options: [
    //     { label: "Tent", value: "Tent" },
    //     { label: "Flashlight", value: "Flashlight" },
    //     { label: "Toilet Paper", value: "Toilet Paper" }
    //   ]
    // }
  ];
 const level = [
    {
      label: "Easy Level",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" }
      ]
    },
    {
      label: "Normal Level",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" }
      ]
    },
    {
      label: "Difficulty Level",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" }
        
      ]
    }
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />

          {loading ? (
            <>
              <Spinner color="success"></Spinner>
              <Spinner color="success"></Spinner>
            </>
          ) : (
            <>
              <Row>
                {/* <Card>
          <CardBody>
            <CardTitle className="h4 mb-4">
              <h4>
              HYSPORTX CREATE
              </h4>
              </CardTitle> */}

                {/* <Row>
      <Col md="4">
        <Nav pills className="flex-column">
         
         
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classNames({
                "mb-2  focus-ring-primary btn-light btn-outline-primary": true,
              //   active: verticalActiveTab === "2",
              })}
              onClick={() => {
                toggleVertical("1");
              }}
            >
              <div className='d-flex align-items-center align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                 
              <Button
              //  className='btn-rounded btn-light btn-outline-primary'
               className={classNames({
                  " btn-sm focus-ring-primary m-0 px-2 font-size-16  btn-rounded  focus-ring-primary btn-light btn-outline-primary": true,
                  active: verticalActiveTab === "1",
                })} >
               1
              </Button>
                  <div className='font-size-10'>CREATE HYSPORTX EXERCISE</div>
                </div>
                <div className='font-size-20 font-weight-900'>+</div>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classNames({
                "mb-2": true,
              //   active: verticalActiveTab === "3",
              })}
              onClick={() => {
                toggleVertical("2");
              }}
            >
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                  
              <Button
              // className='btn-rounded btn-light btn-outline-primary'
              className={classNames({
                  " btn-rounded  focus-ring-primary btn-light btn-outline-primary": true,
                  active: verticalActiveTab === "2",
                })}  >
               2
              </Button>
                  <div className='font-size-10'>CREATE HYSPORTX CONDITIONS</div>
                </div>
                <div className='font-size-20 font-weight-900'>+</div>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classNames({
                 ' mb-2': true
              //   active: verticalActiveTab === "4",
              })}
              onClick={() => {
                toggleVertical("3");
              }}
            >
              <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                  
                      <Button
                      //  className='btn-rounded btn-light btn-outline-primary'
                      className={classNames({
                          " btn-rounded  focus-ring-primary btn-light btn-outline-primary": true,
                          active: verticalActiveTab === "3",
                        })} >
                       3
                      </Button>
                  <div className='font-size-10'>CREATE PRESET HYSPORTX ACTIVITIES</div>
                </div>
                <div className='font-size-20 font-weight-900'>+</div>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classNames({
                  ' mb-2': true
              //   active: verticalActiveTab === "5",
              })}
              onClick={() => {
                toggleVertical("4");
              }}
            >
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                  
                      <Button
                      //  className='btn-rounded btn-light btn-outline-primary'
                       className={classNames({
                          "  btn-rounded  focus-ring-primary btn-light btn-outline-primary": true,
                          active: verticalActiveTab === "4",
                        })}   >
                       4
                      </Button>
                  <div className='font-size-10 text-bold'>Create HYSPORTX EVENT</div>

                </div>
                <div className='font-size-20 font-weight-900'>+</div>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className='mb-2'
              // className={classNames({
              //   active: verticalActiveTab === "6",
              // })}
              onClick={() => {
                toggleVertical("6");
              }}
              >
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                  <div
                  className={classNames({
                      ' mb-2': true
                      // active: verticalActiveTab === "6",
                    })} >
              <Button
              // className='btn-rounded btn-light btn-outline-primary'
              className={classNames({
                  " btn-rounded  focus-ring-primary btn-light btn-outline-primary": true,
                  active: verticalActiveTab === "5",
                })}    >
               5
              </Button>
              </div>
                  
                <div className='font-size-10'>Assign HYSPORTX EVENT</div>
                </div>
                <div className='font-size-20 font-weight-900'>+</div>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classNames({
                  'mb-2' : true
              //   active: verticalActiveTab === "7",
              })}
              onClick={() => {
                toggleVertical("7");
              }}
            >
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
              <Button
              // className='btn-rounded active focus-ring-primary btn-light btn-outline-primary'
              className={classNames({
                  " btn-rounded  focus-ring-primary btn-light btn-outline-primary": true,
                  active: verticalActiveTab === "6",
                })}   >
               6
              </Button>
                 
                  <div className='font-size-10'>SHARE & CONNECTIONS</div>
                </div>
                <div className='font-size-20 font-weight-900'>+</div>
              </div>
            </NavLink>
          </NavItem>
         
        </Nav>
      </Col>
      <Col md="7">
        <TabContent
          activeTab={verticalActiveTab}
          className="text-muted mt-4 mt-md-0"
        >
          <TabPane tabId="1">
          <Card>
          <CardBody>
            
               <Form>
                 <Row className="mb-4">
                   <Label
                     htmlFor="horizontal-firstname-Input"
                     className="col-sm-4 col-form-label"
                   >
                     HSX Exercise Name :
                   </Label>
                   <Col sm={8}>
                      <Row className='col-sm-12'>

                     <Input
                       type="text"
                       className="form-control px-0 "
                       id="horizontal-firstname-Input"
                       placeholder="Enter Your"
                       />
                       </Row>
                   </Col>
                 </Row>
                 <Row className="mb-4">
                   <Label
                     htmlFor="horizontal-email-Input"
                     className="col-sm-4 col-form-label"
                   >
                     Modality :
                   </Label>
                   <Col sm={8}>
                      <Row className='input-group'>

                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                          handleMulti();
                      }}
                      options={modality}
                      className="select2-selection col-sm-10 p-0"
                      />
                     <button  onClick={() => {setmodal(!modal);}} className="btn btn-primary col-sm-2  m-0 px-1 font-size-12" type="button" id="inputGroupFileAddon03">+ ADD</button>
                      </Row>
                   </Col>
                 </Row>
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                      Performance Tag :
                    </Label>
                    <Col sm={8}>
                      <Row className='input-group'>

                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                          handleMulti();
                      }}
                      options={performncetag}
                      className="select2-selection col-sm-10 p-0"
                      />
                     <button className="btn btn-primary col-sm-2  m-0 px-1 font-size-12" onClick={() => {setmodal1(!modal1);}} type="button" id="inputGroupFileAddon03">+ ADD</button>
                      </Row>
                    </Col>
                  </Row>
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                      Difficulty Level :
                    </Label>
                    <Col sm={8}>
                      <Row className='input-group'>

                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                          handleMulti();
                      }}
                      options={level}
                      className="select2-selection col-sm-10 p-0"
                      />
                     <button onClick={() => {setmodal2(!modal2);}} className="btn btn-primary col-sm-2  m-0 px-1 font-size-12" type="button" id="inputGroupFileAddon03">+ ADD</button>
                      </Row>
                    </Col>
                  </Row>
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                      Equipment :
                    </Label>
                    <Col sm={8}>
                      <Row className='input-group'>

                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                          handleMulti();
                      }}
                      options={equipment}
                      className="select2-selection col-sm-10 p-0"
                      />
                        <button onClick={() => {setmodal3(!modal3);}} className="btn btn-primary col-sm-2  m-0 px-1 font-size-12" type="button" id="inputGroupFileAddon03">+ ADD</button>
                      </Row>
                    </Col>
                  </Row>
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                      Muscle Used :
                    </Label>
                    <Col sm={8}>
                      <Row className='input-group'>

                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                          handleMulti();
                      }}
                      options={modality}
                      className="select2-selection m-0 p-0 col-sm-10"
                    />
                      <button onClick={() => {setmodal4(!modal4);}} className="btn btn-primary col-sm-2  m-0 px-1 font-size-12" type="button" id="inputGroupFileAddon03">+ ADD</button>
                      </Row>
                    </Col>
                  </Row>
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                    Benefits :
                    </Label>
                    <Col className='' sm={8}>
                      <Row className='input-group'>

                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                        handleMulti();
                      }}
                      options={modality}
                      className="select2-selection m-0 p-0 col-sm-10"
                    />
                          
                       
                     <button onClick={() => {setmodal5(!modal5);}} className="btn btn-primary col-sm-2  m-0 px-1 font-size-12" type="button" id="inputGroupFileAddon03">+ ADD</button>
                        
                      </Row>
                    </Col>
                  </Row>
                
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                      Exercise Descripon :
                    </Label>
                    <Col sm={8}>
                      <Row  className='col-sm-12'>
                      <textarea
                      rows={6}
                        type="password"
                        autoComplete="off"
                                    className="form-control"
                        id="horizontal-password-Input"
                      //   placeholder="Enter Your Password"
                      />
                      </Row>
                    </Col>
                  </Row>
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                    Image Upload/Link :
                    </Label>
                    <Col sm={8}>
                      <Row className='col-sm-12'>

                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                          handleMulti();
                      }}
                      options={modality}
                      className="select2-selection p-0"
                      />
                     
                    <Row className='my-2 p-0'>
                      <Col>
                      <Row className='text-center'>
                          <Col className='font-size-12 m-0 p-0'><h6>Upload Image </h6></Col>
                          <Col className='font-size-10'><Button className='font-size-10 m-0 p-0'>+ ADD MORE</Button></Col>
                      </Row>
                      </Col>
                      <Col>
                      <Row className='text-center'>
                          <Col><Button className='btn-soft-primary font-size-11 m-0 p-0'>
                              <div>+</div>
                              <span>ADD MORE</span>
                          </Button></Col>
                          <Col className='font-size-10'>Upload Image </Col>
                      </Row>
                      </Col>
                    </Row>

</Row>
                    </Col>
                  </Row>
                 <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-Input"
                      className="col-sm-4 col-form-label"
                    >
                      Video Link :
                    </Label>
                    <Col sm={8}>
                      <Row className='col-sm-12'>

                      <Input
                        type="password"
                        autoComplete="off"
                        className="form-control px-0"
                        id="horizontal-password-Input"
                        
                        />
                        </Row>
                    </Col>
                  </Row>

                  <Row className="justify-content-start">
                    <Col sm={8}>
                    

                      <div>
                        <Button
                          type="submit"
                          color="primary"
                          className="w-md"
                        >
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </TabPane>
          <TabPane tabId="2">
            <p>
              Food truck fixie locavore, accusamus mcsweeney&apos;s
              marfa nulla single-origin coffee squid. Exercitation
              +1 labore velit, blog sartorial PBR leggings next
              level wes anderson artisan four loko farm-to-table
              craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk.
            </p>
            <p className="mb-0">
              {" "}
              Qui photo booth letterpress, commodo enim craft beer
              mlkshk aliquip jean shorts ullamco ad vinyl cillum
              PBR. Homo nostrud organic, assumenda labore
              aesthetic magna 8-bit
            </p>
          </TabPane>
          <TabPane tabId="3">
            <p>
              Etsy mixtape wayfarers, ethical wes anderson tofu
              before they sold out mcsweeney&apos;s organic lomo retro
              fanny pack lo-fi farm-to-table readymade. Messenger
              bag gentrify pitchfork tattooed craft beer, iphone
              skateboard locavore carles etsy salvia banksy hoodie
              helvetica. DIY synth PBR banksy irony. Leggings
              gentrify squid 8-bit cred.
            </p>
            <p className="mb-0">
              DIY synth PBR banksy irony. Leggings gentrify squid
              8-bit cred pitchfork. Williamsburg banh mi whatever
              gluten-free.
            </p>
          </TabPane>

          <TabPane tabId="4">
            <p>
              Trust fund seitan letterpress, keytar raw denim
              keffiyeh etsy art party before they sold out master
              cleanse gluten-free squid scenester freegan cosby
              sweater. Fanny pack portland seitan DIY, art party
              locavore wolf cliche high life echo park Austin.
              Cred vinyl keffiyeh DIY salvia PBR, banh mi before
              they sold out farm-to-table.
            </p>
            <p className="mb-0">
              Fanny pack portland seitan DIY, art party locavore
              wolf cliche high life echo park Austin. Cred vinyl
              keffiyeh DIY salvia PBR, banh mi before they sold
              out farm-to-table.
            </p>
          </TabPane>
        </TabContent>
      </Col>
    </Row> */}

                {/* </CardBody>
</Card> */}
                <Modal
                  isOpen={modal}
                  autoFocus={true}
                  centered={true}
                  toggle={() => {
                    setmodal(!modal)
                  }}
                >
                  <div className="modal-content">
                    <ModalHeader
                      toggle={() => {
                        setmodal(!modal)
                      }}
                    >
                      ADD Modality
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="New Modality"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => {
                          setmodal(!modal)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setmodal(!modal)}
                      >
                        ADD
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                <Modal
                  isOpen={modal1}
                  autoFocus={true}
                  centered={true}
                  toggle={() => {
                    setmodal1(!modal1)
                  }}
                >
                  <div className="modal-content">
                    <ModalHeader
                      toggle={() => {
                        setmodal1(!modal1)
                      }}
                    >
                      ADD Proformance Tag
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="New Modality"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => {
                          setmodal1(!modal1)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setmodal1(!modal1)}
                      >
                        ADD
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                <Modal
                  isOpen={modal2}
                  autoFocus={true}
                  centered={true}
                  toggle={() => {
                    setmodal2(!modal2)
                  }}
                >
                  <div className="modal-content">
                    <ModalHeader
                      toggle={() => {
                        setmodal2(!modal2)
                      }}
                    >
                      ADD Difficulty Level
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="New Modality"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => {
                          setmodal2(!modal2)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setmodal2(!modal2)}
                      >
                        ADD
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                <Modal
                  isOpen={modal3}
                  autoFocus={true}
                  centered={true}
                  toggle={() => {
                    setmodal3(!modal3)
                  }}
                >
                  <div className="modal-content">
                    <ModalHeader
                      toggle={() => {
                        setmodal3(!modal3)
                      }}
                    >
                      ADD New Equipment
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="New Modality"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => {
                          setmodal3(!modal3)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setmodal3(!modal3)}
                      >
                        ADD
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                <Modal
                  isOpen={modal4}
                  autoFocus={true}
                  centered={true}
                  toggle={() => {
                    setmodal4(!modal4)
                  }}
                >
                  <div className="modal-content">
                    <ModalHeader
                      toggle={() => {
                        setmodal4(!modal4)
                      }}
                    >
                      New Muscle Used
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="New Modality"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => {
                          setmodal4(!modal4)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setmodal4(!modal4)}
                      >
                        ADD
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                <Modal
                  isOpen={modal5}
                  autoFocus={true}
                  centered={true}
                  toggle={() => {
                    setmodal5(!modal5)
                  }}
                >
                  <div className="modal-content">
                    <ModalHeader
                      toggle={() => {
                        setmodal5(!modal5)
                      }}
                    >
                      ADD Benifits
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="New Modality"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => {
                          setmodal5(!modal5)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => setmodal5(!modal5)}
                      >
                        ADD
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                <Modal
                  isOpen={modal6}
                  autoFocus={true}
                  centered={true}
                  toggle={() => {
                    setmodal6(!modal6)
                  }}
                >
                  <div className="modal-content">
                    <ModalHeader
                      toggle={() => {
                        setmodal6(!modal6)
                      }}
                    >
                      Manage Shortcut
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="Short Name"
                          />
                        </div>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="Term Name"
                          />
                        </div>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="Description"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter className="">
                      <Col className="text-center">
                        <Button
                          type="button"
                          className="col-sm-12 btn-soft-secondary"
                          color="secondary"
                          onClick={() => {
                            setmodal6(!modal6)
                          }}
                        >
                          Cancel
                        </Button>
                      </Col>
                      <Col className="text-center">
                        <Button
                          className="col-sm-12 btn-soft-info"
                          type="button"
                          color="primary"
                          onClick={() => setmodal6(!modal6)}
                        >
                          ADD
                        </Button>
                      </Col>
                    </ModalFooter>
                  </div>
                </Modal>
              </Row>
              <Row>
                <Col lg="12">
                  <Card>
                    <CardBody>
                      <CardTitle className="h4 mb-4">
                        <h4>HYSPORTX CREATE</h4>
                      </CardTitle>
                      <div className="vertical-wizard wizard clearfix vertical">
                        <div className="steps clearfix ">
                          <ul>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 1,
                              })}
                            >
                              <NavLink
                                className={classNames({
                                  active: activeTabVartical === 1,
                                })}
                                onClick={() => {
                                  toggleTabVertical(1)
                                }}
                              >
                                <span className="number">1.</span>
                                <span className="font-size-10">
                                  CREATE HYSPORTX EXERCISE
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 2,
                              })}
                            >
                              <NavLink
                                className={classNames({
                                  active: activeTabVartical === 2,
                                })}
                                onClick={() => {
                                  toggleTabVertical(2)
                                }}
                              >
                                <span className="number">2.</span>{" "}
                                <span className="font-size-10">
                                  CREATE HYSPORTX CONDITIONS
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 3,
                              })}
                            >
                              <NavLink
                                className={
                                  (classNames({
                                    active: activeTabVartical === 3,
                                  }),
                                  "done")
                                }
                                onClick={() => {
                                  toggleTabVertical(3)
                                }}
                              >
                                <span className="number">3.</span>
                                <span className="font-size-10">
                                  CREATE HYSPORTX ACTIVITIES
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 4,
                              })}
                            >
                              <NavLink
                                className={
                                  (classNames({
                                    active: activeTabVartical === 4,
                                  }),
                                  "done")
                                }
                                onClick={() => {
                                  toggleTabVertical(4)
                                }}
                              >
                                <span className="number">4.</span>
                                <span className="font-size-10">
                                  Create HYSPORTX EVENT
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 5,
                              })}
                            >
                              <NavLink
                                className={
                                  (classNames({
                                    active: activeTabVartical === 5,
                                  }),
                                  "done")
                                }
                                onClick={() => {
                                  toggleTabVertical(5)
                                }}
                              >
                                <span className="number">5.</span>
                                <span className="font-size-10">
                                  Assign HYSPORTX EVENT
                                </span>
                              </NavLink>
                            </NavItem>
                            <NavItem
                              className={classNames({
                                current: activeTabVartical === 6,
                              })}
                            >
                              <NavLink
                                className={
                                  (classNames({
                                    active: activeTabVartical === 6,
                                  }),
                                  "done")
                                }
                                onClick={() => {
                                  toggleTabVertical(6)
                                }}
                              >
                                <span className="number">6.</span>
                                <span className="font-size-10">
                                  SHARE & CONNECTIONS
                                </span>
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <div className="content clearfix">
                          <TabContent
                            activeTab={activeTabVartical}
                            className="body"
                          >
                            <TabPane tabId={1}>
                              <Card>
                                <CardBody>
                                  {/* <CardTitle className="mb-4">Horizontal form Layout</CardTitle> */}
                                  <Form>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-firstname-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        HSX Exercise Name :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="col-sm-12">
                                          <Input
                                            type="text"
                                            className="form-control px-0 "
                                            id="horizontal-firstname-Input"
                                            placeholder="Enter Your"
                                          />
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-email-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Modality :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="input-group">
                                          <Select
                                            value={selectedMulti}
                                            isMulti={true}
                                            onChange={() => {
                                              handleMulti()
                                            }}
                                            options={modality}
                                            className="select2-selection col-sm-10 p-0"
                                          />
                                          <button
                                            onClick={() => {
                                              setmodal(!modal)
                                            }}
                                            className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                                            type="button"
                                            id="inputGroupFileAddon03"
                                          >
                                            + ADD
                                          </button>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Performance Tag :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="input-group">
                                          <Select
                                            value={selectedMulti}
                                            isMulti={true}
                                            onChange={() => {
                                              handleMulti()
                                            }}
                                            options={performncetag}
                                            className="select2-selection col-sm-10 p-0"
                                          />
                                          <button
                                            className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                                            onClick={() => {
                                              setmodal1(!modal1)
                                            }}
                                            type="button"
                                            id="inputGroupFileAddon03"
                                          >
                                            + ADD
                                          </button>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Difficulty Level :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="input-group">
                                          <Select
                                            value={selectedMulti}
                                            isMulti={true}
                                            onChange={() => {
                                              handleMulti()
                                            }}
                                            options={level}
                                            className="select2-selection col-sm-10 p-0"
                                          />
                                          <button
                                            onClick={() => {
                                              setmodal2(!modal2)
                                            }}
                                            className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                                            type="button"
                                            id="inputGroupFileAddon03"
                                          >
                                            + ADD
                                          </button>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Equipment :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="input-group">
                                          <Select
                                            value={selectedMulti}
                                            isMulti={true}
                                            onChange={() => {
                                              handleMulti()
                                            }}
                                            options={equipment}
                                            className="select2-selection col-sm-10 p-0"
                                          />
                                          <button
                                            onClick={() => {
                                              setmodal3(!modal3)
                                            }}
                                            className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                                            type="button"
                                            id="inputGroupFileAddon03"
                                          >
                                            + ADD
                                          </button>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Muscle Used :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="input-group">
                                          <Select
                                            value={selectedMulti}
                                            isMulti={true}
                                            onChange={() => {
                                              handleMulti()
                                            }}
                                            options={modality}
                                            className="select2-selection m-0 p-0 col-sm-10"
                                          />
                                          <button
                                            onClick={() => {
                                              setmodal4(!modal4)
                                            }}
                                            className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                                            type="button"
                                            id="inputGroupFileAddon03"
                                          >
                                            + ADD
                                          </button>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Benefits :
                                      </Label>
                                      <Col className="" sm={8}>
                                        <Row className="input-group">
                                          {/* <Col className='m-0 p-0' sm={10}> */}
                                          <Select
                                            value={selectedMulti}
                                            isMulti={true}
                                            onChange={() => {
                                              handleMulti()
                                            }}
                                            options={modality}
                                            className="select2-selection m-0 p-0 col-sm-10"
                                          />

                                          {/* </Col> */}
                                          {/* <Col className='m-0 p-0 ' sm={2}> */}
                                          <button
                                            onClick={() => {
                                              setmodal5(!modal5)
                                            }}
                                            className="btn btn-primary col-sm-2  m-0 px-1 font-size-12"
                                            type="button"
                                            id="inputGroupFileAddon03"
                                          >
                                            + ADD
                                          </button>
                                          {/* </Col> */}
                                        </Row>
                                      </Col>
                                    </Row>

                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Exercise Descripon :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="col-sm-12">
                                          <textarea
                                            rows={6}
                                            type="password"
                                            autoComplete="off"
                                            className="form-control"
                                            id="horizontal-password-Input"
                                          />
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Image Upload/Link :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="col-sm-12">
                                          <Select
                                            value={selectedMulti}
                                            isMulti={true}
                                            onChange={() => {
                                              handleMulti()
                                            }}
                                            options={modality}
                                            className="select2-selection p-0"
                                          />

                                          <Row className="my-2 p-0">
                                            <Col>
                                              <Row className="text-center">
                                                <Col className="font-size-12 m-0 p-0">
                                                  <h6>Upload Image </h6>
                                                </Col>
                                                <Col className="font-size-10">
                                                  <Button className="font-size-10 m-0 p-0">
                                                    + ADD MORE
                                                  </Button>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col>
                                              <Row className="text-center">
                                                <Col>
                                                  <Button className="btn-soft-primary font-size-11 m-0 p-0">
                                                    <div>+</div>
                                                    <span>ADD MORE</span>
                                                  </Button>
                                                </Col>
                                                <Col className="font-size-10">
                                                  Upload Image{" "}
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <Row className="mb-4">
                                      <Label
                                        htmlFor="horizontal-password-Input"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Video Link :
                                      </Label>
                                      <Col sm={8}>
                                        <Row className="col-sm-12">
                                          <Input
                                            type="password"
                                            autoComplete="off"
                                            className="form-control px-0"
                                            id="horizontal-password-Input"
                                          />
                                        </Row>
                                      </Col>
                                    </Row>

                                    <Row className="justify-content-start">
                                      <Col sm={8}>
                                        <div>
                                          <Button
                                            type="submit"
                                            color="primary"
                                            className="w-md"
                                          >
                                            Submit
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Form>
                                </CardBody>
                              </Card>
                            </TabPane>

                            <TabPane tabId={2}>
                              <Card>
                                <CardTitle className="d-flex">
                                  <Col sm={6}>Hypersports Conditions</Col>
                                  <Col
                                    sm={6}
                                    onClick={() => setmodal6(!modal6)}
                                    className="text-end"
                                  >
                                    <Button color="secondary">+ Add New</Button>
                                  </Col>
                                </CardTitle>
                                <CardText>
                                  <TableContainer
                                    columns={columns}
                                    data={data}
                                    isGlobalFilter={true}
                                    isAddOptions={false}
                                    customPageSize={10}
                                    isPagination={true}
                                    tableClass="align-middle table-nowrap table-check table"
                                    theadClass="table-light"
                                    paginationDiv="col-12"
                                    pagination="justify-content-center pagination pagination-rounded"
                                  />
                                </CardText>
                              </Card>
                            </TabPane>

                            <TabPane tabId={3}>
                              <div>
                                <Form>
                                  <Row>
                                    <div>
                                      <Col lg="4">
                                        <FormGroup className="mb-3">
                                          <Label htmlFor="basicpill-namecard-input112">
                                            Create Activities
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-namecard-input112"
                                            placeholder="Activity Heading Name"
                                          />
                                        </FormGroup>
                                      </Col>
                                    </div>
                                  </Row>
                                  <Row>
                                    <Col lg="2">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-namecard-Condition"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-namecard-Condition"
                                          placeholder="Select Condition"
                                        />
                                      </FormGroup>
                                    </Col>

                                    <Col lg="1">
                                      <div className="mb-3">
                                        <Label></Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>

                                    <Col lg="1">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-namecard-Performance"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-namecard-Performance"
                                          placeholder=""
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="1">
                                      <div className="mb-3">
                                        <Label></Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <Col lg="1">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-expiration-input132"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-expiration-input132"
                                          placeholder="Reps"
                                        />
                                      </FormGroup>
                                    </Col>

                                    <Col lg="2">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-expiration-input132"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-expiration-input132"
                                          placeholder="Exercise Select
"
                                        />
                                      </FormGroup>
                                    </Col>

                                    <Col lg="1">
                                      <div className="mb-3">
                                        <Label></Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>

                                    <Col lg="1">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-namecard-Performance"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-namecard-Performance"
                                          placeholder=""
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="1">
                                      <div className="mb-3">
                                        <Label></Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>

                                    <Col lg="3">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-expiration-input132"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-expiration-input132"
                                          placeholder="Comments Description"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="1">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-expiration-input132"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-expiration-input132"
                                          placeholder="Reps"
                                        />
                                      </FormGroup>
                                    </Col>

                                    <Col lg="2">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-expiration-input132"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-expiration-input132"
                                          placeholder="Exercise Select
"
                                        />
                                      </FormGroup>
                                    </Col>

                                    <Col lg="1">
                                      <div className="mb-3">
                                        <Label></Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>

                                    <Col lg="1">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-namecard-Performance"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-namecard-Performance"
                                          placeholder=""
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="1">
                                      <div className="mb-3">
                                        <Label></Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>

                                    <Col lg="3">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-expiration-input132"></Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-expiration-input132"
                                          placeholder="Comments Description"
                                        />
                                      </FormGroup>
                                    </Col>

                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label htmlFor="basicpill-expiration-input132">
                                          Overall Description
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="basicpill-expiration-input132"
                                          placeholder="Overall Description"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="2">
                                      <div className="mb-3">
                                        <Label>Competition Level </Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg="2">
                                      <div className="mb-3">
                                        <Label>Community For </Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg="2">
                                      <div className="mb-3">
                                        <Label>Gender</Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg="2">
                                      <div className="mb-3">
                                        <Label>Age Group</Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg="2">
                                      <div className="mb-3">
                                        <Label>Activity Target</Label>
                                        <Select
                                          value={selectedGroup}
                                          onChange={() => {
                                            handleSelectGroup()
                                          }}
                                          options={optionGroup}
                                          className="select2-selection"
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                </Form>
                              </div>
                            </TabPane>

                            <TabPane tabId={4}>
                              <div className="row justify-content-center">
                                <Col lg="6">
                                  <div className="text-center">
                                    <div className="mb-4">
                                      <i className="mdi mdi-check-circle-outline text-success display-4" />
                                    </div>
                                    <div>
                                      <h5>Confirm Detail</h5>
                                      <p className="text-muted">
                                        If several languages coalesce, the
                                        grammar of the resulting
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                              </div>
                            </TabPane>
                          </TabContent>
                        </div>
                        {/* <div className="actions clearfix">
                          <ul>
                            <li
                              className={activeTabVartical === 1
                                ? "previous disabled"
                                : "previous"}
                            >
                              <Link
                                to="#"
                                onClick={() => {
                                  toggleTabVertical(activeTabVartical - 1);
                                } }
                              >
                                Previous
                              </Link>
                            </li>
                            <li
                              className={activeTabVartical === 4 ? "next disabled" : "next"}
                            >
                              <Link
                                to="#"
                                onClick={() => {
                                  toggleTabVertical(activeTabVartical + 1);
                                } }
                              >
                                Next
                              </Link>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default index