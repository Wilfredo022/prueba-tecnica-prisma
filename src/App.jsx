import { useEffect } from "react";
import { useSelector } from "react-redux";
import { EditTask } from "./components/EditTask";
import { FormTask } from "./components/FormTask";
import { ViewTask } from "./components/ViewTask";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { getDataTask } = useTasks();

  const { activeTask } = useSelector((state) => state.task);

  useEffect(() => {
    getDataTask();
  }, []);

  return (
    <div className='app__container'>
      <h1>Tareas Prisma</h1>
      <div className='app__container-content'>
        <FormTask />
        <ViewTask />
        {activeTask !== null && <EditTask />}
      </div>
    </div>
  );
}

export default App;
