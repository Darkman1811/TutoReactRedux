
//=======================================  TO GET ALL THE PROJECTS  ====================================================

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllProjectService} from "../../services/ProjectServices";
import {Project} from "../../components/projects/interfaces";

export const getAllProjectsThunk = createAsyncThunk(
    'projects/getAllProjects',
    async (userId, thunkAPI) => {
        let response = initialProjectsList;
        await getAllProjectService().then((value)=>{
            response=value.data;
        });

        return response;
    }
);



interface ProjectState {
    entities: Project[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

const initialProjectsList:ProjectState= {
        entities: [],
        loading: 'succeeded'
    }
;
export const projectSlice= createSlice({
    name:"project",
    initialState:initialProjectsList ,
    reducers:{
        resetProjects:(state)=> {
           // state=initialProjectsList;
            state.loading='idle';
            return state;
        }
    },
    extraReducers: {
        [getAllProjectsThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload;
            return state;
        }
    }
})

export const {resetProjects}=projectSlice.actions;