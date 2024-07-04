import { configureStore } from "@reduxjs/toolkit";
import points from "./slices/pointsSlice";
import categories from './slices/categorySlice'
const store = configureStore({
  reducer: {
    points,
    categories
  },
});
export default store;
