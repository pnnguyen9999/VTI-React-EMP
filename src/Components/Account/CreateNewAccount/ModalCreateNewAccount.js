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
import { useDispatch, useSelector } from "react-redux";
import EMPLOYEE from "../../../redux/actions/employee";


function ModalCreateNewAccount(props) {
    const { isOpenModal, currentFormData } = useSelector((state) => state.employee);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch({ type: EMPLOYEE.SET_MODAL, payload: false })
    };
    return (
        <Container>
            <br />
            <Modal isOpen={isOpenModal}>
                <ModalHeader>
                    <h3>{!currentFormData?.id ? 'Create New Account' : `Edit Account ${currentFormData.userName}`}</h3>
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