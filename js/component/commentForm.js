import React from 'react';

const Comment = React.createClass({
  render(){
    return(
      <form>
        <div class="form-group">
          <label for="usr">Name:</label>
          <input type="text" class="form-control" id="usr">
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
      </form>
    )
  }

});

export default CommentForm;
