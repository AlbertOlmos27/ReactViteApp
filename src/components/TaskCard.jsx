import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  
  const { deleteTask, getTaskForEdit } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sml">{task.description}</p>
      <button
        className="bg-lime-500 px-2 py-2 rounded-md mt-4 hover:bg-lime-400"
        onClick={() => getTaskForEdit(task)}
      >
        Editar
      </button>
      <button
        className="bg-red-500 px-2 py-2 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
