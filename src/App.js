import AccountPage from "./Page/AccountPage";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <AccountPage />
    </Provider>
  );
}


export default App;