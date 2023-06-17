import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import employeeApi from "../api/EmployeeApi";


export const AccountContext = createContext();

function AccountContainer(props) {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [listAccount, setListAccount] = useState([]);
    const [currentInputFormData, setCurrentInputFormData] = useState();

    const updateListAccountData = () => {
        setListAccount(listAccount);
    };

    const onHandleCreateNewAccount = (newAccount) => {
        employeeApi.createEmployees(newAccount).then(() => {
            loadData();
        });
        updateListAccountData();
        setOpenCreateModal(false);
    };

    const onHandleEditAccount = (newAccountData) => {
        employeeApi.updateEmployee(newAccountData.id, newAccountData).then(() => {
            loadData();
        });

        setOpenCreateModal(false);
        setCurrentInputFormData({});
    };

    const onHandleDeleteAccount = (accountId) => {
        employeeApi.deleteEmployee(accountId).then(() => {
            loadData();
        });
    };

    const loadData = async () => {
        const res = await employeeApi.getEmployees();
        console.log(res.data);
        setListAccount(res.data);
    };

    useEffect(() => {
        loadData();
        // employeeApi.getEmployees().then((res) => {
        //     setListAccount(res.data)
        // })
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