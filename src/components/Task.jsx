import { useTasks } from "../hooks/useTasks";

export const Task = ({ task }) => {
  const { deleteTask, activeTask } = useTasks();

  const handleEdit = (e) => {
    e.preventDefault();

    activeTask(task);
    window.scrollTo(0, 0);
  };
  return (
    <div className='Task__container'>
      <div className='Task__info'>
        <h3>{task.title}</h3>
        <p>{task.body}</p>
      </div>

      <div className='Task__buttons'>
        <button onClick={handleEdit}>Editar</button>
        <button
          className='button-delete'
          onClick={(e) => {
            e.preventDefault();
            deleteTask(task.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
