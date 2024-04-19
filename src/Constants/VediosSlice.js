import { createSlice } from "@reduxjs/toolkit";

const VediosSlice=createSlice({
    name:"vedios",
    initialState:{
        popularVedio:null,
        musicVedio:null,
        newsVedio:null,
        liveVedio:null,
        sportsVedio:null,
        searchVedio:null,
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
        getSearchVedio:(state,action)=>
        {
             state.searchVedio=action.payload;
        },
    }
})

export const {getPopularVedio,getMusicVedio,getNewsVedio,getLiveVedio,getSportsVedio,getSearchVedio}=VediosSlice.actions;
export default VediosSlice.reducer
