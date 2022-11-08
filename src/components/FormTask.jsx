import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTasks } from "../hooks/useTasks";

export const FormTask = () => {
  const { createTask, editTask } = useTasks();

  const { activeTask } = useSelector((state) => state.task);

  const initialValues = {
    title: "",
    body: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
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

    createTask(newTask);
    setError(false);
    setFormValues(initialValues);
  };

  return (
    <div className='formTask__container'>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Agregar</button>
        {error ? <p className='error'>Los campos son obligatorios</p> : null}
      </form>
    </div>
  );
};
