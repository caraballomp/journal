import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch,Route,
} from "react-router-dom";
import ReactDOM from "react-dom";
import NewPost from "./NewPost";
import NavBar from "./components/NavBar";

function App() {
const [user, setUser] = useState("stacey")
const [posts, setPosts] = useState("")
const [newPosts, setNewPosts] = useState("")
const [meaningful, setMeaningful] = useState(true)




  useEffect(() => {
    fetch("http://localhost:3000/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then(setPosts)
      .catch((err) => console.log("🔥", err));
  }, []);
console.log(posts)

const data = Object.values(posts).map((post) => {
  return <div key={post.id}>
    <h3> {post.post_text}</h3>
    <div> {post.image_url}</div>
    </div>
})

  console.log(data)

  function addPosts (newPosts) {
    setNewPosts([...posts, newPosts])} 

    const [show,setShow]=useState(true) 
    
  
  return (

<div>


        <NavBar user={user} />
        {user !== "" ? <h3>Current User: {user}</h3> : ""}

<div> { data } </div>
<div>  {show? <NewPost addPosts = {addPosts} /> : null} </div>
</div>
    
  );
}

export default App;