import React from "react";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

const OtherLogin = ({open, toggleOpen}) => {
    return (
        <div>
            <Button color="danger" toggleClick={toggleOpen}>Click Me</Button>
                <Modal isOpen={open} toggle={toggleOpen} {...args}>
                    <ModalHeader toggle={toggleOpen}>Modal title</ModalHeader>
                    <ModalBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleOpen}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggleOpen}>Cancel</Button>
                </ModalFooter>
            </Modal>
      </div>
    )
}