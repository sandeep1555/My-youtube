import { createSlice } from "@reduxjs/toolkit";


const SearchCache=createSlice({
    name:"cache",
    initialState:{
    },
    reducers:{
        getSearchCache:(state,action)=>
        {
            state=Object.assign(state,action.payload);
        }
    }
})


export const {getSearchCache}=SearchCache.actions;

export  default SearchCache.reducer