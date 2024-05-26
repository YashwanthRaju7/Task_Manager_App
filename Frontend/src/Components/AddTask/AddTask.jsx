import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import "./AddTask.css";

function AddTask() {
  const [newTask, setNewTask] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');

  const addTask = () => {
    const token = localStorage.getItem('token');
    const newTaskData = {
      task: newTask,
      status: newStatus,
      category: newCategory,
      deadline: newDeadline,
      priority: newPriority,
      userId: userId
    };

    fetch(`http://127.0.0.1:5000/tasks/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(newTaskData),
    })
      .then((res) => {
        console.log(res)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Task added successfully:', data);
        setNewTask("");
        setNewStatus("");
        setNewCategory("");
        setNewDeadline("");
        setNewPriority("");
        navigate(`/taskmanager/${userId}`);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="add-task-container">
      <h2 className="task-heading">Add Task</h2>
      <form className="form-container">
        <div className="task-input-line">
          <label htmlFor="taskInput"><b>Task</b>:</label>
          <input autoComplete="on"
            id="taskInput"
            className="form-control"
            type="text"
            placeholder="Enter Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="task-input-line">
          <label htmlFor="statusInput"><b>Status</b>:</label>
          <input autoComplete="on"
            id="statusInput"
            className="form-control"
            type="text"
            placeholder="Enter Status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          />
        </div>
        <div className="task-input-line">
          <label htmlFor="categoryInput"><b>Category</b>:</label>
          <input autoComplete="on"
            id="categoryInput"
            className="form-control"
            type="text"
            placeholder="Enter Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <div className="task-input-line">
          <label htmlFor="deadlineInput"><b>Deadline</b>:</label>
          <input autoComplete="on"
            id="deadlineInput"
            className="form-control"
            type="datetime-local"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
          />
        </div>
        <div className="task-input-line">
          <label htmlFor="priorityInput"><b>Priority</b>:</label>
          <input autoComplete="on"
            id="priorityInput"
            className="form-control"
            type="text"
            placeholder="Enter Priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          />
        </div>
        <div className="buttons">
            <button onClick={addTask} className="button button-add">
            Add
            </button>
        </div>
      </form>
      <Link to={`/taskmanager/${userId}`} className="arrow"><TiArrowBack /></Link>
    </div>
  );
}

export default AddTask;
