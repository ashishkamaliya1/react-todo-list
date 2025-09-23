import React from 'react';
import './App.css';
import './assets/TodoList.module.css';
import MainHeading from './todo-app/MainHeading.jsx';
import TodoAdd from './todo-app/TodoAdd.jsx';
import TodoList from './todo-app/TodoList.jsx';
import { TodoProvider } from './todo-app/TodoContext.jsx';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <MainHeading />
        <TodoAdd />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;



