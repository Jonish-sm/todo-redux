import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./style.scss";
import check from "./assets/check.png";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <h1>
          Todo
          <br /> App
        </h1>
        <div>
          <img src={check} alt="logo" />
        </div>
      </div>

      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
