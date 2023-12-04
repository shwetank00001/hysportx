import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, NavLink } from 'reactstrap'
import img1 from "../../assets/images/small/img-1.jpg";
function CalenderCard() {
    const contest =[
        {title:'contest Name', detail:'Inter school qualify round start get participate', icon:'', date:'Decamber'},
        {title:'contest Name', detail:'Inter school qualify round start get participate', icon:'', date:'Decamber'},
        {title:'contest Name', detail:'Inter school qualify round start get participate', icon:'', date:'Decamber'},
        // {title:'contest Name', detail:'Inter school qualify round start get participate', icon:'', date:'Decamber'},
        // {title:'contest Name', detail:'Inter school qualify round start get participate', icon:'', date:'Decamber'},
    ]
  return (
    <>
    <Card>
                <CardImg top className="img-fluid" src={img1} alt="Skote" />
                <CardBody>
                  <CardTitle className="mt-0">Card title</CardTitle>
                  <div>
                      {
                        contest.map((i)=>
        
        
                            <div key={i} style={{width:'200px', backgroundColor:''}} className='d-flex'>
                              <Card  color='primary' className='p-5 m-1 .col-lg-w-1/2'></Card>
                              <div className='mx-1' >
                                 <h6 className='my-1'>Inter Gym</h6>
                                 <p style={{fontSize:'9px', marginTop:'5px'}}>Inter School qualify round start get participate</p>
                                 <i style={{fontSize:'9px'}} className='bx bx-calendar m-0'>December, 9 , 2023</i>
                              </div>
                              </div>
                            
                        )
                              }

                          </div><NavLink
                              to="#"
                              className="btn btn-primary"
                          >
                                  <Button type='primary'>Button</Button>
                              </NavLink>
                </CardBody>
              </Card>
    
    </>
  )
}

export default CalenderCard