import React from 'react';

const Comment = React.createClass({
  render(){
    return(
      <li>
        <div className="clearfix commentHeader">
          <h4 className="pull-left">{this.props.author}</h4>
          <a className="pull-right">Delete comment</a>
        </div>
        <p>{this.props.body}</p>
      </li>
    )
  }

});

export default Comment;
