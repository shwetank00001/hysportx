import React from "react";
import { Button, Col, Label, Modal, Row } from "reactstrap";
import {Field, Form, Formik} from "formik";
import { useDispatch } from "react-redux";
import { shortcutAddRequest, shortcutUpdateRequest } from "store/actions";

const CreateOrEdit = ({isOpen,  handleCloseModal, initialValues}) => {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        if (values.id) {
            dispatch(shortcutUpdateRequest(values, handleCloseModal));
        } else {
            dispatch(shortcutAddRequest(values, handleCloseModal));
        }
    }

    return (
        <Modal isOpen={isOpen} centered >
            <div className="modal-header">
                <h5 className="modal-title mt-0">Manage Shortcut</h5>
                <button  type="button"  onClick={handleCloseModal}  className="close"  data-dismiss="modal"  aria-label="Close" >
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div className="modal-body">
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        <Row>
                            <Col lg="12">
                                <Label>Code</Label>
                                <Field name="code" className="form-control" />
                            </Col>
                            <Col lg="12">
                                <Label>Name</Label>
                                <Field name="name" className="form-control" />
                            </Col>
                            <Col lg="12">
                                <Label>Link</Label>
                                <Field name="link" className="form-control" />
                            </Col>
                            <Col lg="12">
                                <Label>Description</Label>
                                <Field name="description" as="textarea" className="form-control" />
                            </Col>
                            <Col lg="6" style={{marginTop:'20px', textAlign:'center'}}>
                                <Button type="submit" className="w-100 btn btn-soft-primary waves-effect waves-light btn btn-secondary">Submit</Button>
                            </Col>
                            <Col lg="6" style={{marginTop:'20px', textAlign:'center'}} >
                                <Button  type="button" onClick={handleCloseModal} className="w-100 btn btn-soft-danger waves-effect waves-light btn btn-secondary">Close</Button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </div>
        </Modal>
    );
}
export default CreateOrEdit;