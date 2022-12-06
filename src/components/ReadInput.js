import { useState } from "react";
import Todos from "./Todos";
import Base from "./Base";

const ReadInput = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const clickHandler = () => {
    if (task.trim() === "") {
      alert("Task is mandatory");
      return;
    }
    const item = { task: task.trim(), isActive: true };
    let temp = [...todos];
    temp = [...temp, item];
    setTodos(temp);
    setTask("");
  };

  const toggleTaskStatus = (task) => {
    let updatedTasks = todos.map((todo) =>
      todo.task === task.task
        ? { ...todo, isActive: !todo.isActive }
        : { ...todo }
    );
    setTodos(updatedTasks);
  };

  return (
    <Base>
      <div className="d-flex align-items-center my-3">
        <input
          type="text"
          placeholder="Enter Task"
          maxLength="20"
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
        <button className="btn btn-primary mx-3" onClick={clickHandler}>
          Add Task
        </button>
      </div>
      <Todos todoItems={todos} handler={toggleTaskStatus} />
    </Base>
  );
};

export default ReadInput;
