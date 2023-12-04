import TableContainer from 'components/Common/TableContainer'
import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';
import { Button, Card, CardText, Col, Row } from 'reactstrap';

function RecentTable() {

  const [modal1, setModal1] = useState(false);

  const toggleViewModal = () => setModal1(!modal1);
  const OrderId = (cell , service) => {
    return (<>
      <Card>
    <div className='text-bold'>{cell.value ? cell.value : ''}</div>
    <div className='text-bold'>{service.value ? service.value : ''}</div>
      {/* {console.log(cell.value)} */}
   </Card>
        {/* <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link> */}
    </>
    );
};
  const status = ()=><Card className='btn-soft-primary'>Active</Card>
   const product = (row)=><Card>
    <div className='text-bold'>{row.title}</div>
    <div className='text-success'>{row.service}</div>
   </Card>
  const columns = useMemo(
    () => [
        {
            Header: 'Product/Service/Registration Fees',
            // accessor: Header: "Order ID",
            accessor:"producttitle",
            // filterable: false,
            // disableFilters: true,
            // Cell: cellProps => {
            //   return <><OrderId {...cellProps} />
                 
            //   </>;
            // },
        },
        {
            Header: 'Pricing',
            accessor: 'pricing'
        },
        {
            Header: 'Next Due Date ',
            accessor: 'Due'
        },
        {
            Header: 'Status',
            accessor: status
        },
      
        {
          Header: "Action",
          disableFilters: true,
          accessor: "Action",
          Cell: cellProps => {
            return (<>
              <Card className='d-flex justify-evenly '>
                  <Row className='d-flex justify-content-center'>
                    {/* <Col  className=''>
                  <span className='m-0 p-0'>
                    <i  onClick={() => toggleViewModal()}
                       className='dripicons-dots-3 font-size-100'></i> </span>
                    </Col> */}
                     <Col className='m-0 p-0'>
                  <span className='btn-soft-primary m-0 px-1'><i className='fas fa-eye'></i></span>
                    </Col>
                  </Row>
                </Card>
              {/* <Button
                type="button"
                color="primary"
                className="btn-sm btn-rounded"
                onClick={() => toggleViewModal()}
              >
                View Details
              </Button> */}
              </>

            );
          },
        },
        // {
        //     Header: 'Salary',
        //     accessor: 'salary'
        // },
    ],
    []
);

const data = [
    {
        producttitle:  product({title:'Inter Compeon - Inter School  ',service:'Registraon Fees'}),
        productService:  'fffffggg',
        pricing: product({title:'Rs.419.00INR ',service:'One Time'}),
         age: 28,
        Due: <p className='text-primary'>NA</p>, 
    },
    
    {
        producttitle:  product({title:'Inter Compeon - Inter School  ',service:'Registraon Fees'}),
        productService:  'fffffggg',
        pricing: product({title:'Rs.419.00INR ',service:'One Time'}),
         age: 28,
        Due: <p className='text-primary'>NA</p>, 
    },
    
    {
        producttitle:  product({title:'Inter Compeon - Inter School  ',service:'Registraon Fees'}),
        productService:  'fffffggg',
        pricing: product({title:'Rs.419.00INR ',service:'One Time'}),
         age: 28,
        Due: <p className='text-primary'>NA</p>, 
    },
    
    {
        producttitle:  product({title:'Inter Compeon - Inter School  ',service:'Registraon Fees'}),
        productService:  'fffffggg',
        pricing: product({title:'Rs.419.00INR ',service:'One Time'}),
         age: 28,
        Due: <p className='text-primary'>NA</p>, 
    },
    
    {
        producttitle:  product({title:'Inter Compeon - Inter School  ',service:'Registraon Fees'}),
        productService:  'fffffggg',
        pricing: product({title:'Rs.419.00INR ',service:'One Time'}),
         age: 28,
        Due: <p className='text-primary'>NA</p>, 
    },
    
    {
        producttitle:  product({title:'Inter Compeon - Inter School  ',service:'Registraon Fees'}),
        productService:  'fffffggg',
        pricing: product({title:'Rs.419.00INR ',service:'One Time'}),
         age: 28,
        Due: <p className='text-primary'>NA</p>, 
    },
    
    {
        producttitle:  product({title:'Inter Compeon - Inter School  ',service:'Registraon Fees'}),
        productService:  'fffffggg',
        pricing: product({title:'Rs.419.00INR ',service:'One Time'}),
         age: 28,
        Due: <p className='text-primary'>NA</p>, 
    },
    
   
];




  return (
    <CardText className="mb-0">
    <TableContainer
        columns={columns}
        data={data}
        // isGlobalFilter={true}
      //   isAddOptions={false}
        customPageSize={5}
        isPagination={true}
        isShowingPageLength={true}
        
        // isGlobalFilter={true}
        tableClass="align-middle table-nowrap  table"
        theadClass="table-light"
        paginationDiv="col-4"
        pagination="justify-content-center pagination pagination-rounded"
    />
    </CardText>
  )
}

export default RecentTable