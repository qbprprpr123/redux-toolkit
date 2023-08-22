// Task版块的切片，包含reducer & action-creator
import { createSlice } from '@reduxjs/toolkit';

const asyncFn = () => {
  return new Promise((resolve) => {
    const list = [{
      id: 1,
      type: '未修改',
    }];
    resolve(list);
  });
};

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    taskList: null,
  },
  // 编写不同业务逻辑下，对公共状态的更改
  reducers: {
    getAllTaskList(state, action) {
      // state: redux中的公共状态信息，基于immer库管理，无需自己再克隆
      // action: 派发的对象，我们无需考虑行为标识的问题。传递的其他信息，都是以action.payload传递进来的值
      state.taskList = action.payload;
    },
    removeTaskList(state, { payload }) {
      console.log(payload);
      if (!state.taskList.length) return;
      // console.log(state.taskList.filter((item) => item.id !== +payload));
      state.taskList = state.taskList.filter((item) => item.id !== +payload);
    },
    updateTaskList(state, { payload }) {
      state.taskList = state.taskList.map((item) => {
        const newItem = { ...item };
        if (+item.id === +payload && newItem.type === '未修改') {
          newItem.type = '已修改';
        } else if (+item.id === +payload && newItem.type === '已修改') {
          newItem.type = '未修改';
        }
        return newItem;
      });
    },
  },
});

// 从切片中获取actionCreator：此处结构的方法和上面的reducers中的方法仅仅是函数名相同，方法执行，返回需要派发的行为对象：后期可以基于dispatch进行任务派发
// getAllTaskList([]) => { type: 'task/getAllTaskList', paylaod: [] }
const { getAllTaskList, updateTaskList, removeTaskList } = taskSlice.actions;
// function taskReducer(state = initial, action) {
//   switch(action.type) {
//     case 'task/getAllTaskList':
//       // 执行这个方法，把state/action都传进去
//       break;
//     // ...
//   }
// }

// 实现异步派发
export const getAllTaskListAsync = async () => {
  let list = [];
  try {
    list = await asyncFn();
  } catch (e) {
    return e;
  }
  return getAllTaskList(list);
};

export const updateAllTaskList = (id) => {
  return updateTaskList(id);
};

export const removeAllTaskList = (id) => {
  console.log(id);
  return removeTaskList(id);
};

export default taskSlice.reducer;
