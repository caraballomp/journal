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
        alert("Invalid password or username.");
        }
    }
    return (
        
        <div className="login">
    <>
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Username"
            />

            <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                className="form-text"
            />
            <input type="submit"  />
        </form>
            {/* <button onClick={handleLogOff} className="form-submit">
            Log In
        </button> */}
        </> 
        </div>

    );
}

export default LogIn;