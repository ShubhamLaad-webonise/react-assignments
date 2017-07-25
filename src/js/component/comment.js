import React from 'react';

class Comment extends React.Component {

  propTypes : {
    author: React.PropTypes.string,
    body: React.PropTypes.string
  };

  defaultProps : {
    author: '',
    body: ''
  };

  _deleteComment() {
    this.props.deleteComment(this.props.id);
  }

  render(){
    return(
      <li>
        <div className="clearfix commentHeader">
          <h4 className="pull-left">{this.props.author}</h4>
          <a className="pull-right" onClick={ () => this._deleteComment() }>Delete comment</a>
        </div>
        <p>{this.props.body}</p>
      </li>
    )
  }

}

export default Comment;
