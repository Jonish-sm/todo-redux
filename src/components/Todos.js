import React from "react";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todos">
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>

            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
