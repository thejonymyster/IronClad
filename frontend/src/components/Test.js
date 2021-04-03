import React, { useState, useEffect } from 'react';

function Test () {

    let [title, setTitle] = useState('')

    return (
        <div>
            <input onChange={event => setTitle(event.target.value)}></input>
            <p>{title}</p>
        </div>
    )
}

export default Test;