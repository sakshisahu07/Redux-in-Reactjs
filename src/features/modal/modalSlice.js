import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isModalOpen:false,
    editTodo:null
}

const modalSlice=createSlice({
    name:'modal',
    initialState,
    reducers:{
        openModal:(state,action)=>{
            state.isModalOpen=true;
            state.editTodo=action.payload;
        },
        closeModal:(state)=>{
            state.isModalOpen=false;
            state.editTodo=null;
        }
    }
})
export const {openModal,closeModal}=modalSlice.actions;
export default modalSlice.reducer;