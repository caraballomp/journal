import React, { useState, useEffect } from "react";
import NewPost from "./NewPost";
import NavBar from "./NavBar";

function Posts() {
const [user, setUser] = useState("stacey")
const [posts, setPosts] = useState("")
const [newPosts, setNewPosts] = useState("")
const [post_text, setPost_text] = useState("");




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

const handleDeletePost = (id) => {
  console.log("delete")
  fetch("http://localhost:3000/posts/"+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log("🔥", err));
}

const handleSubmit = (id) => (e) => {
  console.log(id)
  e.preventDefault()
  const formData ={
    post_text,

  }
  fetch("http://localhost:3000/posts/"+id, {
    method: 'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then((r) => r.json())
  .then(updatePosts => {console.log(updatePosts)})
  };


const handleChange = (event) => {
    setPost_text(event.target.value);
}
  

const data = Object.values(posts).map((post) => {
  return <form key={post.id} className="edit-posts-form" onSubmit= {handleSubmit(post.id)} >
  <div key={post.id}>
   
    <h2>{post.date}</h2>
    <input placeholder="Text" onChange={handleChange} defaultValue={post.post_text} />
    <h4> {post.post_text}</h4> 
    <div>
    <img src={post.image_url} width="200" height="250"/>
    
    </div>
    
    <button onClick={() => handleDeletePost(post.id)} className="form-submit">
        Delete 
      </button>
      <input type="submit" value="Update Post" />
      
    </div>
    </form>
})


  function addPosts (newPosts) {
    setNewPosts([...posts, newPosts])} 

    const [show,setShow]=useState(true) 
    
    return (

<div >
<NavBar classname = "nav" />
    {user !== "" ? <h3>Current User: {user}</h3> : ""}
        <div  className = "posts">  {show? <NewPost addPosts = {addPosts} /> : null} </div>
<div className = "posts"> 

{ data }

</div>
</div>
    );
}

export default Posts;