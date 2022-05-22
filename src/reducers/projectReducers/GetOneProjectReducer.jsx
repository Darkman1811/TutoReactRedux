//=======================================  TO GET ONE  PROJECT  =======================================================



// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProjectByIdService} from "../../services/ProjectServices";
import {Project} from "../../components/projects/interfaces";

export const getOneProjectThunk = createAsyncThunk(
    'projects/getOne',
    async (projectId, thunkAPI) => {
        let response = {id:0,name:""};
        await getProjectByIdService(projectId).then((value)=>{
            response=value;
        });
        return response;
    }
);

// Modéle du DTO de retour
interface getOneProjectState {
    entity: Project,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialGetOneProject:getOneProjectState= {
    entity: {},
    loading: 'idle'
};

// le reducer en question
export const getOneProjectSlice= createSlice({
    name:"addProject",
    initialState:initialGetOneProject ,
    reducers:{
        resetAddProjects:(state)=> {
            state=initialGetOneProject;
        }
    },
    extraReducers: {
        [getOneProjectThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded";
            state.entity=payload;
        }
    }
})



