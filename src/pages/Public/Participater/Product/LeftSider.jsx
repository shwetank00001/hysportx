import React from 'react'
import { Badge, Card, CardBody } from 'reactstrap'

function LeftSider() {


    const posts = [
        { title: "Beautiful Day with Freinds",  description: "10 Apr, 2020" , hr :<hr className=''/> },
        { title: "Drawing a sketch",  description: "24 Mar, 2020", hr:<hr className=''/> },
        { title: "Projectd discussion wih a team",  description: "11 Mar, 2020" },
       
      ];
      const tags =[
        {title : 'Design'},
        {title : 'Development'},
        {title : 'Bussiness', no:'04'},
        {title : 'Project'},
        {title : 'Travel', no:'02'},
        {title : 'Lifestyle'},
        {title : 'Photography'},
      ]


  return (
    <>
    <Card className="mini-stats-wid">
    <CardBody>
      <p className="text-muted fw-medium">
        Tags
      </p>
      <div className="d-flex">
        <div className="flex-grow-1">
      {tags.map((i)=>
       <Badge
       key={i}
       className="text-dark"
       color="light"
       pill
     >
       {i.title}
      
     </Badge>
     
      
      )}
      <hr/>
      <p className="text-muted fw-medium">
        Categories
      </p>
      {tags.map((i)=>
       <Card
       key={i}
       className="d-flex justify-content-between text-dark"
       color="light"
       pill
     >
      <div className='d-flex justify-content-between'>

      <div>

       {i.title}
      </div>
      <div>

       <Badge
       key={i}
       className="text-dark"
       color="primary"
       pill
       >
       {i.no}
      
     </Badge>
       </div>
         </div>
      
     </Card>
     
      
      )}
      <hr/>
      <p className="text-muted fw-medium">
        Recent Activity
      </p>
      <div>

      {
        posts.map((i)=>
      <>
       <div className='d-flex'> 
         <div style={{width:'80px', height:'50px', backgroundColor:'blue'}} >

         </div>
         <Card className='mx-1 my-0 p-0' >
          <div className='m-0 p-0'>
           <h6>{i.title}</h6>
          </div>
      <p className="text-muted fw-small">
        {i.description}
      </p>
         </Card>
         
       </div>
       <div className='m-0 p-0'>{i.hr}</div>
       </>
       )
      } 
       </div>
{/* {reports.map((report, key) => (
          <h4 className="mb-0">{report.description}</h4>
        <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
          <span className="avatar-title rounded-circle bg-primary">
            <i className={ "bx " + report.iconClass + " font-size-24" }></i>
          </span>
        </div>
      </div>
        ))} */}
        </div>
       </div>
    </CardBody>
  </Card>
  
  </>
  )
}

export default LeftSider