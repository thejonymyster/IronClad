import React, { useState } from 'react';
import actions from '../api';
import humanity from './Home'

function latin(str){
    let arr = str.split(" ")
    for(let i = 0; i < arr.length; i++){
        if (["a","A","e","E","i","I","o","O","u","U"].includes(arr[i].charAt(0))){
            arr[i] += "ay"
        }else{
            let swipe = arr[i].charAt(0)
            arr[i] = arr[i].slice(1) + swipe + "ay"
        }
    }
    humanity = "A pig"
    return arr.join(" ")
}

function PigLatin(props) {

    let [post, setPost] = useState('')

    const handleSubmit = (event) => {
        //Send it to the server! 
        event.preventDefault()

        actions.pigLatin(post)
            .then(newPost => {
                console.log('new post!', newPost)
                //Redirect to all-posts page
                props.history.push(`all-posts`)
            }).catch(console.error)
    }

    const handleChange = (event) => {
        //On typing setPost 
        setPost(latin(event.target.value))
    }

    return (
        <>
            <h3>Post Like A Pig</h3>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="post" placeholder="Input" />
                <button>Submit</button>
            </form>

        </>
    );
}

export default PigLatin;