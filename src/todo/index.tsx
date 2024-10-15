import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";

type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};

const initialState = [
  { id: 1, title: "Learn Javascript", completed: false },
  { id: 2, title: "Learn React", completed: true },
  { id: 3, title: "Learn Typescript", completed: false },
];

function TaskApp() {
  const savedTasks = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList")!)
    : initialState;
  const [tasks, setTasks] = useState<TodoProps[]>(savedTasks);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks((prev) => {
      return [
        {
          id: Date.now(),
          title,
          completed: false,
        },
        ...prev,
      ];
    });
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleCompletedTasks = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="pt-20 mx-auto max-w-5xl">
      <h1 className="text-center text-3xl">Task App</h1>
      <AddTodo addTask={addTask} />
      <ShowTodo
        initialState={tasks}
        deleteTask={deleteTask}
        handleCompletedTasks={handleCompletedTasks}
      />
    </div>
  );
}
export default TaskApp;
