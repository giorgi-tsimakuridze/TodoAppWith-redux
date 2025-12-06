import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (text) => {
    const newTodo = {
      text,
      completed: false,
    };
    const response = await axios.post(API_URL, newTodo);
    return response.data;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/toggleCompleteAsync",
  async (todo) => {
    const newCompletedStatus = !todo.completed;
    await axios.patch(`${API_URL}/${todo.id}`, {
      completed: newCompletedStatus,
    });
    return { id: todo.id, completed: newCompletedStatus };
  }
);

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(toggleCompleteAsync.fulfilled, (state, action) => {
        const todo = state.todos.find((t) => t.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      });
  },
});

export default todoSlice.reducer;
