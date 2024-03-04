import React from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function WelcomeComponent() {
    const { username } = useParams();

    return (
        <div className="WelcomeComponent">
            <h2>Welcome back, {username}!</h2>
            <div>Check your Todos <Link className="btn btn-success" to="/todos">here</Link></div>
        </div>
    );
}

export default WelcomeComponent;