import React, { useState } from 'react';

const ToDoList = () => {
  let [todo, setToDo] = useState([]);

  return (

    <div>
      <div>Hello World</div>
      <input
        type="text"
        placeholder="Add a todo"
        value={todo}
        onChange={e => setToDo(e.target.value)}
      />
    </div>
  )
}

export default ToDoList;