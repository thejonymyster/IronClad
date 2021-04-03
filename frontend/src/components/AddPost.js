// import React, { useState } from 'react';
// import actions from '../api';
// import humanity from './Home'

// function AddPost(props) {

//     let [post, setPost] = useState('')

//     const handleSubmit = (event) => {
//         //Send it to the server! 
//         event.preventDefault()

//         actions.addPost(post)
//             .then(newPost => {
//                 console.log('new post!', newPost)
//                 //Redirect to all-posts page
//                 props.history.push(`all-posts`)
//             }).catch(console.error)
//     }

//     const handleChange = (event) => {
//         //On typing setPost 
//         // humanity = "A human"
//         setPost("👤: " + event.target.value)
//     }

//     return (
//         <>
//             <h3>Post Like A Human</h3>

//             <form onSubmit={handleSubmit}>
//                 <input onChange={handleChange} type="text" name="post" placeholder="Input" />
//                 <button>Submit</button>
//             </form>

//         </>
//     );
// }

// export default AddPost;

import React, { useState } from 'react';
import actions from '../api'
import DropdownHelper from './DropdownHelper.js'
import ReactDOM from 'react-dom'
import propAnimal from '../App.js'
import { piglatin } from './RegexWizard';
require('./RegexWizard')

function animal(str){
    return str
}

function AddPost(props) {

    let [post, setPost] = useState('')
    let [title, setTitle] = useState('')

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
        setPost("P" + animal(event.target.value))
    }

    return (
        <>
            <h2>Make a AddPost</h2>

            {/* <div id="dropdown"></div>

            <DropdownHelper />

            <form onSubmit={handleSubmit}>

                <select value = "dropdown">
                    <option value = "P" selected>Pig Latin</option>
                    <option value = "C">Cat Meow</option>
                    <option value = "D">Dog Bark</option>
                </select>
                <input onChange={handleChange} type="text" name="post" placeholder="Make a post..." />
                <button>📬</button>
            </form> */}

            <div>
                <select value = "dropdown">
                    <option value = "P">Pig Latin</option>
                    <option value = "C">Cat Meow</option>
                    <option value = "B">Bat Banter</option>
                </select>
                <input name="post" autoComplete="off" placeholder="Make a post..." onChange={event => setTitle(event.target.value)}></input>
                <p>{title}</p>
            </div>

        </>
    )
    
}

export default AddPost;