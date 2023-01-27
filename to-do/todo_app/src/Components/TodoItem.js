const TodoItems = ({ todo, setTodos, index }) => {
  const { todoContent, isCompleted } = todo;
  const modTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo, i) => {
        if (i !== index) {
          return todo;
        }
        console.log(todo);
        return { ...todo, isCompleted: !todo.isCompleted };
      });
    });
  };
  return (
    <li>
      <span onDoubleClick={modTodo}>{todoContent}</span>
      <button
        onClick={() => {
          console.log("click");
          setTodos((prevTodos) => {
            return [
              ...prevTodos.slice(0, index),
              ...prevTodos.slice(index + 1),
            ];
          });
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItems;
