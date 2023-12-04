import TableContainer from 'components/Common/TableContainer'
import React from 'react'
import { useMemo } from 'react'
import { Button, Card } from 'reactstrap'

function HistoryTable() {
   
    const star =(row)=>(row.status?
                        <div className='text-center'>
                          <i className='fas fa-star'></i>
                        </div>
                        :
                        <div className='text-center'>
                          <i className='fas fa-star text-warning'></i>
                        </div>

    ) 

      const status =(row)=> (row.status ? 
        <Button className='text-primary btn-soft-primary'>Read</Button>:
        <Button className='text-warning btn-soft-warning'>Unread</Button>
        )
                
    const columns = useMemo(
        () => [
            {
                Header: 'Session Start Date ',
                accessor: 'start'
            },
            {
                Header: 'Session End Date',
                accessor: 'end'
            },
            {
                Header: 'IP Address',
                accessor: 'ip'
            },
            {
                Header: 'Sign Out Cause',
                accessor: 'cause'
            },
        ])
        

        const data =[
            {id:'1',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'2',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'3',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'4',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'5',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'6',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'7',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'8',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
            {id:'89',start :'2023-10-16   12:13:18', end:'2023-10-16    12:51:51', ip:'10.20.122.60 ', cause:'Sign Out ' },
           
        ]

  return (
      <Card>
        <TableContainer
        columns={columns}
        data={data}
      //   isGlobalFilter={true}
      //   isAddOptions={false}
        customPageSize={10}
        isPagination={true}
        tableClass="align-middle table-nowrap table-check table"
        theadClass="table-light"
        paginationDiv="col-12"
        pagination="justify-content-center pagination pagination-rounded"
    />
      </Card>
  )
}

export default HistoryTable