import React, { useState } from 'react'

const CommentBox = () => {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setComment('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <h4>Comment</h4>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
            <div>
                <button>Submit comment</button>
            </div>
        </form>
    )
}

export default CommentBox;