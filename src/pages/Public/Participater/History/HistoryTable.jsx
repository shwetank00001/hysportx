import TableContainer from 'components/Common/TableContainer'
import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { Button, Card } from 'reactstrap'
  function HistoryTable(){
    const [clicked, setClicked] = useState(false)
      
    const star =(row)=>(row.star ?
                        <div onClick={()=>row.star == "1"} className='text-center'>
                          <i className='fas fa-star'></i>
                        </div>
                        :
                        <div onClick={()=>setClicked(!clicked)} className='text-center'>
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
                Header: 'Date Sent',
                accessor: 'date'
            },
            {
                Header: 'Message Subject',
                accessor: 'Massage'
            },
            {
                Header: 'Star',
                accessor: star
            },
            {
                Header: 'Status',
                accessor: status
            },
        ])
        

        const data =[
            {id:'1', date :'Wednesday, October 11th, 2023 (14:30) ', Massage :'Service Unsuspension Noficaon', star:'1'  },
            {id:'2', date :'Wednesday, October 11th, 2023 (14:30) ', Massage :'Service Unsuspension Noficaon' ,status :'1' },
            {id:'3', date :'Wednesday, October 11th, 2023 (14:30) ', Massage :'Service Unsuspension Noficaon' ,status :'1' },
            {id:'4', date :'Wednesday, October 11th, 2023 (14:30) ', Massage :'Service Unsuspension Noficaon' ,status :'1' },
            {id:'5', date :'Wednesday, October 11th, 2023 (14:30) ', Massage :'Service Unsuspension Noficaon'  },
            {id:'6', date :'Wednesday, October 11th, 2023 (14:30) ', Massage :'Service Unsuspension Noficaon' ,status :'1' },
            {id:'7', date :'Wednesday, October 11th, 2023 (14:30) ', Massage :'Service Unsuspension Noficaon' },
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