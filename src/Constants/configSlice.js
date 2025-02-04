import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        changeSideBar:true,
        toggleButton:true,
        activeButton:'All',
        showReply:false,
        onFocus:false,
    },
    reducers:
    {
        getSideBar:(state)=>
        {
            state.changeSideBar= !state.changeSideBar;
        },
        closeSideBar:(state)=>
        {
            state.changeSideBar= false;
        },
        AddtoggleButton:(state)=>
        {
            state.toggleButton= !state.toggleButton
        },
        setactiveButton:(state,action)=>
        {
            state.activeButton=action.payload;
        },
        setshowReply:(state,action)=>
            {
                state.showReply=action.payload;
            },
            setonFoucs:(state,action)=>
                {
                   state.onFocus=action.payload;
                }
       
    }
})
export const {getSideBar,closeSideBar,AddtoggleButton,setactiveButton,setshowReply,setonFoucs}=configSlice.actions
export  default configSlice.reducer