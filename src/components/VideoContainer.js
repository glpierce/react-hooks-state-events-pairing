import React from 'react'
import LikeButtons from './LikeButtons'

function VideoDetails({video}) {
    return(
        <>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <LikeButtons upvotes={video.upvotes} downvotes={video.downvotes}/>
        </>
    )
}

export default VideoDetails