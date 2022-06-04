import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function ViewPostPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const info = data.find(el => el.id === Number(id));

  let nav = useNavigate();
  const remove = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:7777/posts/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 204) { nav('/', { replace: true }) }
  }

  const change = (e) => {
    e.preventDefault();
    nav(`/post/change/${id}`, { replace: true })
  }

  const onClickRemove = () => {
    nav('/', {replace: true})
}
  if (!info) { return };
  return (<>
    <div className='viewPostPageBox'>
    <button className='viewPostPageX' onClick={onClickRemove}>&#10060;</button>
      <p className='viewPostPageP'>{info.content}</p>
      <button className='viewPostPageChange' onClick={change}>Изменить</button>
      <button className='viewPostPageRemove' onClick={remove}>Удалить</button>
    </div>
  </>)
}



export default ViewPostPage

