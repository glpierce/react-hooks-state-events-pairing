import React from 'react'

function Comment({comment}) {
    return(
        <>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </>
    )
}

export default Comment