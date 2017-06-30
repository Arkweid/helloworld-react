import _ from 'lodash';
import React, { Component } from 'react';
import TodoInput from './Input.js';
import TodoEntry from './Entry.js';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: JSON.parse(localStorage.getItem('entries')) || []
    };

    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.createEntry = this.createEntry.bind(this);
  }

  createEntry(task) {
    if (this.state.error) { return;}

    this.state.entries.push({
      task,
      id: Date.now()
    });

    localStorage.setItem('entries', JSON.stringify(this.state.entries));
    console.info(localStorage.getItem('entries'));
    this.setState({ entries: this.state.entries });
  }

  deleteEntry(taskIdToDelete) {
    _.remove(this.state.entries, entry => entry.id === taskIdToDelete);
    this.setState({ entries: this.state.entries });
  }

  editEntry(taskId, newTaskText) {
    const foundEntry = _.find(this.state.entries, entry => entry.id === taskId);
    foundEntry.task = newTaskText;
    this.setState({ entries: this.state.entries });
  }

  renderEntries() {
    return _.map(this.state.entries, (entry, index) => <TodoEntry deleteEntry={this.deleteEntry} editEntry={this.editEntry} key={index} id={entry.id} {...entry} />);
  }

  render() {
    return (
      <div className='todo-list' id='todo-list'>
        <TodoInput
          createEntry={this.createEntry}
        />
        {this.renderEntries()}
      </div>
    );
  }
}

export default TodoList;
