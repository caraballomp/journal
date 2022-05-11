import React, {useState} from "react";


function NewPosts({ addPosts }) {

const [image_url, setImage_url] = useState("");
const [post_text, setPost_text] = useState("");


function handleTitleChange(e) {
      setImage_url(e.target.value);
    }
  
    function handleAuthorChange(e) {
      setPost_text(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const formData ={
        image_url,
        post_text,

      }
      fetch("http://localhost:3000/posts", {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((r) => r.json())
      .then(newPosts => {addPosts(newPosts)})
      };
    
// map
    return (
      <form className="new-posts-form" onSubmit= {handleSubmit} >
        <input placeholder="Image" onChange={handleTitleChange} />
        <input placeholder="Write Message" onChange={handleAuthorChange} />
        <input type="submit" value="Share your Journal" />
      </form>
    );
    }

    export default NewPosts;
