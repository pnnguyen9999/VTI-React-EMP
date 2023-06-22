import { connect } from "react-redux";
import { Button } from "reactstrap";
import COUNTER from "../redux/actions/counter";

const CounterComponent = (props) => {
    const data = "helloooooo";
    return <div>
        <h1>
            Counter value: {props.count}
        </h1>
        <h1>
            Message value: {props.message}
        </h1>
        <Button onClick={() => props.tang()}>Tang</Button>
        <Button onClick={() => props.giam()}>Giam</Button>
        <Button onClick={() => props.updateMess(data)}>Update mess</Button>
    </div>;
};

const mapStateToProps = (state) => {
    return {
        count: state.count,
        message: state.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMess: (mess) => dispatch({ type: COUNTER.UPDATE_MESS, mess }),
        tang: () => dispatch({ type: COUNTER.INCREMENT }),
        giam: () => dispatch({ type: COUNTER.DECREMENT })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);