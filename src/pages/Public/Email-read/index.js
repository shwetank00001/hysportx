import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner, Toast, ToastBody, ToastHeader } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
// import Table from './TableCard';
// import TableCard from './TableCard';
// import logo from "../../../assets/images/logo.svg";
import logo from "../../../assets/images/logo.svg";
import axios from 'axios';
import { get, post } from 'helpers/api_helper';
import { config } from '@fullcalendar/core/internal';
// import ViewData from './ViewData';
import { data } from 'autoprefixer';
import {  FormGroup } from 'reactstrap';


import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



// import React from "react";
import { Link } from "react-router-dom";
// import { Container, Row, Col, Card, CardBody } from "reactstrap";

//Import Image
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
// import avatar2 from "../../assets/images/users/avatar-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img4 from "../../../assets/images/small/img-4.jpg";

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email Sidebar
import EmailSideBar from "../../Email1/email-sidebar";



function index() {
  const [modal_standard, setmodal_standard] = useState(false);
  const [modal_standard1, setmodal_standard1] = useState(false);
  const [View, setView] = useState()
  const [Viewd, setViewd] = useState()
  const [Edit, setEdit] = useState()
  const [EditData, setEditData] = useState({})
  const [EditDataSucc, setEditDataSucc] = useState(null)
  const [modal_standard2, setmodal_standard2] = useState(false);
  const [formData, setFormData] = useState({
    id:Edit,
    first_name: '',
    last_name: '',
    email:'',
    phone:''
  });
  // ..
     
  // const axios = require('axios');
// async function view(i){

//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: `https://fittestwarrior.com/api/user?user_id=${i}`,
//     headers: { 
//       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg'
//     }
//   };
  
//  await axios.request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }
// async function Ed(i){

//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: `https://fittestwarrior.com/api/user/update?user_id=${i}`,
//     headers: { 
//       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg'
//     }
//   };
//   // let config1 = {
//   //   method: 'get',
//   //   maxBodyLength: Infinity,
//   //   // url: `https://fittestwarrior.com/api/user/update?user_id=${i}`,
//   //   headers: { 
//   //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg'
//   //   }
//   // };
//   https://fittestwarrior.com/api/user/update
//  await axios.request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }
useEffect(() => {
  In()

 
}, [])


   async function In(){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg'
    
      }
    };
    let x=await get(`https://fittestwarrior.com/api/user?user_id=18`,config)
    
   console.log(x) 
  }
 
  
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
         
    }
  
    async function handleSubmit (event) {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
       
        headers: { 
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg'
        }
      };
      formData.id = Edit;
      console.log(formData)
      removeBodyCss()
      let x =  await post(`https://fittestwarrior.com/api/user/update?id=${formData.id}&phone=${formData.phone}&email=${formData.email}&first_name=${formData.first_name}&last_name=${formData.last_name}`, data, config) 
      setEditDataSucc(x)
      tog_standard2()
     console.log(x)
      event.preventDefault();
     
    }
//   async function kycApi(){

//     let config = {
//       method: 'get',
//       // maxBodyLength: Infinity,
//       url: 'https://fittestwarrior.com/api/kyc',
//       headers: { 
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg', 
//         // 'Cookie': 'XSRF-TOKEN=eyJpdiI6InlVUm9jTHIwajNML2gwcXRYZWhvNnc9PSIsInZhbHVlIjoiWDdreENzd2N0amVpM2tnWXZQWjFURjFVSWMyL2xKNTg0S1NqWE9VWWN1NmVlNlp1VytQeWJxTUtnNHBwMmhCU0JlQ2xaditYRTdSWkx1NmoyZmMzRUhWTHM1S3l1RWd5TENWVnVCcmlEaGV2eUk5bTMxUkZXeHUrS1BoaDgrYloiLCJtYWMiOiJiMTgxOTk1OGNjMjI3MTlmODUzYTRlZmM2NzNhM2VjZGRjNzE5MzljNjI1YmM2MzUzZmYxNTRjMWU1MmYyNjI1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IitaMFAyTVI5WENoUHlSaHlhTVcydHc9PSIsInZhbHVlIjoiZElzaHZKalhNS1FiK1JZalQxbmxxTGhabXBKUWhHTFNxSGFZVTREd1N1ZEZsSUd3bjhxRnBUZkhuL3BxSDBCNW8rMmFBYTZ1bGpjNjdMbFpYTXN2Y09mcXBqakhZTjRuTWZQalo5dUNaQ1VSdER3QnpaU2ZDRGRYRlBjTmU5S2giLCJtYWMiOiIxNmIzMzI4YWM3ZDkyMDM1NGQ2NTcxZmViNmM0NDIxNzA5MzkyOWFiODBjYTU2ODRlZDgwYzk2NDNmODBhYmIxIiwidGFnIjoiIn0%3D', 
//         'Accept': 'Application/Json'
//       },
//       // data : data
//     };
    
//    await axios.request(config)
//     .then((response) => {
//       // setPosts(response.data);
      
      
//     })
//     .catch((error) => {
//       console.log(error);
//     });
    
//   }
  
//   console.log(posts)

  function tog_standard2() {
    setmodal_standard2(!modal_standard2);
    removeBodyCss();
    
  }
  const tog_standard1= (row) => {
    
    setmodal_standard1(!modal_standard1);
    removeBodyCss();
    // console.log(row)

  }
  function tog_standard() {
    setmodal_standard1(!modal_standard1);
    removeBodyCss();

  }
//   const action =(row)=><>
   
//  <div className="d-flex gap-1">
//                     <Button
                   
//                      onClick= {()=>
//                       {setmodal_standard1(!modal_standard1)
//                       setView(row.id)
//                       //  view(row.id)
//                        In(row.id)
                      
//                     }
//                     }
//                 data-toggle="modal"
//                 data-target="#myModal"
//                  type="button" 
//                   className="btn py-0 btn-soft-primary waves-effect waves-light">  <i className="mdi mdi-eye-outline d-block  align-middle  "></i></Button>
                 
//                     <Button
                    
//                     onClick= {()=>
//                       {
//                         setmodal_standard2(!modal_standard2)
//                       setEdit(row.id)
                      
                        
                     
//                     }
//                     }
//                 data-toggle="modal"
//                 data-target="#myModal"
//                     type="button"
//                      className="btn py-1 btn-soft-success  waves-effect waves-light"><i className="mdi mdi-pencil d-block "></i></Button>
                  
//                     <Button
//                      onClick= {()=>
//                       {
//                         // setmodal_standard2(!modal_standard2)
//                       // setEdit(row.id)

//                         // console.log(row)
//                     }
//                     }
//                      type="button" 
//                      className="btn py-1 btn-soft-danger waves-effect waves-light"> <i className="mdi mdi-trash-can d-block "></i></Button>
//                   </div>
// </>
 
   function removeBodyCss() {
    document.body.classList.add("no_padding");
  }
  return ( 
            <>
    <React.Fragment>
    <div className="page-content">
      <Container fluid >
        {/* Render Breadcrumb */}
        <Breadcrumbs className=''
          title=" Emai"
          breadcrumbItem="Read Email"
          />
          <Row className=''>
          <Card>
          
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
           <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <EmailSideBar />

              <div className="email-rightbar mb-3">
                <Card>
                  <CardBody>
                    <div className="d-flex mb-4">
                      <img
                        className="d-flex me-3 rounded-circle avatar-sm"
                        src={avatar2}
                        alt="skote"
                      />
                      <div className="flex-grow-1">
                        <h5 className="font-size-14 mt-1">
                          Humberto D. Champion
                        </h5>
                        <small className="text-muted">support@domain.com</small>
                      </div>
                    </div>

                    <h4 className="mt-0 font-size-16">
                      This Week&apos;s Top Stories
                    </h4>

                    <p>Dear Lorem Ipsum,</p>
                    <p>
                      Praesent dui ex, dapibus eget mauris ut, finibus
                      vestibulum enim. Quisque arcu leo, facilisis in fringilla
                      id, luctus in tortor. Nunc vestibulum est quis orci varius
                      viverra. Curabitur dictum volutpat massa vulputate
                      molestie. In at felis ac velit maximus convallis.
                    </p>
                    <p>
                      Sed elementum turpis eu lorem interdum, sed porttitor eros
                      commodo. Nam eu venenatis tortor, id lacinia diam. Sed
                      aliquam in dui et porta. Sed bibendum orci non tincidunt
                      ultrices. Vivamus fringilla, mi lacinia dapibus
                      condimentum, ipsum urna lacinia lacus, vel tincidunt mi
                      nibh sit amet lorem.
                    </p>
                    <p>Sincerly,</p>
                    <hr />

                    <Row>
                      <Col xl="2" xs="6">
                        <Card>
                          <img
                            className="card-img-top img-fluid"
                            src={img3}
                            alt="skote"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="fw-medium">
                              Download
                            </Link>
                          </div>
                        </Card>
                      </Col>
                      <Col xl="2" xs="6">
                        <Card>
                          <img
                            className="card-img-top img-fluid"
                            src={img4}
                            alt="skote"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="fw-medium">
                              Download
                            </Link>
                          </div>
                        </Card>
                      </Col>
                    </Row>

                    <Button 
                      // to="#"
                      onClick={tog_standard2}
                      className="btn btn-secondary  mt-4 mx-2"
                      on
                    >
                      <i className="mdi mdi-reply "></i> Reply
                    </Button>
                    <Button
                      onClick={tog_standard1}
                      className="btn btn-secondary  mt-4"
                    >
                      <i className="mdi mdi-forward"></i> Forward
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
             

           </CardText>
           {/* <ViewData 
           isOpen={modal_standard1}
           id={View}
           
           /> */}
           
           <Modal
                      isOpen={modal_standard1}
                      toggle={() => {
                        setmodal_standard1(!modal_standard1);
                      }}
                    >
                     <div className="modal-content">
                  <ModalHeader
                    toggle={() => {
                     setmodal_standard1(!modal_standard1);
                    }}
                  >
                  Forward
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="mb-3">
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="To"
                        />
                      </div>

                      <div className="mb-3">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      type="button"
                      color="secondary"
                      onClick={() => {
                        setmodal_standard1(!modal_standard1);
                      }}
                    >
                      Close
                    </Button>
                    <Button type="button" color="primary" onClick={() => setmodal_standard1(!modal_standard1)}>
                      Send <i className="fab fa-telegram-plane ms-1"></i>
                    </Button>
                  </ModalFooter>
                </div>
           </Modal>  
           <Modal
                      isOpen={modal_standard2}
                      toggle={() => {
                        tog_standard2();
                      }}
                    >
                     <div className="modal-content">
                  <ModalHeader
                    toggle={() => {
                      setmodal_standard2(!modal_standard2);
                    }}
                  >
                    Reply
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="mb-3">
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="To"
                        />
                      </div>

                      <div className="mb-3">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      type="button"
                      color="secondary"
                      onClick={() => {
                        setmodal_standard2(!modal_standard2);
                      }}
                    >
                      Close
                    </Button>
                    <Button type="button" color="primary" onClick={() => setmodal_standard2(!modal_standard2)}>
                      Send <i className="fab fa-telegram-plane ms-1"></i>
                    </Button>
                  </ModalFooter>
                </div>
           </Modal>  
          

          </Card>


          </Row>
          </Container>
          </div>
          </React.Fragment>
            </>
  )
}

export default index