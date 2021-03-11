import React, { useState } from 'react';
import actions from '../api';
import humanity from './Home'

function AddPost(props) {

    let [post, setPost] = useState('')

    const handleSubmit = (event) => {
        //Send it to the server! 
        event.preventDefault()

        actions.addPost(post)
            .then(newPost => {
                console.log('new post!', newPost)
                //Redirect to all-posts page
                props.history.push(`all-posts`)
            }).catch(console.error)
    }

    const handleChange = (event) => {
        //On typing setPost 
        // humanity = "A human"
        setPost("👤: " + event.target.value)
    }

    return (
        <>
            <h3>Post Like A Human</h3>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="post" placeholder="Input" />
                <button>Submit</button>
            </form>

        </>
    );
}

export default AddPost;