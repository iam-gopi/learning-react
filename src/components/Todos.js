import Todo from "./Todo";
import Base from "./Base";

const Todos = ({ todoItems, handler }) => {
  if (todoItems.length <= 0) return <div>No Tasks added so far</div>;

  return (
    <Base>
      <div>
        {todoItems.map((todo) => (
          <div
            key={todo.task}
            className="rounded my-3 p-2 shadow-sm w-50  bg-dark bg-dark-red task"
            onClick={() => handler(todo)}
          >
            <Todo task={todo} />
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Todos;
