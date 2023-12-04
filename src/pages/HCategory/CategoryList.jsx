import TableContainer from 'components/Common/TableContainer'
import React, { useMemo } from 'react'
import { Button, Card, Input } from 'reactstrap';

function CategoryList() {


     const chbx = (row)=><><Input type='checkbox'></Input></>
      const actio = ()=> <>
      <Card className='card btn-soft-primary '> <i className="mdi mdi-pencil-outline font-size-20 m-auto " /></Card>
      </>
      const action = ()=> <>
      <Button color='primary' className=' btn-sm    text-center   '> <i className="mdi mdi-pencil-outline font-size-20 m-auto " /></Button>
      </>
      const status = ()=> <>
      <Button className=' btn-sm btn  btn-soft-info text-center   '>Active</Button>
      </>
      
    const jobs = [
        {id:1, title :'Equipments', name :'Gym Bail', Active : 'Active'   },
        {id:2, title :'Equipments', name :'Gym Bail', Active : 'Active'   },
        {id:3, title :'Equipments', name :'Gym Bail', Active : 'Active'   },
        {id:4, title :'Muscle Group', name :'Gym Bail', Active : 'Active'   },
        {id:5, title :'Muscle Group', name :'Gym Bail', Active : 'Active'   },
        {id:6, title :'Muscle Group', name :'Gym Bail', Active : 'Active'   },
        {id:7, title :'Muscle Group', name :'Gym Bail', Active : 'Active'   },
        {id:8, title :'Excercise Type', name :'Gym Bail', Active : 'Active'   },
        {id:9, title :'Excercise Type', name :'Gym Bail', Active : 'Active'   },
        {id:10, title :'Excercise Type', name :'Gym Bail', Active : 'Active'   },
        {id:11, title :'Excercise Type', name :'Gym Bail', Active : 'Active'   },
        {id:12, title :'Excercise Type', name :'Gym Bail', Active : 'Active'   },
        {id:13, title :'Experience Level', name :'Gym Bail', Active : 'Active'   },
       
      
    ]

    const columns = useMemo(
        () => [
           
            {
                Header: 'ID',
                accessor: chbx,
             
               
            },
            {
                Header: 'Category Title',
                accessor: 'title',
                filterable: true,
                Cell: (cellProps) => {
                    return (
                        <p>{cellProps.value}</p>
                       
                    );
                }
            },
           
            {
                Header: 'Category Name',
                accessor: 'name',
                disableFilters: true,
                Cell: (cellProps) => {
                    return (
                        <p>{cellProps.value}</p>
                       
                    );
                }
            },
            {
                Header: 'Active Status',
                accessor: status,
                // disableFilters: true,
                // Cell: (cellProps) => {
                //     return (
                //         <p>fff</p>
                       
                //     );
                // }
            },
            {
                Header: 'Action',
                accessor: action,
                disableFilters: true,
               
            },
        ],
        []
    );


  return (
    <TableContainer
      columns={columns}
      data={jobs}
      isGlobalFilter={true}
      isAddOptions={false}
    //   handleJobClicks={handleJobClicks}
    //   isJobListGlobalFilter={true}
      isPagination={true}
      iscustomPageSizeOptions={true}
      isShowingPageLength={true}
      customPageSize={5}
      tableClass="table-bordered text-center align-middle nowrap mt-2"
      paginationDiv="col-sm-12 col-md-7"
       pagination="pagination justify-content-end pagination-rounded"
    />
  )
}

export default CategoryList