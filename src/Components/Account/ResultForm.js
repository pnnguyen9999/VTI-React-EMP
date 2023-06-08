import React, { useState } from "react";
import { Table, Container, Button } from "reactstrap";
import ResultFormItem from "./ResultFormItem";
import { v4 as uuidv4 } from 'uuid';


function ResultForm(props) {
    return (
        <Container>
            <br />
            <h3>Danh sách Account</h3>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Create Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(emp => <ResultFormItem key={emp.id} {...emp} />)}
                </tbody>
            </Table>
        </Container>
    );
}


export default ResultForm;