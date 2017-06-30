import React, { Component } from 'react';

class TodoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveDone: false,
      isEditing: false
    };

    this.switchDoneTask = this.switchDoneTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.renderEntry = this.renderEntry.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  switchDoneTask() {
    this.state.haveDone ? this.setState({haveDone: false}) : this.setState({haveDone: true});
  }

  deleteTask() {
    this.props.deleteEntry(this.props.id);
  }

  saveTask() {
    this.props.editEntry(this.props.id, this.refs.editTaskInput.value);
    this.setState({ isEditing: false });
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  renderEntry() {
    if (this.state.isEditing) {
      return(
        <tr>
          <td><input type='text' defaultValue={this.props.task} ref='editTaskInput'></input></td>
          <td><button onClick={this.saveTask}>Save</button></td>
          <td><button onClick={this.onCancelClick}>Cancel</button></td>
        </tr>
      );
    }

    const taskStyle = {
      textDecoration: this.state.haveDone ? 'line-through' : ''
    };

    return(
      <tr>
        <td style={taskStyle}>{this.props.task}</td>
        <td><button onClick={this.switchDoneTask}>{this.state.haveDone ? 'Undone' : 'Done'}</button></td>
        <td><button onClick={this.onEditClick}>Edit</button></td>
        <td><button onClick={this.deleteTask}>Delete</button></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        {this.renderEntry()}
      </div>
    );
  }
}

export default TodoEntry;
