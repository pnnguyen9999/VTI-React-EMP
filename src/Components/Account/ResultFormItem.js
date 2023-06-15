import React, { useContext } from "react";
import { Button } from "reactstrap";
import { AccountContext } from "../../Container/AccountContainer";


function ResultFormItem(props) {
    const { listAccount, setOpenCreateModal, setCurrentInputFormData, onHandleDeleteAccount } = useContext(AccountContext);

    const handleEditAccount = () => {
        const currentData = listAccount.find((account) => account.id === props.id);
        setCurrentInputFormData(currentData);
        setOpenCreateModal(true);
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
                <Button color="warning" onClick={handleEditAccount}>Edit</Button>
            </td>
            <td>
                <Button color="warning" onClick={() => onHandleDeleteAccount(props.id)}>Delete</Button>
            </td>
        </tr>
    );
}


export default ResultFormItem;
