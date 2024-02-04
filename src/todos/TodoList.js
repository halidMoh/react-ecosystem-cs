import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, markCompeleted } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onMarkCompeletedPressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkCompeletedPressed={onMarkCompeletedPressed}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkCompeletedPressed: (text) => dispatch(markCompeleted(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
