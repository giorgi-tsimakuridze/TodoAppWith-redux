import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodoAsync(text.trim()));
      setText("");
    }
  };

  const inputStyle = {
    padding: "12px",
    marginRight: "10px",
    width: "350px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={{ marginBottom: "20px", display: "flex" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAdd()}
        placeholder="ახალი ამოცანა..."
        style={inputStyle}
      />
      <button onClick={handleAdd} style={buttonStyle}>
        დამატება ✅
      </button>
    </div>
  );
};

export default TodoInput;
