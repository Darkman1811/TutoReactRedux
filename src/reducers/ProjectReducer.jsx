import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {deleteProjectService, getAllProjectService} from "../services/ProjectServices";
import {Project} from "../components/projects/interfaces";
import {useDispatch} from "react-redux";


//=======================================  TO GET ALL THE PROJECTS  ====================================================

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


export const deleteProjectsThunk = createAsyncThunk(
    'projects/delete',
    async (projectId, thunkAPI) => {
        let response = initialProjectsList;
         await deleteProjectService(projectId).then((value)=>{
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
    entities: [{id: 1, name: "Abdoulaye"},
        {id: 2, name: "Diaw"}],
    loading: 'idle'
}
;
export const projectSlice= createSlice({
    name:"project",
    initialState:initialProjectsList ,
    reducers:{
        resetProjects:(state)=> {
            state=initialProjectsList;
            }
        },
    extraReducers: {
        [getAllProjectsThunk.fulfilled]:(state,{payload})=>{
            state.loading=false
            state.entities=payload;
           },
        [deleteProjectsThunk.fulfilled]:(state,{payload})=>{
            state.loading=false
            console.log("delete it: "+JSON.stringify(payload));
        }

    }
})

//=======================================  TO DELETE A  PROJECT  =======================================================


export const {getAllProjects} = projectSlice.actions;
export const ProjectReducer=projectSlice.reducer;
