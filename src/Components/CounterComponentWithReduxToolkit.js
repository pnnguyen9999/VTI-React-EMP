import { connect } from "react-redux";
import { Button } from "reactstrap";
import COUNTER from "../redux/actions/counter";
import { useSelector, useDispatch } from "react-redux";
import { decremented, incremented, setMessage } from "../redux/reducers/counterReducer";

const CounterComponentWithReduxToolkit = (props) => {
    const data = "helloooooo1";

    const { count, message } = useSelector((state) => state.counterToolkit);

    const dispatch = useDispatch();

    return <div>
        <h1>
            Counter value: {count}
        </h1>
        <h1>
            Message value: {message}
        </h1>
        <Button onClick={() => dispatch(incremented())}>Tang</Button>
        <Button onClick={() => dispatch(decremented())}>Giam</Button>
        <Button onClick={() => dispatch(setMessage(data))}>Update mess</Button>
    </div>;
};

export default CounterComponentWithReduxToolkit;
