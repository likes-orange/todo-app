import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../security/AuthContext";

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFail, setLoginFail] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();

    function handleSubmit() {
        if (authContext.login(username, password)) {
            setLoginSuccess(true);
            setLoginFail(false);
            navigate(`/home/${username}`);
        } else {
            setLoginFail(true);
            setLoginSuccess(false);
        }
    }

    return (
        <div className="LoginComponent">
            <h2>Time to login</h2>
            <div className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username}
                           onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit} className="btn btn-primary">login</button>
                </div>
            </div>
            {loginSuccess && <div className="successMessage">Authenticated successfully</div>}
            {loginFail && <div className="errorMessage">Authentication failed</div>}
        </div>
    );
}

export default LoginComponent;