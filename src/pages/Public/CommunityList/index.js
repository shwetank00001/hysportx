import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Modal, Nav, NavItem, Row, Spinner, TabContent, TabPane, Toast, ToastBody, ToastHeader } from 'reactstrap'
import Breadcrumbs from "components/Common/Breadcrumb";
// import TableCard from '../U0serlist/TableCard';
import TableCard from '../Userlist/TableCard';

// import WelcomeComp from 'pages/Dashboard/WelcomeComp';
import WelcomeComp from '../Dashboard/WelcomeComp';
// import NavCard from '../Dashboard/NavCard';
// import Navcards from '../Dashboard/Navcards';
// import { post } from '../Dashboard/data';
import TableCom from './TableCom';
import ViewData from '../Userlist/ViewData';
import { NavLink } from 'react-router-dom';
import Represnt from './Represnt';
import BussinessCard from './BussinessCard';
import LeagalCard from './LeagalCard';
import { get } from 'helpers/api_helper';




function index() {
  const [modal_standard, setmodal_standard] = useState(false);
  const [modal_standard1, setmodal_standard1] = useState(false);
  const [modal_standard2, setmodal_standard2] = useState(false);
  const [tab, settab] = useState('Representor Detail')
  const [Edit, setEdit] = useState({})
  const [View, setView] = useState({
      "id": '',
      "first_username": " ",
      "last_username": " ",
      "phone": " ",
      "role_id":  null,
      "blocked": 0,
      "is_active": 1,
      "email": " ",
      "email_verified_at": null,
      "created_by": "self",
      "updated_by": "self",
      "created_at": "2023-10-09 T15:15:01.000000Z",
      "updated_at": "2023-10-09 T15:15:01.000000Z"
  })
  useEffect(() => {
   api()
  
   
  }, [])
  
 async function api (){
 let data = ''
  let config = {
    method: 'get',
    // maxBodyLength: Infinity,
    // url: 'https://fittestwarrior.com/api/kyc',
    headers: { 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg', 
      // 'Cookie': 'XSRF-TOKEN=eyJpdiI6InlVUm9jTHIwajNML2gwcXRYZWhvNnc9PSIsInZhbHVlIjoiWDdreENzd2N0amVpM2tnWXZQWjFURjFVSWMyL2xKNTg0S1NqWE9VWWN1NmVlNlp1VytQeWJxTUtnNHBwMmhCU0JlQ2xaditYRTdSWkx1NmoyZmMzRUhWTHM1S3l1RWd5TENWVnVCcmlEaGV2eUk5bTMxUkZXeHUrS1BoaDgrYloiLCJtYWMiOiJiMTgxOTk1OGNjMjI3MTlmODUzYTRlZmM2NzNhM2VjZGRjNzE5MzljNjI1YmM2MzUzZmYxNTRjMWU1MmYyNjI1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IitaMFAyTVI5WENoUHlSaHlhTVcydHc9PSIsInZhbHVlIjoiZElzaHZKalhNS1FiK1JZalQxbmxxTGhabXBKUWhHTFNxSGFZVTREd1N1ZEZsSUd3bjhxRnBUZkhuL3BxSDBCNW8rMmFBYTZ1bGpjNjdMbFpYTXN2Y09mcXBqakhZTjRuTWZQalo5dUNaQ1VSdER3QnpaU2ZDRGRYRlBjTmU5S2giLCJtYWMiOiIxNmIzMzI4YWM3ZDkyMDM1NGQ2NTcxZmViNmM0NDIxNzA5MzkyOWFiODBjYTU2ODRlZDgwYzk2NDNmODBhYmIxIiwidGFnIjoiIn0%3D', 
      'Accept': 'Appli cation/Json'
    },
    data : data
  };

  let x= await get('https://fittestwarrior.com/api/kyc',config)
 console.log(x)
 }

 let y ={
  "id": 17,
  "first_name": "farhan",
  "last_name": "ullah",
  "phone": "155553",
  "role_id": 27,
  "blocked": 0,
  "is_active": 0,
  "email": "mfu7379@gmail.co",
  "email_verified_at": null,
  "created_by": "self",
  "updated_by": "self",
  "created_at": "2023-10-02T20:20:06.000000Z",
  "updated_at": "2023-10-20T14:52:10.000000Z",
  "kyc": [
      {
          "id": 1,
          "user_id": 17,
          "type": "business",
          "name": "applicant_name",
          "mobile": "7896548965",
          "email": "mail@company.com",
          "passport_photo": "path/to/photo/",
          "whatsapp": "7854865466",
          "dob": "2023-10-08",
          "height": null,
          "weight": null,
          "gender": "male",
          "aadhar_card": "785452136579",
          "profession": null,
          "pan_card": "SDLFJ345LS",
          "father_name": "applicant_father_name",
          "mother_name": "applicant_mother_name",
          "spouse_name": null,
          "company_id": 1,
          "created_at": "2023-10-08T14:48:03.000000Z",
          "updated_at": "2023-10-08T15:26:00.000000Z",
          "company": {
              "id": 1,
              "organization_name": "test company",
              "brand_name": "test",
              "logo": "path/to/logo",
              "about_your_company": "something",
              "mobile": "5895445658",
              "whatsapp": "4589654896",
              "desk": "5465898745",
              "email": "company@email.com",
              "business_type": "type of bussiness",
              "registration_date": "2023-10-08",
              "registration_place": "place of registration",
              "gross_annual_income": "7867.45",
              "latest_worth_rupees": "987676.89",
              "created_at": "2023-10-08T14:59:18.000000Z",
              "updated_at": "2023-10-08T14:59:18.000000Z",
              "bank_account": [],
              "address": [
                  {
                      "id": 3,
                      "type": "default",
                      "address": "h34,gurugram",
                      "city": "gurugram",
                      "district": "gurugram",
                      "state": "haryana",
                      "pincode": 458965,
                      "country": "india",
                      "addressable_id": 1,
                      "addressable_type": "company",
                      "created_at": "2023-10-08T15:38:15.000000Z",
                      "updated_at": "2023-10-08T15:38:15.000000Z"
                  }
              ],
              "documents": [],
              "socials": []
          },
          "address": [
              {
                  "id": 1,
                  "type": "permanent",
                  "address": "h34,gurugram",
                  "city": "gurugram",
                  "district": "gurugram",
                  "state": "haryana",
                  "pincode": 458965,
                  "country": "india",
                  "addressable_id": 1,
                  "addressable_type": "kyc",
                  "created_at": "2023-10-08T15:30:21.000000Z",
                  "updated_at": "2023-10-08T15:30:21.000000Z"
              },
              {
                  "id": 2,
                  "type": "temprory",
                  "address": "h34,gurugram",
                  "city": "gurugram",
                  "district": "gurugram",
                  "state": "haryana",
                  "pincode": 458965,
                  "country": "india",
                  "addressable_id": 1,
                  "addressable_type": "kyc",
                  "created_at": "2023-10-08T15:30:50.000000Z",
                  "updated_at": "2023-10-08T15:30:50.000000Z"
              }
          ],
          "documents": [],
          "socials": []
      },
      {
          "id": 2,
          "user_id": 17,
          "type": "individual",
          "name": "applicant_name",
          "mobile": "7896548965",
          "email": "mail@company.com",
          "passport_photo": "path/to/photo/",
          "whatsapp": "7854865466",
          "dob": "2023-10-08",
          "height": null,
          "weight": null,
          "gender": "male",
          "aadhar_card": "785452136579",
          "profession": null,
          "pan_card": "SDLFJ345LS",
          "father_name": "applicant_father_name",
          "mother_name": "applicant_mother_name",
          "spouse_name": null,
          "company_id": null,
          "created_at": "2023-10-08T14:51:20.000000Z",
          "updated_at": "2023-10-08T15:26:33.000000Z",
          "company": null,
          "address": [],
          "documents": [],
          "socials": []
      }
  ]
}


const action =(row)=><>
<div className="d-flex gap-1">
                   <Button
                    onClick= {()=>
                     {
                      // console.log(row)
                     setmodal_standard1(!modal_standard1)
                     setView(row)
                    
                    //   In(row.id) 
                   }
                   }
               data-toggle="modal"
               data-target="#myModal"
                type="button" 
                 className="btn py-0 btn-soft-primary waves-effect waves-light">  <i className="mdi mdi-eye-outline d-block  align-middle  "></i></Button>
                   <Button
                   onClick= {()=>
                     {
                    
                       setmodal_standard2(!modal_standard2)
                     setEdit(row)
                   }
                   }
               data-toggle="modal"
               data-target="#myModal"
                   type="button"
                    className="btn py-1 btn-soft-success  waves-effect waves-light"><i className="mdi mdi-pencil d-block "></i></Button>
                   <Button
                    onClick= {()=>
                     {
                       // setmodal_standard2(!modal_standard2)
                     // setEdit(row.id)

                       // console.log(row)
                   }
                   }
                    type="button" 
                    className="btn py-1 btn-soft-danger waves-effect waves-light"> <i className="mdi mdi-trash-can d-block "></i></Button>
                 </div>
</>

    function tog_standard() {
        setmodal_standard(!modal_standard);
        removeBodyCss();
        
      }
    function tog_standard1() {
        setmodal_standard1(!modal_standard1);
        removeBodyCss();
      }


      function removeBodyCss() {
        document.body.classList.add("no_padding");
      }
      
      const tabButton =[
        {title:"Representor Detail", content : <Represnt/>, color:'primary'},
        {title:"Business Details" ,content : <BussinessCard/>, color :'danger'},
        {title:"Legal Detail", content :<LeagalCard/>, color: 'success'},
      ]
      const toggle = e => {
        if (tab !== e) {
          settab(e);
        }
      };

  return (
 
    <>
    <React.Fragment>
    <div className="page-content">
      <Container fluid >
        {/* Render Breadcrumb */}
        <Breadcrumbs className=''
          title="Users"
          breadcrumbItem="User List"
          />
          <Row>
            <Card color='danger d-flex justify-center py-5'>n</Card>
          </Row>
          <Row className='my-1'>
          

            <Col xl={4}>
                <Row>

                <WelcomeComp />
                </Row>
                <Row>
                    <Card className='text-center'><p>User Id :{y.id} manishkumarsangwan@gmail.com</p></Card>
                </Row>
                <Row>
                  <Card>
                    <div className='d-flex p-1 justify-evenly align-items-center'>
                      <p  style={{width:'40%'}}>Password : </p>
                      <h5 style={{color:'red'}}>Change Password</h5>
                      </div>
                    </Card>
                </Row>
                <Row>
                    <Card><p>User Id : manishkumarsangwan@gmail.com</p></Card>
                </Row>
                <Row>
                    <Card>
                      <CardHeader className=' card-soft-secondary waves-effect waves-light  color-white d-flex justify-content-between align-items-center  m-0 py-0 px-2'>
                        <Nav tabs>
                       {tabButton.map((i)=>
                       
                         <NavItem key={i}>
                          <NavLink  
                         onClick={function noRefCheck(){
                            var e =i.title
                            toggle(e)
                        //  setTab(1)
                          }}>
                           <Button color={i.color} className='m-0 p-1' style={{fontSize:'.8vw'}}>{i.title}</Button>
                            </NavLink>
                            </NavItem>
                            )}
                        </Nav>
                        <Button className=' m-0 py-0 px-1 btn-soft-primary  waves-effect waves-light' ><i className="mdi mdi-pencil text-primary d-block "></i></Button>
                        </CardHeader>
                       
                        <CardText>
                          <TabContent activeTab={tab} >
                            {tabButton.map((i)=>
                            
                          <TabPane key={i} tabId={i.title}>
                            <Row>
                              <Col sm="12">
                                {i.content}
                              </Col>
                            </Row>
                          </TabPane>
                          )}
                          </TabContent>
                        </CardText>
                    </Card>
                {/* <NavCard data ={post}  Heading={post.message} icon={<><Button /><Button /></>}/> */}

                </Row>
               
            </Col>
            <Col xl={8}>
          <Card>
           <CardHeader className='mx-0 mb-3 mt-0 p-0 '>
            <Row className='d-flex justify-between align-items-center'>
            <Col >
            <h6>User Lists</h6>
            </Col>
            <Col className=''>
              <Row className='d-flex flex-wrap justify-content-end'>
               
              {/* <div className=''> */}
             <Col xl={8} className='d-flex gap-2 '>
               <Button
                 onClick={() => {
                   tog_standard();
                  }}
                  data-toggle="modal"
                  data-target="#myModal"
                  color='primary'
                  className='primary'
                  >Add New User</Button>
               <div>

                <Button type='button'   
                id="liveToastBtn"  
                color='secondary' 
                
                ><i className='mdi mdi-refresh'></i></Button>
                  {/* model */}
                  <Modal
                      isOpen={modal_standard}
                      toggle={() => {
                        tog_standard();
                      }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title primary mt-0" id="myModalLabel">
                          Add New User
                        </h5>

                        <button
                          type="button"
                          onClick={() => {
                            setmodal_standard(false);
                          }}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <ViewData tog_standard={tog_standard}/>
                    </Modal> 
                </div>
                <Button color='success' title='d'><i className='mdi mdi-dots-vertical'></i></Button>
             </Col>
             {/* </div> */}
              </Row>
            </Col>
            </Row>
           </CardHeader>
           {/* <CardTitle className='my-2'>
            <Row>
                <Col xl={1}>
            <Input type='text' placeholder='Enter Search item'/>
                </Col>
                <Col>
                <Row xl={18}>

                <Col xl={3} >
            <Input type='text' placeholder='Enter Search item'/>
                </Col>
                <Col xl={2}>
            <Input type='text' placeholder='Enter Search item'/>
                </Col>
                <Col  xl={2}>
            <Input type='text' placeholder='Enter Search item'/>
                </Col>
                <Col xl={2}>
            <Input type='text' placeholder='Enter Search item'/>
                </Col>
                </Row>
                </Col>
                <Col xl={1}>
            <Input type='text' placeholder='Filter'/>
                </Col>

             </Row>
           </CardTitle> */}
           <CardText>
          <TableCom 
          //  className='mt-3'
           action= {action}
          
          />

           </CardText>
           {/* <ViewData 
           isOpen={modal_standard1}
           id={View}
           
           /> */}
        
        <Modal
                      isOpen={modal_standard1}
                      toggle={() => {
                        tog_standard1();
                      }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title primary mt-0" id="myModalLabel">
                          View User
                        </h5>

                        <button
                          type="button"
                          onClick={() => {
                            setmodal_standard1(false);
                          }}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                       
                       <Row className='mt-2 ' >
                        <Col xl={12} className="d-grid  gap-2  place-item-center">
                        <Row >
                         s
                       </Row>
                        <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                            {/* <select className="form-control"> */}
                             {View.id}
                             {/* </select> */}
                           </div>
                       </Row>
                        <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                            {/* <select className="form-control"> */}
                             {View.role_id}
                             {/* </select> */}
                           </div>
                       </Row>
                        <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                            {/* <select className="form-control"> */}
                             {View.first_username}
                             {View.last_username}
                             {/* </select> */}
                           </div>
                       </Row>
                        <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                            {/* <select className="form-control"> */}
                             {View.phone}
                             {/* {View.last_username} */}
                             {/* </select> */}
                           </div>
                       </Row>
                        <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                          
                             {View.email}
                             {/* {View.last_username} */}
                            
                           </div>
                       </Row>
                       {/* <Row> <h1>{View}</h1></Row> */}
                      
                      
                      
                    
                        </Col>
                       </Row>
                       
                     
                    
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          onClick={() => {
                            tog_standard1();
                          }}
                          className="btn btn-secondary "
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary "
                        >
                          Save changes
                        </button>
                      </div>
           </Modal>  
           <Modal
                      isOpen={modal_standard2}
                      toggle={() => {
                        tog_standard2();
                      }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title primary mt-0" id="myModalLabel">
                         Edit User
                        </h5>

                        <button
                          type="button"
                          onClick={() => {
                            setmodal_standard2(false);
                          }}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        gg
                      {/* <Container>
                        
                       <Form 
                      //  onSubmit={handleSubmit}
                       >
                         <FormGroup>
                           <Label for="firstname">First Name</Label>
                           <Input
                             type="text"
                             name="first_name"
                             id="first_name"
                             value={formData.first_name}
                             onChange={handleInputChange}
                           />
                         </FormGroup>
                         <FormGroup>
                           <Label for="lastname">Last Name</Label>
                           <Input
                             type="text"
                             name="last_name"
                             id="last_name"
                             value={formData.last_name}
                             onChange={handleInputChange}
                           />
                         </FormGroup>
                         <FormGroup>
                           <Label for="email">Email</Label>
                           <Input
                             type="email"
                             name="email"
                             id="email"
                             value={formData.email}
                             onChange={handleInputChange}
                           />
                         </FormGroup>
                         <FormGroup>
                           <Label for="phone">Mobile No</Label>
                           <Input
                             type="tel"
                             name="phone"
                             id="phone"
                             value={formData.phone}
                             onChange={handleInputChange}
                           />
                         </FormGroup>
      
                      <div className="modal-footer">
                        <button
                          type="button"
                          onClick={() => {
                            tog_standard2();
                          }}
                          className="btn btn-secondary "
                          data-dismiss="modal"
                          >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary "
                         onClick={handleSubmit}
                          
                          >
                          Save changes
                        </button>
                      </div>
                          </Form>
                        </Container> */}
                      </div>
           </Modal>  

          </Card>
          </Col>

          </Row>
          </Container>
          </div>
          </React.Fragment>
            </>
  
  )
}

export default index