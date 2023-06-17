import { useEffect } from "react";

function withLog(WrappedComponent) {
    const HOC = (props) => {
        useEffect(() => {
            console.log('mounted !');
            return () => {
                console.log('unmount !');
            };
        }, []);
        return <WrappedComponent {...props} style={{ color: "red", fontSize: 50 }} />;
    };

    return HOC;
}

export default withLog;