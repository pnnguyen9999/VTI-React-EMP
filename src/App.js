import { useState } from "react";
import AccountPage from "./Page/AccountPage";
import withLog from "./Components/HOC/withLog";
import { Button } from "reactstrap";

const AccountPageWithLog = withLog(AccountPage);

function App() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setOpen(!isOpen)}>Click</Button>
      {isOpen && <AccountPageWithLog />}
    </div>
  );
}


export default App;