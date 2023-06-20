import { connect } from "react-redux";
import { Button } from "reactstrap";
import COUNTER from "../redux/actions/counter";
import { useSelector, useDispatch } from "react-redux";

const CounterComponentWithReduxHook = (props) => {
    const data = "helloooooo";

    const { count, message } = useSelector((state) => state);

    const dispatch = useDispatch();

    return <div>
        <h1>
            Counter value: {count}
        </h1>
        <h1>
            Message value: {message}
        </h1>
        <Button onClick={() => dispatch({ type: COUNTER.INCREMENT })}>Tang</Button>
        <Button onClick={() => dispatch({ type: COUNTER.DECREMENT })}>Giam</Button>
        <Button onClick={() => dispatch({ type: COUNTER.UPDATE_MESS, mess: data })}>Update mess</Button>
    </div>;
};

export default CounterComponentWithReduxHook;
