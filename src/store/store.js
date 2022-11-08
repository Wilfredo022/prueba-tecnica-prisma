import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./tasks/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});
