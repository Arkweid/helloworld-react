import React, { Component } from 'react';
import TodoList from './components/todo/List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
