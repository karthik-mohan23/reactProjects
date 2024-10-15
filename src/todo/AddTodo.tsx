import { useState } from "react";

type AddTodoProps = {
  addTask: (title: string) => void;
};

function AddTodo({ addTask }: AddTodoProps) {
  const [text, setText] = useState("");

  return (
    <div className="mb-8">
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          addTask(text);
          setText("");
        }}>
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="username">
          Add Task
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="bg-green-400 rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
