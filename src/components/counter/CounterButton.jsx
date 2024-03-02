import React from 'react';
import PropTypes from "prop-types";

export default function CounterButton({by, incrementTotalCount, decrementTotalCount}) {
    return (
        <div className="CounterButton">
            <div>
                <button className="counterButton" onClick={() => incrementTotalCount(by)}>+{by}</button>
                <button className="counterButton" onClick={() => decrementTotalCount(by)}>-{by}</button>
            </div>
        </div>
    );
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}