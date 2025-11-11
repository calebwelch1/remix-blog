import type { Route } from "./+types/home";
import {useState} from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Todo() {
  interface Todo {
    value: String,
    complete: Boolean,
    date: Number,
  }
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function handleRemoveTodo(index: Number) {
    setTodoList(todoList.filter((el, i) => i != index));
  }

  function handleAddTodo() {
    let input = document.getElementById("newTodo");

    if (input instanceof HTMLInputElement) {
    const newTodo: Todo = {
      value: input.value,
      complete: false,
      date: 1,
    }

    setTodoList((prevList) => [...prevList, newTodo]);

    input.value = "";
    } else {
      console.log("Element not found or not an input");
      return;
    }
  }

  function handleEditTodo(index: any) {
    let editTodo = todoList[index];
    editTodo.complete = !editTodo.complete;
    setTodoList(todoList.splice(index, 0, editTodo));
  }

  return (
    <>
    <ul>
      {todoList.map((item, index) =>
      <li key={index} onClick={()=>handleRemoveTodo(index)}>
        <p className={"" + (item.complete ? "strikethrough" : "")}>{item.value}</p>
        <button className="button border-green" onClick={() => handleEditTodo(index)}>Complete</button>
        <button className={"button border-red"} onClick={() => handleRemoveTodo(index)}>Delete</button>
      </li>
    )}
    </ul>
    <input type="text" placeholder="add a todo" id="newTodo"></input>
    <button onClick={handleAddTodo}>New Todo</button>
    </>
  );
}
