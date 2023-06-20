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
import { useDispatch, useSelector } from "react-redux";
import EMPLOYEE from "../../../redux/actions/employee";


function ModalCreateNewAccount(props) {
    const { currentInputFormData, setCurrentInputFormData } = useContext(AccountContext);

    const { isOpenModal } = useSelector((state) => state.employee);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch({ type: EMPLOYEE.SET_MODAL, payload: false })
        setCurrentInputFormData({});
    };
    return (
        <Container>
            <br />
            <Modal isOpen={isOpenModal}>
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