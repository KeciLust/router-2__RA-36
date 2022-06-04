import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";


function ChangePostPage() {
    let {id} = useParams();
    const [state, setState] = useState('');
    const onChange = (e) => {
        setState(prevValue => prevValue = e.target.value)
    }
    let nav = useNavigate();
    const onClickAdd = async (e) => {
        e.preventDefault();
        if (state === '') { return }
        const response = await fetch('http://localhost:7777/posts', {
            method: 'Post',
            body: JSON.stringify({
                'id': id, 'content': state
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 204) { nav(`/post/${id}`, { replace: true }) }
    }

    const onClickRemove = () => {
        nav('/', { replace: true })
    }
    return (<>

        <div className='createPostPageBox'>
            <button className='createPostPageButtonRemove' onClick={onClickRemove}>&#10060;</button>
            <input className='createPostPageInput' type='text' placeholder='Введите пост.' value={state} onChange={onChange} />
            <button className='createPostPageButtonAdd' onClick={onClickAdd}>Сохранить</button>
        </div>
    </>
    )
}



export default ChangePostPage
