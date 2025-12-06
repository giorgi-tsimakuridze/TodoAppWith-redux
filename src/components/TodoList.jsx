import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <div
      style={{
        border: "1px solid #007bff",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    >
      <h3
        style={{
          color: "#007bff",
          borderBottom: "1px solid #007bff",
          paddingBottom: "10px",
        }}
      >
        ✍️ გასაკეთებელი ამოცანები ({pendingTodos.length})
      </h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {pendingTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {pendingTodos.length === 0 && (
        <p style={{ color: "#888", padding: "10px 0" }}>
          ყველაფერი გაკეთებულია! 🎉
        </p>
      )}
    </div>
  );
};

export default TodoList;
