import { useDispatch } from "react-redux";
import {
  addTask,
  onActiveOff,
  onActiveTask,
  onDelete,
  onEditTask,
  readTask,
} from "../store/tasks/taskSlice";

export const useTasks = () => {
  const dispatch = useDispatch();

  const getDataTask = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const getData = await fetch(url);
    const data = await getData.json();

    try {
      dispatch(readTask(data));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const postData = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(task),
    });

    const response = await postData.json();

    dispatch(addTask(response));
    /*  console.log(response); */
    /*  try {
    } catch (error) {} */
  };
  const deleteTask = async (id) => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    const deleteData = await fetch(url, {
      method: "DELETE",
    });

    const response = await deleteData.json();

    try {
      dispatch(onDelete(id));
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (task) => {
    const url = `https://jsonplaceholder.typicode.com/posts/1`;

    const putData = await fetch(url, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(task),
    });

    try {
      const response = await putData.json();

      console.log(response);

      dispatch(onEditTask(response));
    } catch (error) {
      console.log(error);
    }
  };

  const activeTask = async (task) => {
    /* console.log(task); */
    dispatch(onActiveTask(task));
  };

  const activeOff = async () => {
    dispatch(onActiveOff());
  };

  return {
    getDataTask,
    createTask,
    deleteTask,
    editTask,
    activeTask,
    activeOff,
  };
};
