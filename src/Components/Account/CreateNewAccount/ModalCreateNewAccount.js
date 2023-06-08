import React, { useContext } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
} from "reactstrap";


import InputForm from "./InputForm";
import { AccountContext } from "../../../Container/AccountContainer";


function ModalCreateNewAccount(props) {
    const { isOpenCreateModal, setOpenCreateModal } = useContext(AccountContext);
    return (
        <Container>
            <br />
            <Modal isOpen={isOpenCreateModal}>
                <ModalHeader>
                    <h3>Create New Account</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => setOpenCreateModal(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}


export default ModalCreateNewAccount;