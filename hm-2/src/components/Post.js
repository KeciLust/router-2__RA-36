import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function Post(props) {
    const { info } = props;
    let nav = useNavigate();

    const view = () => {
        nav(`/post/${info.id}`, { replace: true });
    }
    return (
        <div className='postBox' onClick={view} id={info.id}>{info.content}</div>
    )
}

Post.propTypes = {
    info: PropTypes.object.isRequired,
}

export default Post
