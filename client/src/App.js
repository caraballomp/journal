import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch,Route,
} from "react-router-dom";
import ReactDOM from "react-dom";
import Posts from "./Posts"
import LogInForm from "./LogInForm"
import NavBar from "./NavBar"



function App() {
  const [user, setUser] = useState();

  // function handleLoggedUser(user) {
  //   setUser(user);
  //   console.log(`${user} is logged in.`);
  // }

  function handleLogOff() {
    setUser("");
  }

    
  return (

<div>
<div id="app">
      <h1 className= "title"> Journal</h1>
      <h3 className= "sectitle" >When you feel like it....</h3>
      <Router>
        <NavBar user={user} />
        {/* {user !== "" ? <h3>Current User: {user}</h3> : ""} */}
        <Switch>
    
          <Route path="/collection">
            <Posts user={user}/>
          </Route>

          <Route path="/collection">
            <LogInForm
              // handleLoggedUser={handleLoggedUser}
              handleLogOff={handleLogOff}
              user={user}
            />
          </Route>
          <Redirect to="/users"></Redirect>
        </Switch>
      </Router>
    </div>
</div>
    
  );
}

export default App;