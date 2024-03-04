import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    function login(username, password) {
        if ((password === 'orangebox')) {
            setAuthenticated(true);
            setUsername(username);
            return true;
        }

        setAuthenticated(false);
        return false;
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={ {authenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;