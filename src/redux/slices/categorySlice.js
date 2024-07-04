import { createSlice } from "@reduxjs/toolkit";

const initialState = {
categories:[]
};

const categorySlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categories = action.payload;
    },
    isAvaible(state,action){
if((action.payload.points-action.payload.cost)>0){
  const findCategory=state.find(item=>item.id==action.payload.id)
  return {
    ...findCategory,
    avaible:true
  }
}
    }
  },
});

export const {setCategory,isAvaible } = categorySlice.actions;
export default categorySlice.reducer;
