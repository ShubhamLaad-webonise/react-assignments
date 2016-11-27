import React from 'react';
import Comment from './comment';

const CommentBox = React.createClass({
  _getComments() {
    const commentList = [
      { id: 1, author: 'Clu', body: 'Just say no to love!' },
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...'}
    ];

    return commentList.map((comment) => {
      return (<Comment
               author={comment.author}
               body={comment.body}
               key={comment.id} />);
    });
  },

  _getCommnetTitle(commentCount){
    if(commentCount === 0){
      return 'No comment';
    } else if(commentCount === 1){
      return '1 comment';
    } else {
      return '${commentCount} comments';
    }
  },

  render () {
    const comments = this._getComments();
    return (
        <div className="container">
          <h2>Join discussion</h2>
          <h3> {this._getCommnetTitle(comments.length)}</h3>
          <ul className="commentList">
            {comments}
          </ul>
        </div>
    );
  }
});

export default CommentBox;
