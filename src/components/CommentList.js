import React from 'react';
import { connect } from 'react-redux'

const CommentList = ({ comments }) => {
    const renderComments = () => {
        return comments.map(comment => <li key={comment}>{comment}</li>)
    }
    return(
        <div>
            <h4>Comment List</h4>
            <ul>
                {renderComments()}
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);