import React from 'react';

const CommentForm = React.createClass({

  getInitialState () {
    return ({
      formKey: Math.random()
    })
  },

  _handleSubmit (event = {preventDefault(){}}) {
    event.preventDefault();
    var author = this.refs.input.value;
    var comment = this.refs.textarea.value;
    if(author && comment) {
      this.props.setValues (author, comment);
      this._resetForm();
    } else {
        alert('please enter values');
    }
  },

  _resetForm () {
      this.setState({
        formKey: Math.random()
      });
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="clear" className="btn">Clear</button>
      </form>
    )
  }
});

export default CommentForm;
