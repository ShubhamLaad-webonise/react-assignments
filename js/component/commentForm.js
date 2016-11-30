import React from 'react';

const CommentForm = React.createClass({
  render(){
    return(
      <form className="commentForm">
        <div className="form-group">
          <label for="usr">Name:</label>
          <input type="text" className="form-control" id="usr" />
        </div>
        <div className="form-group">
          <label for="comment">Comment:</label>
          <textarea className="form-control" rows="5" id="comment"></textarea>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }

});

export default CommentForm;
