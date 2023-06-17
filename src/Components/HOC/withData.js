import { useContext } from "react";
import { AccountContext } from "../../Container/AccountContainer";

function withData(WrappedComponent) {
    const HOC = () => {
        const accountData = useContext(AccountContext);
        return <WrappedComponent accountData={accountData} />;
    };
    return HOC;
}

export default withData;