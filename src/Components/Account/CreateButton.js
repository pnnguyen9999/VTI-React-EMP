import React from "react";
import { Container, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import EMPLOYEE from "../../redux/actions/employee";


function CreateButton(props) {
    const dispatch = useDispatch();
    return (
        <Container>
            <br />
            <Button color="primary" onClick={() => dispatch({ type: EMPLOYEE.SET_MODAL, payload: true })}>Create New Account</Button>
        </Container>
    );
}


export default CreateButton;