import React, { useContext } from "react";
import { Container, Button } from "reactstrap";
import { AccountContext } from "../../Container/AccountContainer";


function CreateButton(props) {
    const { isOpenCreateModal, setOpenCreateModal } = useContext(AccountContext);
    return (
        <Container>
            <br />
            <Button color="primary" onClick={() => setOpenCreateModal(!isOpenCreateModal)}>Create New Account</Button>
        </Container>
    );
}


export default CreateButton;