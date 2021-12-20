import React, {useState} from 'react'

function LikeButtons({upvotes, downvotes}) {
    const [votes, setVotes] = useState({up: upvotes, down: downvotes})

    function handleVotes(e) {
        const newVotes = {...votes, [e.target.name]: (votes[e.target.name] + 1 )}
        setVotes(newVotes)
    }

    return(
        <>
            <button name="up" onClick={e => handleVotes(e)} value={votes.up}>{votes.up} 👍</button>
            <button name="down" onClick={e => handleVotes(e)} value={votes.down}>{votes.down} 👎</button>
        </>
    )
}

export default LikeButtons