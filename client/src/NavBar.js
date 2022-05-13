import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
    return (
        
        <nav className="nav_bar">
        <NavLink className="nav_item" to="/user">
                {user !== "" ? <>Login</> : null}
        </NavLink>
            <NavLink className="nav_item" to="/collection">
                {user !== "" ? <>Posts</> : null}
        </NavLink>
            <NavLink className="nav_item" to="/user">
                {user !== "" ? <>Log Off</> : <></>}
        </NavLink>
    </nav>

    );
}


export default NavBar;