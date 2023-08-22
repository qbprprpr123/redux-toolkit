import { Layout, Button } from 'antd';

const { Header } = Layout;

const TaskHeader = () => {
  return (
    <Header className='task-header'>
      <h2>TASK OA 任务管理系统</h2>
      <Button type='primary' onClick={() => {}}>新增任务</Button>
    </Header>
  );
};

export default TaskHeader;
