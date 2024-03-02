import React from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function WelcomeComponent() {
    const { username } = useParams();

    function callRestApi() {
        axios.get("http://localhost:8080/hello-world")
            .then((response) => console.log(`success: ${response}`))
            .catch((error) => console.log(`error: ${error}`))
            .finally(() => console.log("finished call"))
    }
    return (
        <div className="WelcomeComponent">
            <h2>Welcome back, {username}!</h2>
            <div>Check your Todos <Link to="/todos">here</Link></div>
            <button className="btn btn-success" onClick={callRestApi}>Call API</button>
        </div>
    );
}

export default WelcomeComponent;