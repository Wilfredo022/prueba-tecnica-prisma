import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
    activeTask: null,
  },
  reducers: {
    readTask: (state, { payload }) => {
      state.task = payload;
    },
    addTask: (state, { payload }) => {
      state.task = [payload, ...state.task];
    },
    onDelete: (state, { payload }) => {
      state.task = state.task.filter((t) => t.id !== payload);
    },
    onActiveTask: (state, { payload }) => {
      state.activeTask = payload;
    },

    onActiveOff: (state) => {
      state.activeTask = null;
    },
    onEditTask: (state, { payload }) => {
      state.task = state.task.map((t) => {
        if (t.id == payload.id) {
          return payload;
        }
        return t;
      });
    },
  },
});

export const {
  readTask,
  addTask,
  onDelete,
  onActiveTask,
  onEditTask,
  onActiveOff,
} = taskSlice.actions;
