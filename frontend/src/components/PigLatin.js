import React, {useState} from 'react';
import actions from '../api';
import humanity from './Home'

function latin(str) {
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].includes(arr[i].charAt(0))) {
            arr[i] += "ay"
        } else {
            let swipe = arr[i].charAt(0)
            arr[i] = arr[i].slice(1) + swipe + "ay"
        }
    }
    return "🐷: " + arr.join(" ")
}

function ghost(str) {
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (["o", "O"].includes(arr[i])) {
            arr[i] = "o O o O"
        }
    }
    return "ghost emoji: " + arr.join(" ")
}

function alien(str) {
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(arr[i])) {
            arr[i] = "X"
        }
        if (["A", "E", "I", "O", "U"].includes(arr[i])) {
            arr[i] = "x"
        }
        if ([" "].includes(arr[i])) {
            arr[i] = "."
        }
    }
    return "alien emoji: " + arr.join("")
}


function hoglatin(str) {
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].includes(arr[i].charAt(0))) {
            arr[i] += "awh"
        } else {
            let swipe = arr[i].charAt(arr[i].length - 1)
            arr[i] = swipe + arr[i].slice(0, -1)
        }
    }
    return "hog: " + arr.join(" ")
}

function PigLatin(props, propHumanity) {

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
        // humanity = "A pig"
        if (propHumanity === "Human") {
            setPost("👤: " + event.target.value)
        }
        if (propHumanity === "Pig") {
            setPost(latin(event.target.value))
        }
    }

    return ( <div>
        <h3>Post Like A Undefined</h3>

        <form onSubmit = {handleSubmit}>
        <input onChange = {handleChange} type = "text" name = "post" placeholder = "Input"/>
        <button> Submit </button> </form></div>
    );
}

export default PigLatin;