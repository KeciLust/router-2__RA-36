import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

import CreatePost from './CreatePost';
import Post from './Post';


function Main() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:7777/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <>
            <CreatePost />
            {data.map(el => <Post info={el} key={nanoid()} />)}
        </>
    )
}



export default Main
