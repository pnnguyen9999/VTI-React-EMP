import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../redux/actions/employee";
import { HashRouter, Link } from "react-router-dom";


function AccountContainer(props) {
    const { data } = useSelector((state) => state.employee);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchEmployeeData());
    }, []);

    return (
        <Container>
            {/* Nút thêm mới */}
            <CreateButton />
            {/* Form thêm mới Account*/}
            <ModalCreateNewAccount />
            {/* Form kết quả */}
            <ResultForm data={data} />
        </Container>
    );
}


export default AccountContainer;