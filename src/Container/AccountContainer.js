import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";


export const AccountContext = createContext();

function AccountContainer(props) {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [listAccount, setListAccount] = useState([]);

    const onHandleCreateNewAccount = (newAccount) => {
        console.log('from container =>', newAccount);

        listAccount.push(newAccount);
        setListAccount(listAccount);

        localStorage.setItem("listAccount", JSON.stringify(listAccount));

        setOpenCreateModal(false);
    };

    useEffect(() => {
        if (localStorage && localStorage.getItem("listAccount")) {
            const listAccountLocalStorage = JSON.parse(localStorage.getItem("listAccount"));
            setListAccount(listAccountLocalStorage);
        }
    }, []);

    return (
        <AccountContext.Provider value={{
            isOpenCreateModal,
            setOpenCreateModal,
            onHandleCreateNewAccount,
        }}>
            <Container>
                {/* Nút thêm mới */}
                <CreateButton />
                {/* Form thêm mới Account*/}
                <ModalCreateNewAccount />
                {/* Form kết quả */}
                <ResultForm data={listAccount} />
            </Container>
        </AccountContext.Provider>
    );
}


export default AccountContainer;