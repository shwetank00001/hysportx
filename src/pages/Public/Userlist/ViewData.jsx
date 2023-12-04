import axios from 'axios';
import { get } from 'helpers/api_helper';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
function ViewData({tog_standard}) {
 const [role, setrole] = useState([])
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    role_id: '',
  });
useEffect(() => {
  roleApi()  
}, [])

async function roleApi (){
   let config = {
    //  method: 'get',
     maxBodyLength: Infinity,
     // url: 'https://fittestwarrior.com/api/role/available',
     headers: { 
       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg', 
       'Cookie': 'XSRF-TOKEN=eyJpdiI6IjZ2OFhWR0NJZFBHVkVzSUQvOExSV0E9PSIsInZhbHVlIjoieGhpRnNaTk9XaEhNQ010S0xxUVR1c3NUaGJnQXVzdG5KdWlueWdVL2tKMmNkSitBR3dqK09xVWM4VUg3ZFRZWjZ4ZlBTWUh5OXZSV2gxaFpBaXZCcVozSUlOY01jR21lZjlLeXd3WDA1NXlDWE1ad3Y0YjY4b1JoVlAvZnIwR0EiLCJtYWMiOiI2N2M3N2UxMmQ0ZTgwMjRmN2I0YjgzMGE1NjYxMmNhNjRkNmMxNDAwNzQ3ODEyYTNjODFkMDJjMDZkZTlkM2FmIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjJmYldOQlJSTW54d0V2alo2Z01xUUE9PSIsInZhbHVlIjoiLys5TXNYNWp2TDRjYXphZUNKTU1la3Q3d3lYSDFWcVp3eHpoMytiS3NJN2x5TWhtOU4weTZLRWhjYko1Q2dkM1ZaNW9rd2JmK0dkT1VsVUV4OCtsWS9XVkxZREpDN09TblJFK3VVazU2ckxPbUtyeUNRNkppY3NITmpXSzBQd00iLCJtYWMiOiIyNmIwNjZlNzUwMTVkM2IwMjFhODk3MDI5ZjkzOGI5NWY0ZDhlNDQ4NzVkMGExNTdiZWM5YmNlODkyZGQ5N2ZiIiwidGFnIjoiIn0%3D', 
       'acceept': 'Application/json'
     }
   };
   let x= await get('https://fittestwarrior.com/api/role/available',config)
   setrole(x.data.roles)
  }
  
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function AddNew(){
   
  let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://fittestwarrior.com/api/user/create?first_name=${formData.first_name}&last_name=${formData.last_name}&phone=${formData.phone}&email=${formData.email}&role_id=${formData.role_id}`,
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZWYxMTMyOTVlZmZjNjZiY2M1YWE3YTBiNDFhY2MwYmViMmYwZTQwOGMzY2U5NjBiN2FmNWI0YTVkMzMxZGE2YTUxNDJlNWI4MzYzMWFiNWIiLCJpYXQiOjE2OTY3NzQwNTMuNTAyNjUxOTI5ODU1MzQ2Njc5Njg3NSwibmJmIjoxNjk2Nzc0MDUzLjUwMjY1OTA4MjQxMjcxOTcyNjU2MjUsImV4cCI6MTcxMjU4NTI1My40MjAxMzE5MjE3NjgxODg0NzY1NjI1LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.pojcW1coH-ZU35jv0gZGQqx89nD62C46T3EydpXqJ5Xu_W8t6FJKIyCbFiS7cCbvVtzbeikpz8f0h4wAkIS4CpPejeiZPSEZdQR78hc0C6ZvmK9KK6ryXddeLLNn-p7TGiMQQjaUW24Z9Fz5e5Agt0lzznC2XEK0PvD2eeM_d2HhRMtG_h18-oNIvNtZPqUQrqsZBVRgXjU9uViHTvFz_tKd2Lme2pICxS6mbn6nsZFOVvAI0wHmBDtXHcHLH55i4Kqs6DXOHhmosKnKhsT_Gpax7Pmw2HNF7JFvYVXVBcM23ZKh8L2pdOqfLHm7ZRvuGTtxl7bYOiw1Czlg_pWmeBfJeZX9gZx9ZNxRjS9iX9f22IW7iDmnM8C3zzHR7YgySA9Yb2dn7hLq1WKEnIhJrcwK6xAwnbLGJAnRUaMesvcUVzMuxxcRSavnaNuxGBaFCQHTutNEpul9buPqXnaSO7hrkiMlrkx8SnBwA7dQJdgTWKp0vFbCq0pjiN4JxHVdJRItnDFnt5LVyJlKfD8eGvoQEHxtAa_V4045gqeNzO1m_a-PHHX7_w0rKnOvOdXwZ-PhHQ6SO1Nj6m5939FHCxkCxp3Ek7_UA8PV3kMrPYqvqbwy3Afz7Wqgb0b4_oIXNbhk_Ld4okQaZjapipXKLHUtzK4kKBSkrrtQBzwczfg', 
        'Cookie': 'XSRF-TOKEN=eyJpdiI6IjZ2OFhWR0NJZFBHVkVzSUQvOExSV0E9PSIsInZhbHVlIjoieGhpRnNaTk9XaEhNQ010S0xxUVR1c3NUaGJnQXVzdG5KdWlueWdVL2tKMmNkSitBR3dqK09xVWM4VUg3ZFRZWjZ4ZlBTWUh5OXZSV2gxaFpBaXZCcVozSUlOY01jR21lZjlLeXd3WDA1NXlDWE1ad3Y0YjY4b1JoVlAvZnIwR0EiLCJtYWMiOiI2N2M3N2UxMmQ0ZTgwMjRmN2I0YjgzMGE1NjYxMmNhNjRkNmMxNDAwNzQ3ODEyYTNjODFkMDJjMDZkZTlkM2FmIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjJmYldOQlJSTW54d0V2alo2Z01xUUE9PSIsInZhbHVlIjoiLys5TXNYNWp2TDRjYXphZUNKTU1la3Q3d3lYSDFWcVp3eHpoMytiS3NJN2x5TWhtOU4weTZLRWhjYko1Q2dkM1ZaNW9rd2JmK0dkT1VsVUV4OCtsWS9XVkxZREpDN09TblJFK3VVazU2ckxPbUtyeUNRNkppY3NITmpXSzBQd00iLCJtYWMiOiIyNmIwNjZlNzUwMTVkM2IwMjFhODk3MDI5ZjkzOGI5NWY0ZDhlNDQ4NzVkMGExNTdiZWM5YmNlODkyZGQ5N2ZiIiwidGFnIjoiIn0%3D', 
        'acceept': 'Application/json'
      }
    };
    
 await axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      tog_standard();
    })
    .catch((error) => {
      console.log(error);
    });
    
    // await post()
  }
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log('clicked')
    
    // Basic client-side validation (HTML5)
    if (!formData.first_name || !formData.last_name || !formData.phone || !formData.email || !formData.role_id) {
      // alert('Please fill in all required fields.');
       AddNew()
    } else {
      console.log('Submitted values:');
      console.log('First Name:', formData.first_name);
      console.log('Last Name:', formData.last_name);
      console.log('Phone:', formData.phone);
      console.log('Email:', formData.email);
      console.log('Password:', formData.password);
      console.log('Role ID:', formData.role_id);
    }
  }
 
  return (
    <Container>

                 <Form >
                 <FormGroup>
                          <Label for="role_id">Role</Label>
                          <Input
                            type="select"
                            name="role_id"
                            id="role_id"
                            value={formData.role_id}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="" disabled>Select a role</option>
                            {
                              role.map((i)=>
                              <option key={i} value={i.role_id}>{i.role_id}</option>
                              
                              )
                            }
                          
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Label for="first_name">First Name</Label>
                          <Input
                            type="text"
                            name="first_name"
                            id="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="last_name">Last Name</Label>
                          <Input
                            type="text"
                            name="last_name"
                            id="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                      
                        <FormGroup>
                          <Label for="phone">Phone</Label>
                          <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
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
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="password">Password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      
        
                      <div className="modal-footer">
                        <button
                          type="button"
                          onClick={() => {
                            tog_standard();
                          }}
                          className="btn btn-secondary "
                          data-dismiss="modal"
                          >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary "
                          onClick={()=>
                            
                            handleSubmit
                          }
                          >
                          Save changes
                        </button>
                      </div>
                     </Form>
    </Container>
  )
}

export default ViewData