import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="list-container">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
