import React from 'react'
import { Card, UncontrolledCarousel } from 'reactstrap'
import SlideDark from './slideDark'

function Corusel() {
    const item = [
        {
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
            src: 'https://picsum.photos/id/123/1200/600'
          },
          {
              altText: 'Slide 2',
              caption: 'Slide 2',
              key: 2,
              src: 'https://picsum.photos/id/456/1200/600'
          },
          {
              altText: 'Slide 3',
              caption: 'Slide 3',
              key: 3,
              src: 'https://picsum.photos/id/678/1200/600'
          }
      ]
  return (<>
  {/* <Card  className='my-2' color='secondary'>
    <div style={{height:'10vh'}}> */}
       <div className=''>
  <SlideDark />
        </div> 
    {/* </div> */}
    {/* <UncontrolledCarousel  interval='1'
  items={item}
/> */}
{/* <div className='mx-4 mt-3'>
    <h5>Image Advertisement</h5>
    <h1 className=''>FITTESTWORRIORS MAIN EVENT</h1>
    <p>FW Promotions</p>
    <p className='text-danger'>Read More</p>
</div> */}


    {/* </Card> */}
</>
  )
}

export default Corusel