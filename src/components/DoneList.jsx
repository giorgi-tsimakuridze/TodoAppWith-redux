import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const DoneList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const doneTodos = todos.filter((todo) => todo.completed);

  return (
    <div
      style={{
        border: "1px solid #28a745",
        padding: "15px",
        borderRadius: "5px",
        backgroundColor: "#e9f7ef",
      }}
    >
      <h3
        style={{
          color: "#28a745",
          borderBottom: "1px solid #28a745",
          paddingBottom: "10px",
        }}
      >
        ✅ შესრულებული ამოცანები ({doneTodos.length})
      </h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {doneTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {doneTodos.length === 0 && (
        <p style={{ color: "#888", padding: "10px 0" }}>
          არ არის შესრულებული ამოცანები
        </p>
      )}
    </div>
  );
};

export default DoneList;
