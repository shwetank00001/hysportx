import React, { useMemo, useState } from 'react'
import { Button, Col, Input, Label, Modal, Row,  Spinner,  Table } from 'reactstrap'
import TableContainer from '../../../components/Common/TableContainer';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect } from 'react';


function TableCard({Action}) {
  const [dataApi, setDataApi] = useState( null
    // [
  //     {
  //     "id": 17,
  //     "first_username": "email",
  //     "last_username": "test",
  //     "phone": "7557598883",
  //     "role_id": 27,
  //     "blocked": 0,
  //     "is_active": 1,
  //     "email": "itsd1@3ree6ix.com",
  //     "email_verified_at": null,
  //     "created_by": "self",
  //     "updated_by": "self",
  //     "created_at": "2023-10-02T20:20:06.000000Z",
  //     "updated_at": "2023-10-02T20:20:06.000000Z"
  // },
  // {
  //     "id": 18,
  //     "first_username": "qwerty",
  //     "last_username": "qwert",
  //     "phone": "1234567890",
  //     "role_id": 27,
  //     "blocked": 0,
  //     "is_active": 1,
  //     "email": "test@test.com",
  //     "email_verified_at": null,
  //     "created_by": "self",
  //     "updated_by": "self",
  //     "created_at": "2023-10-09T15:15:01.000000Z",
  //     "updated_at": "2023-10-09T15:15:01.000000Z"
  // },
  // {
  //     "id": 19,
  //     "first_username": "qwerty",
  //     "last_username": "qwert",
  //     "phone": "1234567891",
  //     "role_id": 27,
  //     "blocked": 0,
  //     "is_active": 1,
  //     "email": "test@yopmail.com",
  //     "email_verified_at": null,
  //     "created_by": "self",
  //     "updated_by": "self",
  //     "created_at": "2023-10-09T15:16:37.000000Z",
  //     "updated_at": "2023-10-09T15:16:37.000000Z"
  //   }
  // ]
    )
    


    
    
    





  const activec =()=><>
  <Button style={{width:'', fontSize:'9px',fontWeight:'100' }} color='success' className='.btn-rounded .btn-soft* m-0 py-0  px-1'>Active</Button></>;
  const kyc =i =>{
   console.log(i)
    if(i == 'active') {
       activec
      
    }if(i == 'close'){
      <><Button style={{width:'', fontSize:'9px',fontWeight:'100' }} color='danger' className='.btn-rounded .btn-soft* m-0 py-0 px-1'>close</Button></>;

    }else{

      <><Button style={{width:'', fontSize:'9px',fontWeight:'100' }} color='primary' className='.btn-rounded .btn-soft* m-0 py-0 px-1'>New</Button></>;
    }
  } 
  

  const activeb = [
    // {title:'FWG', color:'primary'},
    // {title:'FWL', color:'secondary'},
    // {title:'SK', color:'success'},
    // {title:'FQ', color:'info'},
    // {title:'FWF', color:'warning'},
    // {title:'FWJ', color:'danger'},
  ]
  const active =()=> <>
    <div className="d-flex sm-flex-wrap gap-1">
      {activeb.map((i)=><>
        <Button
                color={i.color}
                      outline
                      style={{width:'30px', fontSize:'9px', margin:'0', padding:'0'}}>
                      {i.title}
        </Button>
        </>)}     
    </div></>
    // const actiontype =[
    //   {icon:'', color:'secondary'},
    //   {icon:'', color:'info'},
    //   {icon:'', color:'warning'},
    // ]
//  const action= data.map((i)=>
    
//     <Button
//      onClick={(id) => {
//     props.view()
//     console.log(data)
// }}
// key={i.id}
// data-toggle="modal"
// data-target="#myModal"
//  type="button" 
//   className="btn py-0 btn-soft-primary waves-effect waves-light">  <i className="mdi mdi-eye-outline d-block  align-middle  "></i></Button>
    
    
//     )
useEffect(() => {
  dataTable()

  // setDataApi(api.data.user.kyc[0].id)
  
}, [])

async function dataTable(){

  let data =''
  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://fittestwarrior.com/api/user',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg', 
    'Athorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg', 
    // ...data.getHeaders()
  },
  data : data
};

await axios.request(config)
.then((response) => {
  setDataApi(response.data.data);
  console.log(response.data.data)
})
.catch((error) => {
  console.log(error);
});


  }

const spinner =[
  {heigt: '.7rem', width :'.7rem'},
  {heigt: '1.25rem', width :'1.25rem'},
  {heigt: '2rem', width :'2rem'},
  // {heigt: '1.5rem', width :'1.5rem'},
  {heigt: '1.25rem', width :'1.25rem'},
  // {heigt: '1rem', width :'1rem'},
  {heigt: '.7rem', width :'.7rem'},
  // {heigt: '.2rem', width :'.2rem'}
];


const chkbx =()=> <><input type='checkbox'/></>


const columns = useMemo(
  () => [
      {
          Header: 'ID',
          accessor:  chkbx
      },
      {
          Header: 'User Name',
          accessor: "first_name" ,
      },
      {
          Header: 'User Role',
          accessor: 'role.name'
        },
      //   {
      //   Header: 'Role Category',
          
      //     accessor: 'Position'
      // },
      // {
      //     Header: 'Location',
      //     accessor: 'location'
      // },
      {
          Header: 'Email',
          accessor: 'email'
      },
      {
          Header: 'Mobile',
          accessor: 'phone'
      },
      {
          Header: 'Registerd On',
          accessor: 'created_at'
      },
      {
          Header: 'Active On',
          accessor:  active
      },
      {
          Header: 'KYC Status',
          accessor:  activec
      },
      {
          Header: 'Action',
          accessor:Action
      },
  ],
  []
);
// how ot

  
  

  return (dataApi ?
    <>
      <TableContainer
                    columns={columns}
                    data={dataApi}
                    // key={dataApi.id}
                    // handleUserClick={props.view}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    isAddUserList={false}
                    customPageSize={10}
                    isPagination={true}
                    tableClass="align-middle table-nowrap table-check table"
                    theadClass="table-light"
                    paginationDiv="col-5"
                    pagination="justify-content-center pagination pagination-rounded"
                />
                
    
    </> : <div style={{width:'100%'}} className='d-flex justify-content-center align-item-center my-5 gap-1'>
      
       
      {spinner.map((i)=>
      
       <Spinner
    color="primary"
    key={i}
    style={{
      height: i.heigt,
      width:   i.width
    }}
    
    >
    Loading...
  </Spinner>
    )}
  </div>
  )
}

export default TableCard