import React from 'react';
import Comment from './comment';
import CommentForm from './commentForm';

const CommentBox = React.createClass({
  getInitialState () {
    return ({
      showComments : false
    })
  },
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
      return commentCount + ' comments';
    }
  },
_handleClick(){
  this.setState({
    showComments : !this.state.showComments
  })
},
  render () {
    const comments = this._getComments();
    var commentNodes;
    let buttonText = 'Show Comments';
    if(this.state.showComments){
      buttonText = 'Hide Comments';
    }
    if(this.state.showComments) {
      commentNodes = <ul className="commentList">{comments}</ul>;
    }
    return (
        <div className="container">
          <h2>Event handling with form</h2>
          <CommentForm />
          <div className="clearfix">
            <h3 className="pull-left"> {this._getCommnetTitle(comments.length)}</h3>
            <a className="pull-right commentButton" onClick={this._handleClick}>{buttonText}</a>
          </div>
          {commentNodes}
        </div>
    );
  }
});

export default CommentBox;
