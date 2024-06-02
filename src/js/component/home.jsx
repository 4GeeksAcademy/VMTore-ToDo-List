import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = (event) => {
    setTask(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTaskList([...taskList, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  const toggleTaskCompletion = (index) => {
    const newTaskList = taskList.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  return (
    <div className="text-center mt-5">
      <h1>
        <strong>ToDo List 🎯</strong>
      </h1>
      <form className="mx-5 mt-3 " onSubmit={onSubmitForm}>
        <input
          type="text"
          onChange={addTask}
          className="form-control"
          id="floatingInputValue"
          placeholder="Add some task"
          value={task}
          name="taskTodo"
        />
        <button className="btn btn-dark mt-4" type="submit">
          Add
        </button>
      </form>
      <ul className="list-group mt-4 mx-5">
        {taskList.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.text}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
