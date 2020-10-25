//The useRef() hook gives us a way to retain values
//for the entire lifespan of the component.
//const inputRef = useRef(null);

import React, { useState, useRef } from "react";
// get the input highlighted even after u pressed button: using useref
function App() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [todosList, setTodosList] = useState([]);
  const inputRef = useRef(null); //note
  function handleChange(event) {
    setNewTodoValue(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    setTodosList((prevTodosList) => [...prevTodosList, newTodoValue]);
    setNewTodoValue("");
    console.log(inputRef);
    inputRef.current.focus(); //useref is an obj having properties and methods
  }

  const allTodos = todosList.map((todo) => <p key={todo}>{todo}</p>);

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          name="todo"
          value={newTodoValue}
          onChange={handleChange}
        />
        {/*note above*/}
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  );
}

export default App;
