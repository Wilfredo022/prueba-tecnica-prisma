import { useState } from "react";
import { useSelector } from "react-redux";
import { useTasks } from "../hooks/useTasks";

export const EditTask = () => {
  const { activeTask } = useSelector((state) => state.task);

  const { activeOff, editTask } = useTasks();

  const initialValues = {
    title: "",
    body: "",
  };

  const [formValues, setFormValues] = useState(activeTask);
  const [error, setError] = useState(false);

  const { title, body } = formValues;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      return setError(true);
    }

    const newTask = {
      title,
      body,
    };

    editTask(newTask);

    activeOff();
  };

  const handleClose = (e) => {
    e.preventDefault();

    activeOff();
  };

  return (
    <div className='editTask__container'>
      <form onSubmit={handleSubmit}>
        <h3>Editar tarea</h3>
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
          placeholder='Nombre de la tarea'
        />
        <textarea
          rows={3}
          type='text'
          name='body'
          value={body}
          onChange={handleChange}
          placeholder='Descripción de la tarea'
        />
        <button type='submit'>Editar</button>
        {error ? <p>Los campos son obligatorios</p> : null}
        <button onClick={handleClose} className='close'>
          x
        </button>
      </form>
    </div>
  );
};
