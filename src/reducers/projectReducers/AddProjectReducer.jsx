
//=======================================  TO ADD A  PROJECT  =======================================================



// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addProjectService} from "../../services/ProjectServices";
import {Project} from "../../components/projects/interfaces";

export const addProjectThunk = createAsyncThunk(
    'projects/add',
    async (project, thunkAPI) => {
        let response = initialAddProject;
        await addProjectService(project).then((value)=>{
            response=value.data;
        });
        return response;
    }
);

// Modéle du DTO de retour
interface addProjectState {
    entities: Project,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialAddProject:addProjectState= {
    entities: {},
    loading: 'idle'
};

// le reducer en question
export const addProjectSlice= createSlice({
    name:"addProject",
    initialState:initialAddProject ,
    reducers:{
        resetAddProjects:(state)=> {
            state.loading="idle";
        }
    },
    extraReducers: {
        [addProjectThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload
        }
    }
})



export const {resetAddProjects}=addProjectSlice.actions;