import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
    Col,
    Container, Nav, NavItem, NavLink, Row, Spinner, TabContent, TabPane
  } from "reactstrap";

//  const post = {
//     "status": "true",
//     "message": "Kyc details",
//     "data": {
//         "user": {
//             "id": 17,
//             "first_name": "email",
//             "last_name": "test",
//             "phone": "7557598883",
//             "role_id": 1,
//             "blocked": 0,
//             "is_active": 1,
//             "email": "itsd1@3ree6ix.com",
//             "email_verified_at": null,
//             "created_by": "self",
//             "updated_by": "self",
//             "created_at": "2023-10-02T20:20:06.000000Z",
//             "updated_at": "2023-10-02T20:20:06.000000Z",
//             "kyc": [
//                 {
//                     "id": 1,
//                     "user_id": 17,
//                     "type": "business",
//                     "name": "applicant_name56",
//                     "mobile": "7896548965056",
//                     "email": "mail@company.com45",
//                     "passport_photo": "path/to/photo/",
//                     "whatsapp": "7854865466",
//                     "dob": "2023-10-08",
//                     "height": null,
//                     "weight": null,
//                     "gender": "male",
//                     "aadhar_card": "785452136579",
//                     "profession": null,
//                     "pan_card": "SDLFJ345LS",
//                     "father_name": "applicant_father_name",
//                     "mother_name": "applicant_mother_name",
//                     "spouse_name": null,
//                     "company_id": 1,
//                     "created_at": "2023-10-08T14:48:03.000000Z",
//                     "updated_at": "2023-10-08T15:26:00.000000Z",
//                     "company": {
//                         "id": 1,
//                         "organization_name": "test company",
//                         "brand_name": "test",
//                         "logo": "path/to/logo",
//                         "about_your_company": "something",
//                         "mobile": "5895445658",
//                         "whatsapp": "4589654896",
//                         "desk": "5465898745",
//                         "email": "company@email.com",
//                         "business_type": "type of bussiness",
//                         "registration_date": "2023-10-08",
//                         "registration_place": "place of registration",
//                         "gross_annual_income": "7867.45",
//                         "latest_worth_rupees": "987676.89",
//                         "created_at": "2023-10-08T14:59:18.000000Z",
//                         "updated_at": "2023-10-08T14:59:18.000000Z",
//                         "bank_account": [],
//                         "address": [
//                             {
//                                 "id": 3,
//                                 "type": "default",
//                                 "address": "h34,gurugram",
//                                 "city": "gurugram",
//                                 "district": "gurugram",
//                                 "state": "haryana",
//                                 "pincode": 458965,
//                                 "country": "india",
//                                 "addressable_id": 1,
//                                 "addressable_type": "company",
//                                 "created_at": "2023-10-08T15:38:15.000000Z",
//                                 "updated_at": "2023-10-08T15:38:15.000000Z"
//                             }
//                         ],
//                         "documents": [],
//                         "socials": []
//                     },
//                     "address": [
//                         {
//                             "id": 1,
//                             "type": "permanent",
//                             "address": "h34,gurugram",
//                             "city": "gurugram",
//                             "district": "gurugram",
//                             "state": "haryana",
//                             "pincode": 458965,
//                             "country": "india",
//                             "addressable_id": 1,
//                             "addressable_type": "kyc",
//                             "created_at": "2023-10-08T15:30:21.000000Z",
//                             "updated_at": "2023-10-08T15:30:21.000000Z"
//                         },
//                         {
//                             "id": 2,
//                             "type": "temprory",
//                             "address": "h34,gurugram",
//                             "city": "gurugram",
//                             "district": "gurugram",
//                             "state": "haryana",
//                             "pincode": 458965,
//                             "country": "india",
//                             "addressable_id": 1,
//                             "addressable_type": "kyc",
//                             "created_at": "2023-10-08T15:30:50.000000Z",
//                             "updated_at": "2023-10-08T15:30:50.000000Z"
//                         }
//                     ],
//                     "documents": [],
//                     "socials": []
//                 },
//                 {
//                     "id": 2,
//                     "user_id": 17,
//                     "type": "individual",
//                     "name": "applicant_name12",
//                     "mobile": "7896548965102",
//                     "email": "mail@company.com",
//                     "passport_photo": "path/to/photo/",
//                     "whatsapp": "7854865466",
//                     "dob": "2023-10-08",
//                     "height": null,
//                     "weight": null,
//                     "gender": "male",
//                     "aadhar_card": "785452136579",
//                     "profession": null,
//                     "pan_card": "SDLFJ345LS",
//                     "father_name": "applicant_father_name",
//                     "mother_name": "applicant_mother_name",
//                     "spouse_name": null,
//                     "company_id": null,
//                     "created_at": "2023-10-08T14:51:20.000000Z",
//                     "updated_at": "2023-10-08T15:26:33.000000Z",
//                     "company": null,
//                     "address": [],
//                     "documents": [],
//                     "socials": []
//                 }
//             ]
//         }
//     }
// }

function NavCard(props) {
    // const [api, setApi] = useState(props.data || apikey)
    const [tab, setTab] = useState('individual')
    const [api, setPosts] = useState(null)
    const data = null
    useEffect(() => {
        kycApi()
      
        // setTab(api.data.user.kyc[0].id)
        
      }, [])
     
      async function kycApi(){
        let config = {
          method: 'get',
          // maxBodyLength: Infinity,
          url: 'https://fittestwarrior.com/api/kyc',
          headers: { 
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg', 
            // 'Cookie': 'XSRF-TOKEN=eyJpdiI6InlVUm9jTHIwajNML2gwcXRYZWhvNnc9PSIsInZhbHVlIjoiWDdreENzd2N0amVpM2tnWXZQWjFURjFVSWMyL2xKNTg0S1NqWE9VWWN1NmVlNlp1VytQeWJxTUtnNHBwMmhCU0JlQ2xaditYRTdSWkx1NmoyZmMzRUhWTHM1S3l1RWd5TENWVnVCcmlEaGV2eUk5bTMxUkZXeHUrS1BoaDgrYloiLCJtYWMiOiJiMTgxOTk1OGNjMjI3MTlmODUzYTRlZmM2NzNhM2VjZGRjNzE5MzljNjI1YmM2MzUzZmYxNTRjMWU1MmYyNjI1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IitaMFAyTVI5WENoUHlSaHlhTVcydHc9PSIsInZhbHVlIjoiZElzaHZKalhNS1FiK1JZalQxbmxxTGhabXBKUWhHTFNxSGFZVTREd1N1ZEZsSUd3bjhxRnBUZkhuL3BxSDBCNW8rMmFBYTZ1bGpjNjdMbFpYTXN2Y09mcXBqakhZTjRuTWZQalo5dUNaQ1VSdER3QnpaU2ZDRGRYRlBjTmU5S2giLCJtYWMiOiIxNmIzMzI4YWM3ZDkyMDM1NGQ2NTcxZmViNmM0NDIxNzA5MzkyOWFiODBjYTU2ODRlZDgwYzk2NDNmODBhYmIxIiwidGFnIjoiIn0%3D', 
            'Accept': 'Application/Json'
          },
          data : data
        };
        
       await axios.request(config)
        .then((response) => {
          setPosts(response.data);
          
          
        })
        .catch((error) => {
          console.log(error);
        });
        
      }

      console.log(api)
    
    // const [index, setindex] = useState( props.index)
    // console.log(props.index)
    // console.log(props.data)
    var tabl = item =>   (<><tr key={item.type}>
        <td style={{ width: "30%" }}>
            <p className="mb-0">Full Name :</p>
        </td>
        <td style={{ width: "30%" }}>
            <p className="mb-0">{item.name}</p>
        </td>

    </tr><tr>

            <td style={{ width: "25%" }}>
                <h5 className="mb-0">E-mail :</h5>
            </td>
            <td style={{ width: "25%" }}>
                <h5 className="mb-0">{item.email}</h5>
            </td>
        </tr><tr>

            <td style={{ width: "25%" }}>
                <h5 className="mb-0">Type :</h5>
            </td>
            <td style={{ width: "25%" }}>
                <h5 className="mb-0">{item.type}</h5>
            </td>
        </tr><tr>
            <td style={{ width: "25%" }}>
                <h5 className="mb-0">gender :</h5>
            </td>
            <td style={{ width: "25%" }}>
                <h5 className="mb-0">{item.gender}</h5>
            </td>
        </tr>
        <tr>

            <td style={{ width: "25%" }}>
                <h5 className="mb-0">age :</h5>
            </td>
            <td style={{ width: "25%" }}>
                <h5 className="mb-0">{item.age}</h5>
            
            </td>
        </tr></>)
   
  return (api? 
    <>
    
    <Card
    className=""
   
  >
    <CardHeader className="px-2" >
      <Row xl={12} className=' d-flex justify-between'>
        <span className="p-1">{api.message}</span>
        <div style={{fontSize:'0.8vw'}} className="text-end ">       
        <Nav tabs  className=""  >
      {api.data.user.kyc.map((key)=><>
        <NavItem key={key} className="m-0 ">
        <NavLink 
            //  ref={tabActive}
              className='m-xxl-0 p-1 '
              onClick={function noRefCheck(){
                setTab(key.type)
              }}
              >
            {key.type}
            </NavLink>
            </NavItem>
          
            </>)}
    </Nav>
    </div>
  </Row>
    {/* <Col className='text-end'>{props.icon}</Col> */}
     </CardHeader>
    
    <CardBody>
    <TabContent activeTab={tab}>
        <Row><p>Hi I'm Cynthia Price,has been the industry's standard dummy text To an
English person, it will seem like simplified English, as a skeptical
Cambridge.</p></Row>
        {
            api.data.user.kyc.map((e)=><>
            <TabPane key={e.type} tabId={e.type}>
            <Row>
            <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
               
                {

     (api.data.user.kyc || []).map((item, index) => (
           item.type === tab ? tabl(item): ''         
         ))
                
                 
                }
              </tbody>
            </table>
          </div>
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
    </> : <div className='d-grid place-item-center'> 
    <Spinner
    color="primary"
    style={{
      height: '3rem',
      width: '3rem'
    }}
    
 >
    Loading...
  </Spinner>
    </div>
  )
}

export default NavCard