import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);

    function login(username, password) {
        if ((username === `orangebox` && password === 'orangebox')) {
            setAuthenticated(true);
            return true;
        }

        setAuthenticated(false);
        return false;
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={ {authenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;