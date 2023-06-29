import { Link, Route, Routes, useParams } from "react-router-dom";
import AccountPage from "../Page/AccountPage";
import Home from "../Page/Home";


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
            <Link to="/users/1">User 1</Link>
            <Link to="/users/2">User 2</Link>
        </div>
    </div>;
};

const UserDetail = () => {
    const params = useParams();
    console.log(params);
    const { id } = params;
    return <div>User detail: {id}</div>;
};

export const routes = <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account-management" element={<AccountPage />} />
    <Route path="/users/*" element={<Users />} />
</Routes>;
