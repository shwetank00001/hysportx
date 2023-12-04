import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "reactstrap";
import CreateOrEdit from "./Components/CreateOrEdit";
import TableContainer from '../../components/Common/TableContainer';
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shortcutListRequest, shortcutDetailsRequest, shortcutDeleteRequest } from "store/shortcuthub/actions";
import DeleteModal from "components/Common/DeleteModal";
import Loader from "components/Common/Loader";
import { ToastContainer } from "react-toastify";

const ShortcutHub = () => {
    // const [isOpen, toogleOpen] = useState(false);
    // const [isDelete, toogleDelete] = useState(0);
    // const [initialValues, setInitialValues] = useState({ id:'', code:'', name:'', link:'', description:''});
    // const dispatch = useDispatch();
    // const list = useSelector(state => state.shortcutReducer.shortcuts);
    // const loading = useSelector(state => state.shortcutReducer.loading);

    // const handleDeleteRequest = (id) => {
    //     dispatch(shortcutDeleteRequest({codeId :id}));
    //     toogleDelete(0);
    // }

    // function editIdSet(id) {
    //     dispatch(shortcutDetailsRequest({codeId :id}, onDetailsSuccess, onDetailsFail));
    // }

    // const handleCloseModal = () => {
    //     toogleOpen(!isOpen);
    //     setInitialValues({
    //         id:'',
    //         code:'',
    //         name:'',
    //         link:'',
    //         description:''
    //     });
    // }
    
    // const onDetailsSuccess = (data) =>{
    //     setInitialValues(data);
    //     toogleOpen(true)
    // }
    // const onDetailsFail = (error) =>{
    //     console.log(error);
    // }

    // const columns = useMemo(
    //     () => [
    //         {
    //             Header: 'ID',
    //             accessor: 'id',
    //         },
    //         {
    //             Header: 'Name',
    //             accessor: 'name',
    //         },
    //         {
    //             Header: 'Code',
    //             accessor: 'code'
    //         },
    //         {
    //             Header: 'Link',
    //             accessor: 'link'
    //         },
    //         {
    //             Header: 'Description',
    //             accessor: 'description'
    //         },
    //         {
    //             Header: 'Actions',
    //             accessor: 'actions',
    //             Cell: (row) => (
    //                 <div>
    //                     <i className="fas fa-edit fa-lg" onClick={() => { editIdSet(row.row.original.id);}} style={{marginRight:"10px", cursor:"pointer"}}></i>
    //                     <i className="fas fa-trash fa-lg" onClick={() => { toogleDelete(row.row.original.id);}} style={{cursor:"pointer"}}></i>
    //                 </div>
    //             )
    //         }
    //     ],
    //     []
    // );

    useEffect(() => {
        dispatch(shortcutListRequest());
    },[]);

    return(
        <React.Fragment>

            ggff
            {/* <div className="page-content">
                <CreateOrEdit isOpen={isOpen} handleCloseModal={handleCloseModal} initialValues={initialValues} />
                <DeleteModal isOpen={isDelete} toogleOpen={toogleDelete} handleDeleteRequest={handleDeleteRequest} message="Shortcut Code" />
                <Container fluid={true}>
                {loading && <Loader/>}
                    <Row>
                        <Col lg='6'>
                            <h4>Shortcut Hub</h4>
                        </Col>
                        <Col lg='6' className="text-end">
                            <Button onClick={() => toogleOpen(!isOpen)}><i className="bx bx-plus"></i> Add Shortcut</Button>
                        </Col>
                    </Row>
                    <br/>
                    <TableContainer
                        columns={columns}
                        data={list}
                        isGlobalFilter={true}
                        isAddOptions={false}
                        customPageSize={50}
                        isPagination={true}
                        tableClass="align-middle table-nowrap table-check table"
                        theadClass="table-light"
                        paginationDiv="col-12"
                        pagination="justify-content-center pagination pagination-rounded"
                    />
                </Container>
            </div> */}
            {/* <ToastContainer /> */}
        </React.Fragment>
    );
}
export default ShortcutHub;