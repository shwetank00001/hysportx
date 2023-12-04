import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, CardText, CardTitle, Col, Container, Form, Input, Label, Modal, Row, Spinner, Toast, ToastBody, ToastHeader } from 'reactstrap'
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Table from './TableCard';
import TableCard from './TableCard';
import logo from "../../assets/images/logo.svg";
import axios from 'axios';
import { get, post } from 'helpers/api_helper';
import { config } from '@fullcalendar/core/internal';
import ViewData from './ViewData';
import { data } from 'autoprefixer';
import {  FormGroup } from 'reactstrap';





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
   async function In(i){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg'
      }
    };
    let x=await get(`https://fittestwarrior.com/api/user?user_id=${i}`,config)
    
    
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
    
    removeBodyCss();
    // console.log(row)

  }
  function tog_standard() {
    setmodal_standard(!modal_standard);
    removeBodyCss();

  }
  const action =(row)=><>
   
 <div className="d-flex gap-1">
                    <Button
                   
                     onClick= {()=>
                      {setmodal_standard1(!modal_standard1)
                      setView(row.id)
                      //  view(row.id)
                       In(row.id)
                      
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
                      setEdit(row.id)
                      
                        
                     
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
          title="Users"
          breadcrumbItem="User List"
          />
          <Row className=''>
          <Card>
           <CardHeader className='m-0 p-0 '>
            <Row className='d-flex justify-between align-items-center'>
            <Col >
            <h6>User Lists</h6>
            </Col>
            <Col className=''>
              <Row className='d-flex flex-wrap justify-content-end'>
               
              {/* <div className=''> */}
             <Col xl={6} className='d-flex gap-2 '>
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
             <TableCard 
                Action= {action}
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
                          
                       </Row>
                        <Row className="d-flex flex-wrap justify-center mb-2  align-item-center">
                           <div className="col-md-12">
                            <select className="form-control">
                             <option>Select User Role Category</option>
                             <option>Large select</option>
                             <option>Small select</option>
                             </select>
                           </div>
                       </Row>
                       <Row> <h1>{View}</h1></Row>
                      
                      
                      
                    
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
                      <Container>
                        
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
                        </Container>
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