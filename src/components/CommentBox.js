import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

const CommentBox = ({ saveComment, fetchComments }) => {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        saveComment(comment)
        setComment('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Comment</h4>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
                <div>
                    <button>Submit comment</button>
                </div>
            </form>
            <button className="fetchComments" onClick={fetchComments}>Fetch comment</button>
        </div>
    )
}



export default connect(null, actions)(CommentBox);