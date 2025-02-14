import { isAuthenticated } from "auth/auth-helpers";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/#">
                    conduit
                </a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    {isAuthenticated() &&
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/editor">
                                    <i className="ion-compose" />
                                    &nbsp;New Article
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/settings">
                                    <i className="ion-gear-a" />
                                    &nbsp;Settings
                                </NavLink>
                            </li>
                        </>
                    }
                    {!isAuthenticated() &&
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Sign in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">
                                    Sign up
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}