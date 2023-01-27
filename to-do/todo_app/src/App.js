import "./App.css";
import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  // console.log(todos);
  return (
    <div>
      <TodoInput setTodos={setTodos}></TodoInput>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
