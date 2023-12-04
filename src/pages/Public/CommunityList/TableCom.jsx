// import TableContainer from 'components/Common/TableContainer'
import TableContainer from 'components/Common/TableContainer'
import React, { useMemo } from 'react'
import { Button, Spinner } from 'reactstrap'

function TableCom({action}) {
    const spinner=[
      {height:'.5rem',width:'.5rem'},
      {height:'.5rem',width:'.5rem'},
      {height:'.5rem',width:'.5rem'},
      {height:'.5rem',width:'.5rem'},
    ]
  

    const dataApi =  [
      {
      "id": 17,
      "first_username": "email",
      "last_username": "test",
      "phone": "7557598883",
      "role_id": 27,
      "blocked": 0,
      "is_active": 1,
      "email": "itsd1@3ree6ix.com",
      "email_verified_at": null,
      "created_by": "self",
      "updated_by": "self",
      "created_at": "2023-10-02T20:20:06.000000Z",
      "updated_at": "2023-10-02T20:20:06.000000Z"
  },
  {
      "id": 18,
      "first_username": "qwerty",
      "last_username": "qwert",
      "phone": "1234567890",
      "role_id": 27,
      "blocked": 0,
      "is_active": 1,
      "email": "test@test.com",
      "email_verified_at": null,
      "created_by": "self",
      "updated_by": "self",
      "created_at": "2023-10-09T15:15:01.000000Z",
      "updated_at": "2023-10-09T15:15:01.000000Z"
  },
  {
      "id": 19,
      "first_username": "qwerty",
      "last_username": "qwert",
      "phone": "1234567891",
      "role_id": 27,
      "blocked": 0,
      "is_active": 1,
      "email": "test@yopmail.com",
      "email_verified_at": null,
      "created_by": "self",
      "updated_by": "self",
      "created_at": "2023-10-09T15:16:37.000000Z",
      "updated_at": "2023-10-09T15:16:37.000000Z"
    }
  ]

 const chkbx = ()=> <p>hhhhhhh</p>


const columns = useMemo(
  () => [
      {
          Header: 'ID',
          accessor: 'id',
      },
      {
          Header: 'User Name',
          accessor: "first_username" ,
      },
      // {
      //     Header: 'User Role',
      //     accessor: chkbx
      //   },
        {
        Header: 'Role Category',
          
          accessor: 'role_id'
      },
      // {
      //     Header: 'Location',
      //     accessor: 'location'
      // },
      {
          Header: 'Email',
          accessor: 'email'
      },
      {
          Header: 'Mobile',
          accessor: 'phone'
      },
      {
          Header: 'Registerd On',
          accessor: 'created_at'
      },
      // {
      //     Header: 'Active On',
      //     accessor:  'active'
      // },
      // {
      //     Header: 'KYC Status',
      //     accessor:  'activec'
      // },
      {
          Header: 'Action',
          accessor: action
      },
  ],
  []
);

  
  return (dataApi ?
    <>
    <TableContainer
                    columns={columns}
                    data={dataApi}
                    // key={dataApi.id}
                    // handleUserClick={props.view}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    isAddUserList={false}
                    customPageSize={10}
                    isPagination={true}
                    tableClass="align-middle table-nowrap table-check table"
                    theadClass="table-light"
                    paginationDiv="col-5"
                    pagination="justify-content-center pagination pagination-rounded"
                />
              
  
  </> : <div style={{width:'100%'}} className='d-flex justify-content-center align-item-center my-5 gap-1'>
    
     
    {spinner.map((i)=>
    
     <Spinner
  color="primary"
  key={i}
  style={{
    height: i.height,
    width:   i.width
  }}
  
  >
  Loading...
</Spinner>
  )}
</div>
  )
}

export default TableCom