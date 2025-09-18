import React, { useState } from 'react';
import './App.css';
import './assets/TodoList.module.css';
import MainHeading from './todo-app/MainHeading.jsx';
import TodoAdd from './todo-app/TodoAdd.jsx';
import TodoList from './todo-app/TodoList.jsx';

function App() {
  const initialPersons = [
    { name: "Jay", date: "2025-09-18" },
    { name: "Hiren", date: "2025-09-18" },
    { name: "Viral", date: "2025-09-18" },
    { name: "Ashish", date: "2025-09-18" },
    { name: "Kunal", date: "2025-09-18" }
  ];

  const [persons, setPersons] = useState(initialPersons);

  // Function to add new todo
  const todoDetail = (name, date) => {
    const newPerson = { name, date };
    setPersons([...persons, newPerson]);
  };

  const deleteTodo = (iteamName) => {
    const updatedPersons = persons.filter((p) => p.name !== iteamName);
    setPersons(updatedPersons);


  };
  return (
    <div className="container">
      <MainHeading />
      <TodoAdd todoDetail={todoDetail} />
      <TodoList persons={persons} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;



