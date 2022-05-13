import React, {useState} from "react";


function NewPosts({ addPosts }) {

const [image_url, setImage_url] = useState("");
const [post_text, setPost_text] = useState("");
const [date, setDate] = useState("");


function handleImage_urlChange(e) {
      setImage_url(e.target.value);
    }
  
    function handlePost_textChange(e) {
      setPost_text(e.target.value);
    }

    function handleDateChange(e) {
      setDate(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const formData ={
        image_url,
        post_text,
        date,

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
        <input placeholder="Date" onChange={handleDateChange} />
        <input placeholder="Image" onChange={handleImage_urlChange} />
        <input placeholder="Write Message" onChange={handlePost_textChange} />
        <input type="submit" value="Share your Journal" />
      </form>
    );
    }

    export default NewPosts;
