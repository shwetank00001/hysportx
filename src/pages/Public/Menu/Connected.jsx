import React from 'react'
import { Button, Card, Input, InputGroup } from 'reactstrap'

function Connected() {
   const social =[
    {icon :<><i className="bx bx-cog bx-spin"></i></>, connections :'552225', color:'danger'},
    {icon :'yout', connections :'47754', color:'danger'},
    {icon :'twitter', connections :'477545444122' ,color: 'secondary'},
    {icon :'face', connections :'4775455555'},
    {icon :'face', connections :'4415222'}
   ]
  return (
    <>
    <div className=''>
        <h1>Stay Connected</h1>
    </div>
    <div className='mt-5'>
        {social.map((i)=>
        <Card color={i.color} className='m-2 p-3 d-flex ' key={i}>
            <div className='mx-3 '>

            {i.icon}{'  '} |{' '}
                    {i.connections} followers
            </div>
        </Card>
        )}
    </div>
    <Card color='danger' className='d-flex justify-content-center text-center p-2'>
     <h5>Subscribe For New Updates</h5>
    <InputGroup className=' '>
    <Input />
    <Button>
      Subscribe
    </Button>
  </InputGroup>
    </Card>
    
    </>
  )
}

export default Connected