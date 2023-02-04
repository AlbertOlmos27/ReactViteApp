import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [taskForEdit, setTaskForEdit] = useState({})

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  const createTask2 = (task) => { /* referencia a lo que se realiza en la funcion "createTask" */
    let tasksCopy = [...tasks]
    let newTask = {title:task.title, id:task.length, description:task.description} 
    tasksCopy.push(newTask)

    setTasks(tasksCopy) 
  }

  const getTaskForEdit = (task) => {
    setTaskForEdit(task)
  }

  const updateTask = (taskEdit) => {
    let taskCopy = [...tasks] //esta linea realiza una copia del estado tasks
    let indexForReplace = taskCopy.findIndex(task => task.id === taskEdit.id)
    taskCopy[indexForReplace] = taskEdit
    setTasks(taskCopy)
  }

  function deleteTask(taskId) {
    /* para repasar */
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskForEdit,
        deleteTask,
        createTask,
        getTaskForEdit,
        updateTask
      }}
    >
      {props.children} {/*para retroalimentacion // children es para saber que van a haber mas componentes */}
    </TaskContext.Provider>
  );
}

export default TaskContext;

