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
    const { isOpenCreateModal, setOpenCreateModal, currentInputFormData, setCurrentInputFormData } = useContext(AccountContext);

    const handleCloseModal = () => {
        setOpenCreateModal(false);
        setCurrentInputFormData({});
    };
    return (
        <Container>
            <br />
            <Modal isOpen={isOpenCreateModal}>
                <ModalHeader>
                    <h3>{!currentInputFormData?.id ? 'Create New Account' : `Edit Account ${currentInputFormData.userName}`}</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => handleCloseModal()}>Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}


export default ModalCreateNewAccount;