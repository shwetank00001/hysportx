import React from 'react'
import { Button, Card, CardHeader, CardText } from 'reactstrap'

function LeagalCard() {
  const data =[
    {title:'Business Type :', data :' private limited'},
    {title:'Registraon Number/Cin:', data :'wcd1234ldk567k789'},
    {title:'Date of Registraon :', data :'23-03-2010'},
    {title:'Place of Registraon :', data :'New Delhi'},
    {title:'Uploaded Docs :', data :'Link to pop-up to check the docs'},

    
] 
  
    const card =[
        {title:'Prospectus Docs' , docsno :'123wfgh456789dsd0', verify:'1'},
        {title:'Taxaon Docs', docsno :'123wfgh456789dsd0'},
        {title:'MSME Docs', docsno :'123wfgh456789dsd0'},
        {title:'Municipal/Shop Act/Commercial Docs', docsno :'123wfgh456789dsd0'},
        {title:'ISO Cerficaon Docs', docsno :'123wfgh456789dsd0'},
        {title:'Importer-Exporter Code Docs', docsno :'123wfgh456789dsd0'},
        {title:'Pan Card', docsno :'123wfgh456789dsd0'},
        {title:'Any Other Docs ' , docsno :'123wfgh456789dsd0'},
        {title:'Finance Details        '}
    ]
  return (<>

     <div className='my-3'>
        {
            data.map((i)=>
            <div key={i} style={{fontSize:'10px'}} className='d-flex mx-1'>
                <span className='mx-1'>  <i className="fas fa-caret-right d-block  align-middle m-0 p-0  "></i></span>
                <h6 style={{width:'40%'}}>{i.title}</h6>
                <p>{i.data}</p>
                  </div>
            )
        }
        
    </div>


    {card.map((i)=>
    <Card key={i} color=' m-1'>
     <CardHeader className=' d-flex mt-1 justify-content-between  card-soft-primary waves-effect waves-light  mx-0 py-1 px-2'>
        <h6 className='d-flex gap-1' style={{color:'blue'}}><i className="mdi mdi-eye-outline d-block  align-middle  "></i>{i.title}</h6>
    <Button className=' m-0 py-0 px-1 btn-soft-success  waves-effect waves-light' ><i className="mdi mdi-pencil text-primary d-block "></i></Button>
    </CardHeader>
    <CardText className='d-flex'>
      <div style={{width:'80%'}}>

    <div style={{fontSize:'10px'}}  className='d-flex mb-0 mt-1 mx-1'>
                <span className='mx-1'>  <i className="fas fa-file-pdf d-block  align-middle m-0 p-0  "></i></span>
                <h6 style={{width:'40%'}}>Docs Number</h6>
                <p>{i.docsno}</p>
                  </div>
    <div style={{fontSize:'10px'}} className='d-flex my-0 mx-1'>
                <span className='mx-1'>  <i className="fas fa-file-upload align-middle m-0 p-0  "></i></span>
                <h6 style={{width:'40%'}}>Uploaded Docs :</h6>
                <p>Link to pop-up to check the docs</p>
                  </div>
      </div>
      {/* <div className='text-end'><Button>Verified</Button></div> */}
      {(i.verify ? <Button className='btn-soft-success m-0 py-0 px-1' color='success'>Verified</Button>:<Button style={{fontSize:'12px'}} className='btn-soft-warning m-0 p-0' color='danger'>Not Verified</Button>)}
        </CardText>
        </Card>
    
    )}
  </>
  )
}

export default LeagalCard