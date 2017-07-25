import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formKey: Math.random()
    };
  }

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
  }

  _resetForm () {
      this.setState({
        formKey: Math.random()
      });
  }

  render () {
    return (
      <form className="commentForm" key={this.state.formKey}>
        <div className="form-group">
          <label htmlFor="usr">Name:</label>
          <input ref="input" type="text" className="form-control" id="usr" />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea ref="textarea" className="form-control" rows="5" id="comment"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={ (e) => this._handleSubmit(e) }>Submit</button>
        <button type="button" className="btn" onClick={() => this._resetForm()}>Clear</button>
      </form>
    )
  }
}

export default CommentForm;
