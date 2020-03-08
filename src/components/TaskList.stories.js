import React from 'react';

import TaskList from './TaskList';
import { taskData, actionsData } from './Task.stories';
import store from '../lib/redux';


export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const Default = () => <TaskList store={store} tasks={defaultTasksData} {...actionsData} />;

export const WithPinnedTasks = () => <TaskList store={store} tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <TaskList store={store} loading tasks={defaultTasksData} {...actionsData} />;

export const Empty = () => <TaskList store={store} tasks={[]} {...actionsData} />;