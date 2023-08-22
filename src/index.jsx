import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux';
import Task from './views/TASKOA/Task';
import 'antd/dist/antd.css';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Task />
    </Provider>
  </ConfigProvider>,
);
