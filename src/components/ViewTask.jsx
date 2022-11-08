import { useSelector } from "react-redux";
import { Task } from "./Task";

export const ViewTask = () => {
  const { task } = useSelector((state) => state.task);
  return (
    <div className='viewTask__container'>
      {task.map((t) => {
        return (
          <div key={t.id}>
            <Task task={t} />
          </div>
        );
      })}
    </div>
  );
};
