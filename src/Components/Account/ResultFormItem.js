import React from "react";
import { Button } from "reactstrap";


function ResultFormItem(props) {
    const handleEdit = () => {
        console.log(props.id);
    };
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.email}</td>
            <td>{props.userName}</td>
            <td>{props.fullName}</td>
            <td>{props.department}</td>
            <td>{props.position}</td>
            <td>{props.createDate}</td>
            <td>
                <Button color="warning" onClick={handleEdit}>Edit</Button>
            </td>
            <td>
                <Button color="warning">Delete</Button>
            </td>
        </tr>
    );
}


export default ResultFormItem;
