import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [formEdit, setFormEdit] = useState(false);

  const { createTask, taskForEdit, updateTask } = useContext(TaskContext);

  // taskForEdit = {
    // id: 0,
    // title: "mi primera tarea",
    // description: "mi primera tarea",
  // },

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formEdit){
      updateTask({
        title,
        description,
        id: taskForEdit.id
      })
      setFormEdit(false)
    }else{
      createTask({
        title, // el valor de la llave tiene el mismo nombre que la llave "title:title"
        description,
      });
    }
    setTitle("");
    setDescription("");
  };

  useEffect(() =>{
    if(taskForEdit.title){
      setTitle(taskForEdit.title);
      setDescription(taskForEdit.description);
      setFormEdit(true)
    }
  }, [taskForEdit])

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white rounded-md"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
