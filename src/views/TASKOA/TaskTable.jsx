import { Table, Button, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllTaskListAsync, updateAllTaskList, removeAllTaskList } from '@/store/features/taskSlice';

const TaskTable = () => {
  const { taskList } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  // 表格数据列
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '状态',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Action',
      key: 'id',
      fixed: 'right',
      width: 100,
      render: (_, record) => (
        <div>
          <Space>
            <Button type='link' onClick={() => dispatch(updateAllTaskList(record.id))}>修改</Button>
            <Button type='link' onClick={() => dispatch(removeAllTaskList(record.id))}>删除</Button>
          </Space>
        </div>
      ),
    },
  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (!taskList) {
        const { payload } = await dispatch(getAllTaskListAsync());
        setTableData(payload);
      }
    };

    getData();
  }, [taskList]);

  useEffect(() => {
    setTableData(taskList);
  }, [taskList]);

  return (
    <div>
      <Table rowKey={(record) => record.id} dataSource={tableData} columns={columns} />
    </div>
  );
};

export default TaskTable;
