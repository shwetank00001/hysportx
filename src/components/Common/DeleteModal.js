import React from "react";
import { Button, Modal, ModalBody} from "reactstrap";

const DeleteModal = ({isOpen,  toogleOpen, handleDeleteRequest, message}) => {
    return (
        <Modal isOpen={!!isOpen} centered >
            <div className="modal-content">
                <ModalBody className="px-4 py-5 text-center">
                <button type="button" onClick={() => {  toogleOpen(!isOpen);  }} className="btn-close position-absolute end-0 top-0 m-3"></button>
                <div className="avatar-sm mb-4 mx-auto">
                    <div className="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
                        <i className="mdi mdi-trash-can-outline"></i>
                    </div>
                </div>
                <p className="text-muted font-size-16 mb-4">Are you sure you want to permanently erase {message}.</p>

                <div className="hstack gap-2 justify-content-center mb-0">
                    <button type="button" className="btn btn-danger" onClick={() => {handleDeleteRequest(isOpen)}}>Delete Now</button>
                    <button type="button" className="btn btn-secondary" onClick={() => {  toogleOpen(!isOpen);  }}>Close</button>
                </div>
                </ModalBody>
            </div>
        </Modal>
    );
}
export default DeleteModal;