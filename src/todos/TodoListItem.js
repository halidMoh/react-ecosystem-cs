import React from "react";
import "./TodoListItem.css";
const TodoListItem = ({ todo, onRemovePressed, onMarkCompeletedPressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text} </h3>
      <div className="buttons-container">
        {todo.isCompeleted ? null : (
          <button
            onClick={() => onMarkCompeletedPressed(todo.text)}
            className="completed-button"
          >
            Mark as compeleted
          </button>
        )}

        <button
          onClick={() => onRemovePressed(todo.text)}
          className="remove-button"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
