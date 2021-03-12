import React, { useEffect, useState } from 'react';
import actions from '../api'


function evaluateUser(str) {
    if (str.charAt(0) == ""){return "Pig"}
    return "unidentified species"
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
                {/* <p>Post By {evaluateUser(post.post)}</p> */}
                <li key={post._id}><img url={"evaluate"} alt={evaluateUser(post.post) + " image" } /> test</li>
                </div>
            )
        })
    }


    return (
        <>
            <h3>All Posts</h3>
            <ul>{showPosts()}</ul>

        </>
    );
}

export default AllPosts;