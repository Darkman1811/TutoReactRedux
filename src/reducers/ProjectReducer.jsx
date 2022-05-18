import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {
    addProjectService,
    deleteProjectService,
    getAllProjectService,
    getProjectByIdService
} from "../services/ProjectServices";
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
           }

    }
})

//=======================================  TO DELETE A  PROJECT  =======================================================



// Fonction d'appel asyncrone au service
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

// Modéle du DTO de retour
export interface deleteProjectState {
    entities: Project[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialDeleteProject:ProjectState= {
        entities: [{id: 1, name: "Abdoulaye"},
            {id: 2, name: "Diaw"}],
        loading: 'idle'
    };

// le réducer en question
export const deleteProjectSlice= createSlice({
    name:"deleteProject",
    initialState:initialDeleteProject ,
    reducers:{
        resetDeleteProjects:(state)=> {
            state=initialProjectsList;
        }
    },
    extraReducers: {
        [deleteProjectsThunk.fulfilled]:(state,{payload})=>{
            state.loading=false
        }
    }
})

//=======================================  TO ADD A  PROJECT  =======================================================



// Fonction d'appel asyncrone au service
export const addProjectThunk = createAsyncThunk(
    'projects/add',
    async (project, thunkAPI) => {
        let response = initialProjectsList;
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
    entities: {id: 0, name: ""},
    loading: 'idle'
};

// le reducer en question
export const addProjectSlice= createSlice({
    name:"addProject",
    initialState:initialAddProject ,
    reducers:{
        resetAddProjects:(state)=> {
            state=initialAddProject;
        }
    },
    extraReducers: {
        [addProjectThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload
        }
    }
})




//=======================================  TO GET ONE  PROJECT  =======================================================



// Fonction d'appel asyncrone au service
export const getOneProjectThunk = createAsyncThunk(
    'projects/getOne',
    async (projectId, thunkAPI) => {
        let response = {id:0,name:""};
        console.log("getting one project");
        await getProjectByIdService(projectId).then((value)=>{
            response=value;

        });
        return response;
    }
);

// Modéle du DTO de retour
interface getOneProjectState {
    entities: Project,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialGetOneProject:addProjectState= {
    entities: {id: 0, name: ""},
    loading: 'idle'
};

// le reducer en question
export const getOneProjectSlice= createSlice({
    name:"addProject",
    initialState:initialAddProject ,
    reducers:{
        resetAddProjects:(state)=> {
            state=initialAddProject;
        }
    },
    extraReducers: {
        [getOneProjectThunk.fulfilled]:(state,{payload})=>{
             state.loading="succeeded"
            state.entities=payload
        }
    }
})

export const ProjectReducer=projectSlice.reducer;

export const {resetAddProjects}=addProjectSlice.actions;
