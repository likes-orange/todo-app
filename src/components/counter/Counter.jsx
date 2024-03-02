import React, {useState} from 'react';
import './Counter.css'
import CounterButton from "./CounterButton";

export default function Counter() {
    const [totalCount, setTotalCount] = useState(0);

    function incrementTotalCount(by) {
        setTotalCount(totalCount + by)
    }

    function decrementTotalCount(by) {
        setTotalCount(totalCount - by)
    }

    function resetTotalCount() {
        setTotalCount( 0)
    }

    return (
        <div className="Counter">
            <span className="totalCount">{totalCount}</span>
            <CounterButton by={1} incrementTotalCount={incrementTotalCount} decrementTotalCount={decrementTotalCount} />
            <CounterButton by={2} incrementTotalCount={incrementTotalCount} decrementTotalCount={decrementTotalCount} />
            <CounterButton by={5} incrementTotalCount={incrementTotalCount} decrementTotalCount={decrementTotalCount} />
            <button className="resetTotalCountButton" onClick={resetTotalCount}>Reset</button>
        </div>
    );
}