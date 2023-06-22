import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import employeeApi from "../api/EmployeeApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../redux/actions/employee";


export const AccountContext = createContext();

function AccountContainer(props) {
    const { data } = useSelector((state) => state.employee);
    const dispatch = useDispatch();


    const onHandleDeleteAccount = (accountId) => {
        employeeApi.deleteEmployee(accountId).then(() => {
        });
    };

    useEffect(() => {
        dispatch(fetchEmployeeData());
    }, []);

    return (
        <AccountContext.Provider value={{
            onHandleDeleteAccount,
        }}>
            <Container>
                {/* Nút thêm mới */}
                <CreateButton />
                {/* Form thêm mới Account*/}
                <ModalCreateNewAccount />
                {/* Form kết quả */}
                <ResultForm data={data} />
            </Container>
        </AccountContext.Provider>
    );
}


export default AccountContainer;