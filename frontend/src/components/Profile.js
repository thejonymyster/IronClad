import React, { useState, useEffect } from 'react';
import actions from '../api'

function evaluateUser(str) {
    if (str.charAt(0) == "P"){return "Pig"}
    if (str.charAt(0) == "C"){return "Cat"}
    if (str.charAt(0) == "B"){return "Bat"}
    if (str.charAt(0) == "S"){return "Sloth"}
    if (str.charAt(0) == "K"){return "Chicken"}
    if (str.charAt(0) == "L"){return "Llama"}
    if (str.charAt(0) == "F"){return "Ferret"}
    if (str.charAt(0) == "H"){return "Horse"}
    return "unidentified species"
}

function Profile(props) {
    const [myPosts, setMyPosts] = useState([])


    useEffect(() => {
        console.log(props)
        if (!props.user.email) {
            props.history.push('/')
        }
        actions.getMyPosts().then(res => setMyPosts(res.data))
    }, [])

    const showPosts = () => {
        return myPosts.map(post => {
            return (
                <li key={post._id}>{"As a " + evaluateUser(post.post.charAt(0)) + ": " + post.post.slice(1)}</li>
            )
        })
    }

    return (
        <div class="centerprofile">
            <h3>{props.user?.email}</h3>
            <div class="alignprofile">
            {showPosts()}
            </div>
        </div>
    );
}

export default Profile;