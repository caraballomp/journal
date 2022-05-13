import React, { useState, useEffect } from "react";
import NewPost from "./NewPost";
import NavBar from "./NavBar";

function Posts() {
const [user, setUser] = useState("stacey")
const [posts, setPosts] = useState("")
const [newPosts, setNewPosts] = useState("")
const [post_text, setPost_text] = useState("");
let count = 0;




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
 
  return <span> 
    <td> 

  <form key={post.id} className="edit-posts-form" onSubmit= {handleSubmit(post.id)} >

  <div key={post.id}>
    <h2>{post.date}</h2>
    <input placeholder="Update text here" onChange={handleChange} />
    <h4> {post.post_text}</h4> 
    <div>
    <img src={post.image_url} width="350" height="350"/>
    
    </div>
    
    <button onClick={() => handleDeletePost(post.id)} className="form-submit">
        Delete 
    </button>

            <input type="submit" value="Update Post" />
    </div>
    </form>
    </td>
    </span>
    
    
})


  function addPosts (newPosts) {
    setNewPosts([...posts, newPosts])} 

    const [show,setShow]=useState(true) 
    
    return (

<div >

    {user !== "" ? <h3>Current User: {user}</h3> : ""}
        <div  className = "posts">  
            {show? <NewPost addPosts = {addPosts} /> : null} </div>
                <div className = "posts"> 
<table><tr>  

{ data }

</tr></table>

</div>
</div>
    );
}

export default Posts;