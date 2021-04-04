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
    if (str.charAt(0) == "C"){return "Cat"}
    if (str.charAt(0) == "B"){return "Bat"}
    if (str.charAt(0) == "S"){return "Sloth"}
    if (str.charAt(0) == "K"){return "Chicken"}
    if (str.charAt(0) == "L"){return "Llama"}
    if (str.charAt(0) == "F"){return "Ferret"}
    if (str.charAt(0) == "H"){return "Horse"}
    return "unidentified species"
}

function evaluateImage(str) {
    if (str.charAt(0) == "P"){return pigpng}
    if (str.charAt(0) == "C"){return catpng}
    if (str.charAt(0) == "B"){return batpng}
    if (str.charAt(0) == "S"){return slothpng}
    if (str.charAt(0) == "K"){return chickenpng}
    if (str.charAt(0) == "L"){return llamapng}
    if (str.charAt(0) == "F"){return ferretpng}
    if (str.charAt(0) == "H"){return horsepng}
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
                <div class="alignposter">
                    <div class="posterpost">
                        <p>Post By {evaluateUser(post.post)}</p>
                        <div class="boxme" key={post._id}>
                            <img class="avatar" src={evaluateImage(post.post)} alt={evaluateUser(post.post) + " image" } />
                            <div class="postpost">
                                <p class="actualpost">{post.post.slice(1)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


    return (
        <>
            <h2>All Posts</h2>
            <div class="showall">{showPosts()}</div>

        </>
    );
}

export default AllPosts;