import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Login } from "./login";

//import "./App.css";

const todos = [
  { text: "cortar cebolla", completed: true },
  { text: "pelar papa", completed: false },
  { text: "hervir agua", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />
      
     <TodoList>
        {todos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
        </TodoList>
      <CreateTodoButton />
      <Login/>
      
    </React.Fragment>
  );
}

export default App;
