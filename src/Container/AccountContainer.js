import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";

export const AccountContext = createContext();

function AccountContainer(props) {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);

    const [listAccount, setListAccount] = useState([]);

    const onHandleCreateNewAccount = (accountNew) => {
        console.log("accountNew: ", accountNew);

        listAccount.push(accountNew);

        // Set lại state listAccount
        setListAccount(listAccount);

        // Lưu dữ liệu vào LocalStorage
        localStorage.setItem("listAccount", JSON.stringify(listAccount));
        // Thực hiện đóng Form sau khi thêm mới
        setOpenCreateModal(false);
    };

    useEffect(() => {
        console.log(listAccount);
    }, [listAccount]);

    useEffect(() => {
        if (localStorage && localStorage.getItem("listAccount")) {
            let listAccount_LocalStorage = JSON.parse(
                localStorage.getItem("listAccount")
            );
            console.log("listAccount_LocalStorage: ", listAccount_LocalStorage);
            setListAccount(listAccount_LocalStorage);
        }
    }, []);



    return (
        <AccountContext.Provider value={{ isOpenCreateModal, setOpenCreateModal, onHandleCreateNewAccount }}>
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
