import React from 'react'
import { Button, Card, CardHeader, CardText, Row } from 'reactstrap'
import SocialLink from './SocialLink'
import PresentAddress from './PresentAddress'
import AccountDetails from './AccountDetails'

function Represnt() {
    const data =[
        {title:'Mobile', data :'8957065208'},
        {title:'whatsapp', data :'8957065208'},
        {title:'email', data :'mfu739@gmail.com'},
        {title:'Dob', data :'24-04-2004'},
        {title:'Gender', data :'Male'},
        {title:'Height', data :'171'},
        {title:'Weight', data :'65'},
        {title:'Weight', data :'65'},
    ] 
  
  return (
    <>
    <div className='my-3'>
        {
            data.map((i)=>
            <div key={i} className='d-flex mx-1'>
                <h6 style={{width:'40%'}}>{i.title}</h6>
                <p>{i.data}</p>
                  </div>
            )
        }
        
    </div>
    <Row>
        <SocialLink />
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

export default Represnt