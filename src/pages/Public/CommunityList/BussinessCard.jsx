import React from 'react'
import { Button, Card, CardHeader, CardText, Row } from 'reactstrap'
import SocialLink from './SocialLink'
import PresentAddress from './PresentAddress'
import AccountDetails from './AccountDetails'
function BussinessCard() {
    const data =[
        {title:'Organisaon Name :', data :'3ree6ix markeng and private limited'},
        {title:'Brand/Branch Name :', data :'FiestWarrior Private Limited'},
        {title:'About Company :', data :'This area is sample for content to check the details of the'},
        {title:'Mobile :', data :'+91 7678597421'},
        {title:'WhatsApp :', data :'+91 7678597421'},
        {title:'Email', data :'171'},
        {title:'Desk/Fax :', data :'+91 7678597421'},
        
    ] 
  return (<>
    


    <div className='my-3'>
        {
            data.map((i)=>
            <div key={i} style={{fontSize:'8px'}} className='d-flex mx-1'>
                <span className='mx-1'>  <i className="fas fa-caret-right d-block  align-middle m-0 p-0  "></i></span>
                <h5 style={{minWidth:'105px', fontSize:'10px'}} className='d-flex '>{i.title}</h5>
                <p>{i.data}</p>
                  </div>
            )
        }
        
    </div>
               <Row>
                 <SocialLink/>
                </Row>
                <Row>
                  <PresentAddress/>  
                   
                </Row>
                <Row>
                   <AccountDetails/>
                </Row>
  
  </>
  )
}

export default BussinessCard