import React, {useState} from "react"
import Comment from './Comment'

function CommentsList({comments}) {
    const [showComments, setShowComments] = useState(true)

    function toggleComments() {
        setShowComments(!showComments)
    }

    const allComments = comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    
    return(
        <>
            <button onClick={toggleComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <br></br>
            <br></br>
            <div style={{borderTop: "solid"}}>
                {showComments ? <h2>{comments.length} Comments</h2> : <></>}
                {showComments ? allComments : <></>}
            </div>
        </>
    )
}

export default CommentsList