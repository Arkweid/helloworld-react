import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    }
  }

  createTask(event) {
    event.preventDefault();
    const inputValue = this.refs.todoInputField.value;

    if (inputValue.length >= 1) {
      this.setState({ error: null });
      this.props.createEntry(inputValue);
    } else {
      this.setState({ error: 'Empty Value' });
    }
  }

  renderError() {
    if (!this.state.error) {return;}

    return (
      <div style={{color: 'red'}}>
        {this.state.error}
      </div>
    );
  }

  render() {
    return (
      <div>
      <form onSubmit={this.createTask.bind(this)}>
        <input type='text' className='todo-input' ref='todoInputField' placeholder='Enter thing to do' />
        <button>
          Add
        </button>
      </form>
        {this.renderError()}
      </div>
    );
  }
}

export default TodoInput;
