import { createSlice } from "@reduxjs/toolkit";

const VediosSlice=createSlice({
    name:"vedios",
    initialState:{
        popularVedio:null,
        musicVedio:null,
        newsVedio:null,
        liveVedio:null,
        sportsVedio:null,
    },
    reducers:{
        getPopularVedio:(state,action)=>
        {
             state.popularVedio=action.payload;
        },
        getMusicVedio:(state,action)=>
        {
             state.musicVedio=action.payload;
        },
        getNewsVedio:(state,action)=>
        {
             state.newsVedio=action.payload;
        },
        getLiveVedio:(state,action)=>
        {
             state.liveVedio=action.payload;
        },
        getSportsVedio:(state,action)=>
        {
             state.liveVedio=action.payload;
        },
    }
})

export const {getPopularVedio,getMusicVedio,getNewsVedio,getLiveVedio,getSportsVedio}=VediosSlice.actions;
export default VediosSlice.reducer
