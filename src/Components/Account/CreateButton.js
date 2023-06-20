import React, { useContext } from "react";
import { Container, Button } from "reactstrap";
import { AccountContext } from "../../Container/AccountContainer";
import { useDispatch, useSelector } from "react-redux";
import EMPLOYEE from "../../redux/actions/employee";


function CreateButton(props) {
    const { isOpenModal } = useSelector((state) => state.employee);
    // const isOpenModal = useSelector((state) => state.employee.isOpenModal)
    const dispatch = useDispatch();
    return (
        <Container>
            {+isOpenModal}
            <br />
            <Button color="primary" onClick={() => dispatch({ type: EMPLOYEE.SET_MODAL, payload: true })}>Create New Account</Button>
        </Container>
    );
}


export default CreateButton;