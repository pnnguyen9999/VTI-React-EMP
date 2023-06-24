import React, { useEffect, useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, updateEmployee } from "../../../redux/actions/employee";

function InputForm(props) {
    const { currentFormData } = useSelector((state) => state.employee);
    const dispatch = useDispatch();
    // sử dụng react để quản lý value trong form
    const [inputEmail, setInputEmail] = useState("");

    useEffect(() => {
        console.log(inputEmail);
    }, [inputEmail]);

    // cái này dùng DOM (tạo ref)
    const emailRef = React.createRef();
    const usernameRef = React.createRef();
    const fullnameRef = React.createRef();
    const departmentRef = React.createRef();
    const postionRef = React.createRef();

    // useEffect(() => {
    //     console.log(emailRef.current.value);
    // }, [emailRef]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            userName: usernameRef.current.value,
            fullName: fullnameRef.current.value,
            department: departmentRef.current.value,
            position: postionRef.current.value
        };
        if (!currentFormData?.id) {
            const data = {
                ...formData
            };
            dispatch(createEmployee(data));
            // onHandleCreateNewAccount(data);
        } else {
            const newData = {
                id: currentFormData.id,
                ...formData
            };
            dispatch(updateEmployee(newData));
            // onHandleEditAccount(newData);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* Email */}
                <FormGroup>
                    <Label for="Email">Email: </Label>
                    {/* <Input
                        id="Email"
                        name="Email"
                        placeholder="Input Email"
                        type="email"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        innerRef={emailRef}
                    /> */}
                    <Input
                        id="Email"
                        name="Email"
                        placeholder="Input Email"
                        type="email"
                        innerRef={emailRef}
                        defaultValue={currentFormData?.email}
                    />
                </FormGroup>


                {/* Username */}
                <FormGroup>
                    <Label for="Username">Username: </Label>
                    <Input
                        id="Username"
                        name="Username"
                        placeholder="Input Username"
                        type="text"
                        innerRef={usernameRef}
                        defaultValue={currentFormData?.userName}
                    />
                </FormGroup>


                {/* Fullname */}
                <FormGroup>
                    <Label for="Fullname">Fullname: </Label>
                    <Input
                        id="Fullname"
                        name="Fullname"
                        placeholder="Input Fullname"
                        type="text"
                        innerRef={fullnameRef}
                        defaultValue={currentFormData?.fullName}
                    />
                </FormGroup>


                {/* Department */}
                <FormGroup>
                    <Label for="Department">Select a Department: </Label>
                    <Input id="Department" name="Department" type="select" innerRef={departmentRef} defaultValue={currentFormData?.department}>
                        <option value={"Bán hàng"}>Bán hàng</option>
                        <option value={"Bảo vệ"}>Bảo vệ</option>
                        <option value={"Giám đốc"}>Giám đốc</option>
                        <option value={"Kỹ thuật"}>Kỹ thuật</option>
                        <option value={"Marketing"}>Marketing</option>
                    </Input>
                </FormGroup>


                {/* Postion */}
                <FormGroup>
                    <Label for="Postion">Select a Postion: </Label>
                    <Input id="Postion" name="Postion" type="select" innerRef={postionRef} defaultValue={currentFormData?.position}>
                        <option value={"Dev"}>Dev</option>
                        <option value={"Test"}>Test</option>
                        <option value={"Scrum_Master"}>Scrum_Master</option>
                        <option value={"PM"}>PM</option>
                    </Input>
                </FormGroup>
                {/* Nút xử lý */}
                <Button type="submit" color="primary"> {!currentFormData?.id ? 'Create' : 'Update'}</Button>
                <Button type="reset" color="danger">Reset</Button>
            </Form>
        </Container>
    );
}


export default InputForm;


