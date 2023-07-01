import { Link, Route, Routes, useParams, useSearchParams, unstable_usePrompt } from "react-router-dom";
import AccountPage from "../Page/AccountPage";
import Home from "../Page/Home";
import { Button } from "reactstrap";
import { useState } from "react";


const Users = () => {
    return <div>
        <h2>Users</h2>
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/abc" element={<div>123</div>} />
            <Route path=":id" element={<UserDetail />} />
        </Routes>
    </div>;
};

const UserList = () => {

    return <div>
        <div>
            <Link to="/users/1?status=active&extraInfo=invidual">User 1</Link>
            <Link to="/users/an.nguyen?status=disable&extraInfo=admin">User 2</Link>
        </div>
    </div>;
};

const UserDetail = () => {
    const params = useParams();
    const { id } = params;

    const [searchParams] = useSearchParams();
    const status = searchParams.get('status');
    const extraInfo = searchParams.get('extraInfo');

    return <>
        <div>User detail: {id}</div>
        <div>User status: {status}</div>
        <div>User extra info: {extraInfo}</div>
    </>;
};

const FormTest = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    const [isDraft, setIsDraft] = useState(false);

    unstable_usePrompt("Hello from usePrompt -- Are you sure you want to leave?", isDraft);

    const handleSave = () => {
        setIsDraft(false);
        console.log({ user, email });
    };
    return <div>
        <h2>Form</h2>
        <form>
            <label>
                Tên:
                <input type="text" name="name" value={user} onChange={(e) => { setUser(e.target.value); setIsDraft(true); }} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value); setIsDraft(true); }} />
            </label>
        </form>
        <Button onClick={handleSave}>Lưu</Button>
    </div>;
}

export const routes = <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account-management" element={<AccountPage />} />
    <Route path="/users/*" element={<Users />} />
    <Route path="/form" element={<FormTest />} />
</Routes>;