import { useState } from "react";
import { handleButton } from "./function/AddButton";
import { handleDeleteTask } from "./function/DeleteButton";

const App = () => {
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  return (
    <div className="w-8/12 m-auto">
      {/* header section  */}
      <h1
        className="text-5xl font-bold 
      text-center my-5 text-black-700"
      >
        To-Do List
      </h1>

      {/* todo list create section  */}
      <div
        className="flex items-center
        justify-center mb-4 my-6 "
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-400
           rounded-bl-lg-full border-e-0
            w-96 px-5 py-2 text-black-500
            focus:outline-none"
          placeholder="Write Your Task Name"
        />
        <button
          onClick={() => handleButton(task, setTask, allTask, setAllTask)}
          type="button"
          className="bg-blue-500
           border border-blue-700
           border-s-0
           text-white font-semibold
           rounded-e-full px-4 py-2
            transition duration-300
            ease-in-out hover:bg-blue-800
            capitalize "
        >
          Add Task
        </button>
      </div>

      {/* todo list store section */}
      <ul className="my-8 mx-auto w-3/4">
        {allTask.map((task, index) => (
          <li
            key={index}
            className="flex items-center
             justify-between bg-blue-200
             border border-gray-200 rounded-bl-lg
              px-8 py-2 mb-2 "
          >
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(index, allTask, setAllTask)}
              className="text-red-500 font-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
