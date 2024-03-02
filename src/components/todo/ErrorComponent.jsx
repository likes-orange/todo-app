import React from 'react';
import {Link} from "react-router-dom";

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h2>Page not found</h2>
            <div>
                Go back to <Link to="/login">home page</Link>
            </div>
        </div>
    );
}

export default ErrorComponent;