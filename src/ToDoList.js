import React, { useState } from 'react';
const uuidv1 = require('uuid/v1');


const ToDoList = () => {

  const [input, setInput] = useState("");
  const [todos, setToDos] = useState([]);

  const addTodo = e => {
    if (e.key === "Enter" && input.length > 0) {
      setToDos(todos => [...todos, { task: input, completed: false }]);
      setInput("");
    }
  };

  return (

    <div>
      <h2>My Todo List</h2>
      <ol className="numbered">
        { 
          todos.length > 0 
          ? todos.map(((todo)=>{
              return <li key={uuidv1()}> {todo.task} </li>
            }))
          : <p>You currently have no todos.</p>
        }
      </ol>
   
      <input
        type="text"
        placeholder="Add a todo"
        onChange={e => setInput(e.target.value)}
        onKeyDown={addTodo}
        value={input}
      />
    </div>
  )
}

export default ToDoList;