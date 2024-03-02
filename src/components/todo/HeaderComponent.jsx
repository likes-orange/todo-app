import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

function HeaderComponent() {
    const authContext = useAuth();
    console.log(authContext.authenticated);
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black"
                           href="https://www.facebook.com/argemtueres">SFBCC</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                { authContext.authenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/home/orangebox">Home</Link></li> }
                                { authContext.authenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li> }
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            { !authContext.authenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li> }
                            { authContext.authenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={() => authContext.logout()}>Logout</Link></li> }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;