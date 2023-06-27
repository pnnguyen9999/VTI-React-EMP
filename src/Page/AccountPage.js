import React from "react";
import { Container } from "reactstrap";
import AccountContainer from "../Container/AccountContainer";
import CounterComponent from "../Components/CounterComponent";
import CounterComponentWithReduxHook from "../Components/CounterComponentWithReduxHook";
import CounterComponentWithReduxToolkit from "../Components/CounterComponentWithReduxToolkit";

function AcountPage(props) {
    return (
        <Container>
            {/* <CounterComponent /> */}
            {/* <CounterComponentWithReduxHook /> */}
            <CounterComponentWithReduxToolkit />
            <AccountContainer />
        </Container>
    );
}


export default AcountPage;

