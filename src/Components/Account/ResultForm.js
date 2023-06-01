import React, { useState } from "react";
import { Table, Container, Button } from "reactstrap";
import ResultFormItem from "./ResultFormItem";
import { v4 as uuidv4 } from 'uuid';

class Employee {
    constructor(id, email, userName, fullName, department, position, createDate) {
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.fullName = fullName;
        this.department = department;
        this.position = position;
        this.createDate = createDate;
    }
}

function ResultForm(props) {
    const initEmp = [
        new Employee(uuidv4(), "an.nguyen@gmail.com", "an.nguyen", "Nguyen An", "sale", "dev", 2020),
        new Employee(uuidv4(), "hung.nguyen@gmail.com", "hung.nguyen", "Nguyen hung", "sale", "dev", 2020),
        new Employee(uuidv4(), "binh.nguyen@gmail.com", "binh.nguyen", "Nguyen binh", "sale", "dev", 2020),
    ];

    const [emps, setEmps] = useState(initEmp);

    const handleAddNew = () => {
        const empName = window.prompt('Nhập tên:', '');
        const empUserName = window.prompt('Nhập username:', '');
        const empFullName = window.prompt('Nhập fullname:', '');

        const newEmp = new Employee(uuidv4(), `${empName}.nguyen@gmail.com`, `${empUserName}`, `${empFullName}`, "sale", "dev", 2020);

        const empClone = [...emps];
        empClone.push(newEmp);
        setEmps(empClone);
    };

    return (
        <Container>
            <br />
            <h3>Danh sách Account</h3>
            <Button onClick={handleAddNew}>Add new</Button>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Cretate Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp => <ResultFormItem key={emp.id} {...emp} />)}
                </tbody>
            </Table>
        </Container>
    );
}


export default ResultForm;