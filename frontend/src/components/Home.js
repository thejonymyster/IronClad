import React from 'react';

var humanity = "A human"

function Home(props) {
    return (
        <>
            <h3>Welcome to the cool cat website</h3>
            <p>You are: {humanity}</p>
        </>
    );
}

export default Home;