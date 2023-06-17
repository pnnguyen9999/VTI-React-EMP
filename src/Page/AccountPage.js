import React from "react";
import { Container } from "reactstrap";
import AccountContainer from "../Container/AccountContainer";

function AcountPage(props) {
    return (
        <Container>
            {props.name}
            <AccountContainer />
        </Container>
    );
}


export default AcountPage;
