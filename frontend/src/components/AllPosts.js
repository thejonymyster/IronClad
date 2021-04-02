import React, { useEffect, useState } from 'react';
import actions from '../api';
import pigpng from '../img/pig.png';
import '../App.css';
import chickenpng from '../img/chicken.png'
import llamapng from '../img/llama.png'
import horsepng from '../img/horse.png'
import dogpng from '../img/dog.png'
import catpng from '../img/cat.png'
import batpng from '../img/bat.png'
import ferretpng from '../img/ferret.png'
import slothpng from '../img/sloth.png'
import pandapng from '../img/panda.png'


function evaluateUser(str) {
    if (str.charAt(0) == "P"){return "Pig"}
    return "unidentified species"
}

function evaluateImage(str) {
    if (str.charAt(0) == "P"){return pigpng}
    return "unidentifiedpng"
}


function AllPosts(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        actions.getAllPosts().then((allPosts) => {
            setPosts(allPosts.data)
        }).catch(console.error)

    }, [])

    const showPosts = () => {
        return posts.map(post => {
            return (
                <div>
                <p>Post By {evaluateUser(post.post)}</p>
                <li class="boxme" key={post._id}><img class="avatar" src={evaluateImage(post.post)} alt={evaluateUser(post.post) + " image" } /> {post.post.slice(1)}</li>
                </div>
            )
        })
    }


    return (
        <>
            <h3>All Posts</h3>
            <ul class="showall">{showPosts()}</ul>

        </>
    );
}

export default AllPosts;