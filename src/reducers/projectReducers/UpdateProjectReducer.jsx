//=============================================== TO DELETE A PROJECT ==================================================
// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteProjectService, updateProjectService} from "../../services/ProjectServices";
import {Project} from "../../components/projects/interfaces";

export const updateProjectsThunk = createAsyncThunk(
    'projects/update',
    async (project, thunkAPI) => {
        let response = initialUpdateProject;
        await updateProjectService(project).then((value) => {
            response = value.data;
        });
        return response;
    }
);

// Modéle du DTO de retour
export interface updateProjectState {
    entitiy: {},
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: null
};

// Valeur initial du DTO de retour
const initialUpdateProject: updateProjectState = {
    entity:{},
    loading: 'idle'
};

// le réducer en question
export const updateProjectSlice = createSlice({
    name: "updateProject",
    initialState: initialUpdateProject,
    reducers: {
        resetUpdateProjects: (state) => {
            state = initialUpdateProject;
            return state
        }
    },
    extraReducers: {
        [updateProjectsThunk.fulfilled]: (state, {payload}) => {
            state.loading = 'succeeded'
        }
    }
})

export const {resetUpdateProjects} = updateProjectSlice.actions