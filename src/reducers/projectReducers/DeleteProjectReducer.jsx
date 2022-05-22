//=============================================== TO DELETE A PROJECT ==================================================
// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteProjectService} from "../../services/ProjectServices";
import {Project} from "../../components/projects/interfaces";

export const deleteProjectsThunk = createAsyncThunk(
    'projects/delete',
    async (projectId, thunkAPI) => {
        let response = initialDeleteProject;
        await deleteProjectService(projectId).then((value) => {
            response = value.data;
        });
        return response;
    }
);

// Modéle du DTO de retour
export interface deleteProjectState {
    entities: Project[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: null
};

// Valeur initial du DTO de retour
const initialDeleteProject: deleteProjectState = {
    entities: [],
    loading: 'idle'
};

// le réducer en question
export const deleteProjectSlice = createSlice({
    name: "deleteProject",
    initialState: initialDeleteProject,
    reducers: {
        resetDeleteProjects: (state) => {
            console.log("inital delete state");
            state = initialDeleteProject;
            return state
        }
    },
    extraReducers: {
        [deleteProjectsThunk.fulfilled]: (state, {payload}) => {
            state.loading = 'succeeded'
        }
    }
})

export const {resetDeleteProjects} = deleteProjectSlice.actions