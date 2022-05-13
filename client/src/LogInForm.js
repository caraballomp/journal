import { useState } from "react";
import { useHistory } from "react-router-dom";

function LogIn({ handleLoggedUser, handleLogOff,}) {
    const [user, setUser] = useState("");
    const history = useHistory();

    function handleChange(e) {
    setUser(e.target.value);
    }
    function handleSubmit(e) {
        if (user !== "") {
            e.preventDefault();
            handleLoggedUser(user);
            setUser("");
            history.push("/collection");
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
            <input type="submit"  />
        </form>

        </>
    )}
    </div>
    );
}

export default LogIn;