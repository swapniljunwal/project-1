"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Task Manager</h1>

      <div className="mt-4">
        <input
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="mt-4">
        {tasks.map((task: any) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}