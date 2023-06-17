function withAuth(WrappedComponent) {
    const HOC = () => {
        const isValid = true;
        if (isValid) {
            return <WrappedComponent />;
        } else {
            return <div>please login</div>;
        }
    };

    return HOC;
}

export default withAuth;