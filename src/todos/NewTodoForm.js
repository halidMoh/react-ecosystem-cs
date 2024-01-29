import React, { useState } from "react";
import "./NewTodoForm.css";
const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState(" ");
  return (
    <div>
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button"> create Todo</button>
    </div>
  );
};

export default NewTodoForm;
