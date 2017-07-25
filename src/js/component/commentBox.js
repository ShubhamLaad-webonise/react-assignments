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
    return (<ul className="commentList">{
      this.state.commentList.map((comment, key) => {
        return (<Comment
                 author={comment.author}
                 body={comment.body}
                 id={key}
                 key={key}
                 deleteComment={this._deleteComment}/>)
      })
    }</ul>)
  },

  _getCommnetTitle (commentCount) {
    if(!commentCount) {
      return 'No comment';
    } if (commentCount === 1) {
      return '1 comment';
    }
    return commentCount + ' comments';
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
    commentList.push({author: author, body: comment});
    this.setState({
      commentList: commentList
    });
  },

  _deleteComment (id) {
    let commentList = this.state.commentList;
    commentList.splice(id, 1);
    this.setState({
      commentList: commentList
    })
  },

  render () {
    let buttonText = 'Show Comments';
    if(this.state.showComments) {
      buttonText = 'Hide Comments';
    }

    return (
        <div className="container">
          <h2>Event handling with form</h2>
          <CommentForm setValues={this._setValues}/>
          <div className="clearfix">
            <h3 className="pull-left"> {this._getCommnetTitle(this.state.commentList.length)}</h3>
            <a className="pull-right commentButton" onClick={this._handleClick}>{buttonText}</a>
          </div>
          {(this.state.showComments) ? this._getComments() : ''}
        </div>
    );
  }
});

export default CommentBox;
