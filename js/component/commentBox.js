import React from 'react';
import Comment from './comment';
import CommentForm from './commentForm';

const CommentBox = React.createClass({

  getInitialState () {
    return ({
      showComments : false,
      commentList: []
    })
  },

  _getComments() {
    return this.state.commentList.map((comment) => {
      return (<Comment
               author={comment.author}
               body={comment.body}
               key={comment.key}
               id={comment.key}
               deleteComment={this._deleteComment}/>)
    });
  },

  _getCommnetTitle (commentCount) {
    if(!commentCount) {
      return 'No comment';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return commentCount + ' comments';
    }
  },

  _handleClick() {
    if(this.state.commentList.length) {
      this.setState({
        showComments : !this.state.showComments
      })
    }
  },

  _setValues (author, comment) {
    let commentList = this.state.commentList;
    let newId = commentList.length;
    commentList.push({author: author, body: comment, key: newId});
    this.setState({
      commentList: commentList
    })
  },

  _deleteComment (key) {
    let commentList = this.state.commentList;
    commentList.splice(key, 1);
    this.setState({
      commentList: commentList
    })
  },

  render () {
    const comments = this._getComments();
    var commentNodes;
    let buttonText = 'Show Comments';
    if(this.state.showComments) {
      buttonText = 'Hide Comments';
    }
    if(this.state.showComments) {
      commentNodes = <ul className="commentList">{comments}</ul>;
    }
    return (
        <div className="container">
          <h2>Event handling with form</h2>
          <CommentForm setValues={this._setValues}/>
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
