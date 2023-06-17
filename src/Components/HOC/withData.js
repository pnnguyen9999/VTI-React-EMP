import { useContext } from "react";
import { AccountContext } from "../../Container/AccountContainer";

function withData(WrappedComponent) {
    const HOC = () => {
        const dataContext = useContext(AccountContext);
        return <WrappedComponent dataContext={dataContext} name="abc" />;
    };
    return HOC;
}

export default withData;