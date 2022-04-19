const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // Obtaining value from input
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // Obtaining the data from input
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="add-button" type="submit" onClick={submitTodoHandler}>
        <i className="fa-plus plus-icon"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
