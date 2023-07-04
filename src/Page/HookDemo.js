import React, { useCallback, useMemo, useReducer, useState } from "react";
import { Button } from "reactstrap";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
};

const reducer = (state, action) => {
    switch (action.hanhDong) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error('action không đúng !');
    }
};

const HookDemo = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    const [counter, setCounter] = useState(0);

    const expensiveCalculate = () => {
        const res = 55;
        console.log('calculated !');
        return res;
    };

    const resultCalculated = useMemo(() => {
        return expensiveCalculate();
    }, []);

    const [result, setResult] = useState(0);

    const testComponentAction = useCallback(() => {
        console.log('action triggered !');
    }, []);

    // const testComponentAction = useMemo(() => {
    //     return () => {
    //         console.log('action triggered !');
    //     };
    // }, []);

    const defaultStyle = { display: "flex", flexDirection: "column", gap: "5px" };

    return <div style={defaultStyle}>
        <h6>{resultCalculated}</h6>
        <h6>{counter}</h6>
        <Button onClick={() => setCounter((prev) => ++prev)}>increase</Button>
        <Button onClick={() => setResult((prev) => ++prev)}>change result value</Button>
        <ExampleComponent result={result} action={testComponentAction} />
        <div style={defaultStyle}>
            <h3>useReducer Area</h3>
            {state.count}
            <button onClick={() => dispatch({ hanhDong: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ hanhDong: 'DECREMENT' })}>Decrement</button>
        </div>
    </div>;
};

export default HookDemo;

const ExampleComponent = React.memo(({ result, action }) => {
    console.log('ExampleComponent re-rendered !');

    return <div style={{ display: "flex", flexDirection: "column" }}>
        ExampleComponent {result}
        <button onClick={action}>click me</button>
    </div>;
});
