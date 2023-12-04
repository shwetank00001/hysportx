import React, { useState } from 'react'
import { Card, Form, InputGroupText } from 'reactstrap'
import { cardGym } from './dat'


function ManageGym(props) {
//    const data = props.index
 
  return (
    <div style={{width:'100vw'}} className='d-flex text-center '>
     {props.index.map((i)=>
     <><div style={{ width: '21.5vw', paddingRight: 'vw' }} className='bg-blue px-2 text-center'>
             <h3>
                 <div className='d-grid text-center '>

                     <div style={{ backgroundColor: 'blue', width: '25vw',height:'8vh'  }} className='bg-blue px-2 py-1 text-center '>
                         <div className='mt-2 ' style={{fontSize: i.size}}>
                               {i.title}
                         </div>
                     </div>

                     <Card style={{ width: '20vw', height: '35vh' }} className='mx-5'>
                                
                     </Card>
                 </div>
             </h3>
         </div>
         </>
     )}
    
    </div>
  )
}

export default ManageGym