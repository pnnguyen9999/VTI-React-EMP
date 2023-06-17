import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";


export const AccountContext = createContext();

function AccountContainer(props) {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [listAccount, setListAccount] = useState([]);
    const [currentInputFormData, setCurrentInputFormData] = useState();

    const updateListAccountData = () => {
        setListAccount(listAccount);
        localStorage.setItem("listAccount", JSON.stringify(listAccount));
    };

    const onHandleCreateNewAccount = (newAccount) => {
        listAccount.push(newAccount);
        updateListAccountData();

        setOpenCreateModal(false);
    };

    const onHandleEditAccount = (newAccountData) => {
        const targetAccountIndex = listAccount.findIndex((account) => account.id === newAccountData.id);

        listAccount[targetAccountIndex] = { ...listAccount[targetAccountIndex], ...newAccountData };
        updateListAccountData();

        setOpenCreateModal(false);
        setCurrentInputFormData({});
    };

    const onHandleDeleteAccount = (accountId) => {
        const targetAccountIndex = listAccount.findIndex((account) => account.id === accountId);
        const cloneList = [...listAccount];
        cloneList.splice(targetAccountIndex, 1);
        setListAccount(cloneList);
        localStorage.setItem("listAccount", JSON.stringify(cloneList));
    };


    useEffect(() => {
        if (localStorage && localStorage.getItem("listAccount")) {
            const listAccountLocalStorage = JSON.parse(localStorage.getItem("listAccount"));
            setListAccount(listAccountLocalStorage);
        }
    }, []);

    return (
        <AccountContext.Provider value={{
            listAccount,
            isOpenCreateModal,
            setOpenCreateModal,
            currentInputFormData,
            setCurrentInputFormData,
            onHandleCreateNewAccount,
            onHandleEditAccount,
            onHandleDeleteAccount,
        }}>
            <Container>
                <Mouse coordinate={(mousePosition) =>
                    <PrintCoord
                        toaDoChuotX={mousePosition.mouseX}
                        toaDoChuotY={mousePosition.mouseY} />}
                />
                {/* <EasyRenderProps data={(dulieu) => <h6>{dulieu}</h6>} /> */}
                {/* <CreateButton />
                <ModalCreateNewAccount />
                <ResultForm data={listAccount} /> */}
            </Container>
        </AccountContext.Provider>
    );
}

const EasyRenderProps = (props) => {
    return <div>
        <h1>Easy understand render props</h1>
        {props.data('data inside easy render props')}
    </div>;
};

const Mouse = (props) => {
    const [mousePosition, setMousePosition] = useState({
        mouseX: 0,
        mouseY: 0
    });

    const handleSetMousePosition = (e) => {
        setMousePosition({
            mouseX: e.clientX,
            mouseY: e.clientY
        });
    };

    return <div onMouseMove={handleSetMousePosition}>
        <h1>Mouse component</h1>
        {props.coordinate(mousePosition)}
    </div>;
};

const PrintCoord = (props) => {
    return <h1 style={{ color: "red", fontWeight: "bold" }}>
        {props.toaDoChuotX} : {props.toaDoChuotY}
    </h1>;
};

// callback
// react props

export default AccountContainer;