import { useState } from "react";


function LogIn({ handleLoggedUser, handleLogOff,}) {
    const [user, setUser] = useState("");

    function handleChange(e) {
    setUser(e.target.value);
    }
    function handleSubmit(e) {
        if (user !== "") {
            e.preventDefault();
            handleLoggedUser(user);
            setUser("");
    } else {
        alert("Need a username to enter.");
        }
    }
    return (
        <div>
        {user !== "" ? (
            <button onClick={handleLogOff} className="form-submit">
            Log Off
        </button>
    ) : (
    <>
        <form onSubmit={handleSubmit} className="form-sw">
            <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                className="form-text"
            />
            <input type="submit" className="form-submit" />
        </form>

        </>
    )}
    </div>
    );
}

export default LogIn;