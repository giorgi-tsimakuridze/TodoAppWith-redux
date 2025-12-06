import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, toggleCompleteAsync } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleteAsync(todo));
  };

  const textStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed ? "#888" : "#333",
    flexGrow: 1,
    padding: "0 10px",
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <span style={textStyle}>{todo.text}</span>
      <div>
        <button
          onClick={handleToggle}
          style={{
            marginRight: "8px",
            backgroundColor: todo.completed ? "#ffc107" : "#28a745",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          წაშლა ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
