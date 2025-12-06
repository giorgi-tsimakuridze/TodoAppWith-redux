import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/todoSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <p>იტვირთება ამოცანები...</p>;
  } else if (status === "succeeded") {
    content = (
      <>
        <TodoList />
        <DoneList />
      </>
    );
  } else if (status === "failed") {
    content = <p style={{ color: "red" }}>ჩატვირთვა ვერ მოხერხდა: {error}</p>;
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        📋 Redux Todo აპლიკაცია
      </h1>
      <TodoInput />
      <hr style={{ margin: "30px 0", borderTop: "1px solid #eee" }} />
      {content}
    </div>
  );
}

export default App;
