import React from "react";
import { Container } from "reactstrap";
import AccountContainer from "../Container/AccountContainer";
import CounterComponent from "../Components/CounterComponent";
import CounterComponentWithReduxHook from "../Components/CounterComponentWithReduxHook";

function AccountPage(props) {
    return (
        <Container>
            {/* <CounterComponent /> */}
            {/* <CounterComponentWithReduxHook /> */}
            <AccountContainer />
        </Container>
    );
}


export default AccountPage;

