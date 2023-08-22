import './Task.scss';
import TaskHeader from '@/views/TASKOA/TaskHeader';
import TaskTable from '@/views/TASKOA/TaskTable';

const Task = () => {
  return (
    <div className='task-banner'>
      <div className='task-box'>
        TASK OA
        <TaskHeader />
        <TaskTable />
      </div>
    </div>
  );
};

export default Task;
