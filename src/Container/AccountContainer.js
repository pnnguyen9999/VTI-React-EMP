import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import withData from "../Components/HOC/withData";


export const AccountContext = createContext();

function AccountContainer(props) {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [listAccount, setListAccount] = useState([]);
    const [currentInputFormData, setCurrentInputFormData] = useState();

    const updateListAccountData = () => {
        setListAccount(listAccount);
        localStorage.setItem("listAccount", JSON.stringify(listAccount));
    };

    const onHandleCreateNewAccount = (newAccount) => {
        listAccount.push(newAccount);
        updateListAccountData();

        setOpenCreateModal(false);
    };

    const onHandleEditAccount = (newAccountData) => {
        const targetAccountIndex = listAccount.findIndex((account) => account.id === newAccountData.id);

        listAccount[targetAccountIndex] = { ...listAccount[targetAccountIndex], ...newAccountData };
        updateListAccountData();

        setOpenCreateModal(false);
        setCurrentInputFormData({});
    };

    const onHandleDeleteAccount = (accountId) => {
        const targetAccountIndex = listAccount.findIndex((account) => account.id === accountId);
        const cloneList = [...listAccount];
        cloneList.splice(targetAccountIndex, 1);
        setListAccount(cloneList);
        localStorage.setItem("listAccount", JSON.stringify(cloneList));
    };


    useEffect(() => {
        if (localStorage && localStorage.getItem("listAccount")) {
            const listAccountLocalStorage = JSON.parse(localStorage.getItem("listAccount"));
            setListAccount(listAccountLocalStorage);
        }
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
                <EasyImageRenderProps render={(data) => <div>{data}</div>} />
                <ParentComponent testRd={(mousePosition) => <div>{mousePosition.mouseX}:{mousePosition.mouseY}</div>} />
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


const ParentComponent = (props) => {
    const [mousePosition, setMousePosition] = useState({
        mouseX: 0,
        mouseY: 0
    });

    const handleSetMousePoistion = (e) => {
        setMousePosition({
            mouseX: e.clientX,
            mouseY: e.clientY
        });
    };
    return <div onMouseMove={handleSetMousePoistion}>
        <h1>ParentComponent</h1>
        {props.testRd(mousePosition)}
    </div>;
};

const EasyImageRenderProps = (props) => {
    const data = "hello from parent component";
    return <div>
        <h1>Easy understand Render Props</h1>
        {props.render(data)}
    </div>;
};


const TestComponentUseData = (props) => {
    return <div>{props?.accountData?.listAccount[1]?.email}</div>;
};

const TestComponentUseDataWithContext = withData(TestComponentUseData);