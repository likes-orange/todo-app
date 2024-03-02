import React from 'react';
import {useAuth} from "./AuthContext";
import {Navigate} from "react-router-dom";

function AuthenticatedRoute({ children }) {
    const authContext = useAuth();

    if (authContext.authenticated) {
        return children;
    }

    return <Navigate to="/"/>;
}

export default AuthenticatedRoute;