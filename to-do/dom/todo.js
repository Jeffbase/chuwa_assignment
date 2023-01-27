let todos = [];

const body = document.querySelector("body");
const add_button = document.querySelector(".add");
const input = document.querySelector("input");
const todoList = document.querySelector("ol");

const createItem = (type, data, attribute) => {
  let t = document.createElement(type);
  t.textContent = data;
  if (attribute) {
    t.setAttribute("value", attribute);
  }
  return t;
};

add_button.onclick = () => {
  if (!input.value.trim) {
    input.value = "";
    return;
  }
  const todoContent = input.value;
  input.value = "";

  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const deleteButton = document.createElement("button");

  todoText.textContent = todoContent;
  deleteButton.textContent = "Delete";
  todoItem.append(todoText);
  todoItem.append(deleteButton);
  todoList.append(todoItem);

  deleteButton.onclick = () => {
    todoList.removeChild(todoItem);
  };
};
