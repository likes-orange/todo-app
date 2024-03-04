import React from 'react';
import {useParams} from "react-router-dom";

function TodoComponent() {

    const { id} = useParams();

    return (
        <div className="container">
        <h2>Enter Todo Details for ID: {id}</h2>
        </div>
    )
}

export default TodoComponent;