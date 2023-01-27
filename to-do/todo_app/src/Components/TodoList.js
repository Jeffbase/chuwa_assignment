import TodoItems from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ol>
      {todos.map((todo, index) => {
        console.log("list", todo);
        return (
          <TodoItems
            todo={todo}
            index={index}
            setTodos={setTodos}
            key={`${todo.todoContent}-${index}`}
          />
        );
      })}
    </ol>
  );
};

export default TodoList;
