import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue } from "./counter/CounterSlice";

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="w-full h-auto mt-12 flex flex-col items-center justify-center gap-3">
            <button onClick={() => dispatch(incrementByValue(5))} className="btn btn-info">Increment by 5</button>
            <div className="flex items-center justify-center gap-5 w-full">
                <button onClick={() => dispatch(decrement())} className="btn btn-info">Decrement -</button>
                <h1 className="text-5xl m-8">{count}</h1>
                <button onClick={() => dispatch(increment())} className="btn btn-info">Increment +</button>
            </div>
            <button onClick={() => dispatch(decrementByValue(5))} className="btn btn-info">Decrement 5</button>
        </div>
    );
};

export default Counter;