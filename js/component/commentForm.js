import React from 'react';

const CommentForm = React.createClass({

  getInitialState () {
    return ({
      formKey: Math.random()
    })
  },

  _handleSubmit (event) {
    event.preventDefault();
    var author = this.refs.input.value;
    var comment = this.refs.textarea.value;
    if(author && comment) {
      this.props.setValues (author, comment);
      this.setState({
        formKey: Math.random()
      })
    } else {
        alert('please enter values');
    }
  },

  render () {
    return (
      <form className="commentForm" onSubmit={this._handleSubmit} key={this.state.formKey}>
        <div className="form-group">
          <label htmlFor="usr">Name:</label>
          <input ref="input" type="text" className="form-control" id="usr" />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea ref="textarea" className="form-control" rows="5" id="comment"></textarea>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
});

export default CommentForm;
