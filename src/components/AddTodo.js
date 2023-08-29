import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="addtodo">
      <form onSubmit={addTodoHandler}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
