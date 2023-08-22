import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import reduxPromise from 'redux-promise';
import taskSliceReducer from './features/taskSlice';

export default configureStore({
  // 指定reducer
  reducer: {
    // 按模块管理各个切片
    task: taskSliceReducer,
  },
  // 使用中间件，如果不指定中间件，则默认集成reduxThunk
  middleware: [reduxLogger, reduxPromise],
});
