import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../redux/actions/employee";
import { fetchEmployeeDataToolkit } from "../redux/reducers/employeeReducerTookit";


function AccountContainer(props) {
    const { data } = useSelector((state) => state.employeeToolkit);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchEmployeeDataToolkit());
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