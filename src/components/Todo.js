const Todo = ({ text, todo, todos, setTodos }) => {
  //Trash function
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  //Check function
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // Task validation
  const validation = (task) => {
    if (task !== "") {
      return (
        <div className="new-todo-container">
          <li className={`todo-list  ${todo.completed ? "completed" : ""}`}>
            {text}
          </li>
          <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
          </button>
          <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      );
    }
  };
  return <>{validation(text)}</>;
};

export default Todo;
