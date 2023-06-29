import AccountPage from "./Page/AccountPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { routes } from "./Router/routes";
import { Link } from "react-router-dom";
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
          <Link to="/users">Users</Link>
        </li>
      </ul>
      {routes}
    </Provider>
  );
}


export default App;