import { Link, Route, Routes, useParams, useSearchParams, unstable_usePrompt } from "react-router-dom";
import AccountPage from "../Page/AccountPage";
import Home from "../Page/Home";
import { Button } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    const formik = useFormik({
        initialValues: {
            user: '',
            email: '',
        },
    // validate: (values) => {
    //     const errors = {};

        //     if (values.user === '') {
        //         errors.user = 'Vui lòng nhập user name';
        //     }

        //     if (!values.email) {
        //         errors.email = 'Vui lòng nhập email';
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }

        //     return errors;
        // },
        validationSchema: Yup.object({
            user: Yup.string().required('Vui lòng nhập user name'),
            email: Yup.string().email('Vui lòng nhập đúng định dạng email').required('Vui lòng nhập email')
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    });
    return <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="user">User name</label>
            <input id="user" name="user" type="text" onChange={formik.handleChange} value={formik.values.user} />
            {formik.errors.user ? <div style={{ color: "red" }}>{formik.errors.user}</div> : null}

        </div>
        <div>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
        </div>
        <Button type="submit">Submit</Button>
    </form>;
}

export const routes = <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account-management" element={<AccountPage />} />
    <Route path="/users/*" element={<Users />} />
    <Route path="/form" element={<FormTest />} />
</Routes>;