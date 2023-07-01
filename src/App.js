import AccountPage from "./Page/AccountPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { routes } from "./Router/routes";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Page/Home";
import { Button } from "reactstrap";
function App() {
  return (
    <Provider store={store}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account-management">Account Page</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
      <AppLayout>
        {routes}
      </AppLayout>
    </Provider>
  );
}

const AppLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    const isUserValid = true;
    if (isUserValid) {
      navigate('/users/1?status=active&extraInfo=invidual');
    } else {
      navigate('/');
    }
  };
  return <>
    <div>header
      <Button onClick={handleRedirect}>Navigate to user 1</Button>
    </div>
    {children}
    <div>footer</div>
  </>;
}


export default App;