import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: v4(), label: "TypeScript" },
      { id: v4(), label: "React" },
      { id: v4(), label: "Redux-toolkit" }
    ],
    inputTaskValue: "",
    selectedEditTask: undefined
  },
  reducers: {
    addTask: (state) => {
      const newTask = {
        id: v4(),
        label: state.inputTaskValue
      };
      if (state.inputTaskValue.length) {
        state.todos.push(newTask);
      }
      state.inputTaskValue = "";
    },
    deleteTask: (state, action) => {
      const idxTask = state.todos.findIndex(
        (task) => task.id === action.payload
      );
      state.todos.splice(idxTask, 1);
      // state.todos.filter((task, i) => i !== action.payload);
    },
    editTask: (state, action) => {
      const currentTask = {
        id: action.payload.id,
        label: action.payload.label
      };
      // const idxTask = state.todos.findIndex(
      //   (task) => task.id === action.payload
      // );
      // state.inputTaskValue = state.todos[idxTask].label;
      state.inputTaskValue = currentTask.label;
      // state.todos[idxTask].label = state.inputTaskValue;
      state.selectedEditTask = currentTask;
      // state.todos[idxTask].label = state.inputTaskValue;
    },
    // editAddTask: (state, action) => {
    //   state.todos.map((task, i) =>
    //     i !== action.payload.selectedEditTask ? task : action.payload.value
    //   );
    //   state.selectedEditTask = undefined;
    // },
    updateValue: (state, action) => {
      state.inputTaskValue = action.payload;
    }
  }
});

export const {
  addTask,
  deleteTask,
  updateValue,
  editTask,
  editAddTask
} = todoSlice.actions;

export default todoSlice.reducer;
