type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};
type ShowTodoProps = {
  initialState: TodoProps[];
  deleteTask: (id: number) => void;
  handleCompletedTasks: (id: number) => void;
};

function ShowTodo({
  initialState,
  deleteTask,
  handleCompletedTasks,
}: ShowTodoProps) {
  return (
    <div className="">
      {initialState.map((task) => (
        <div className="flex items-center gap-2 mb-8">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCompletedTasks(task.id)}
            name="check"
            id=""
            title="isCompleted"
          />
          <p className={`${task.completed && "line-through"}`}>{task.title}</p>
          <button
            className="bg-red-500 text-white p-2"
            onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShowTodo;
