import {combineReducers} from "@reduxjs/toolkit";
import {projectSlice} from "./projectReducers/GetAllProjectsReducer";
import {deleteProjectSlice} from "./projectReducers/DeleteProjectReducer";
import {addProjectSlice} from "./projectReducers/AddProjectReducer";
import {getOneProjectSlice} from "./projectReducers/GetOneProjectReducer";
import {updateProjectSlice} from "./projectReducers/UpdateProjectReducer";

const projectReducer=combineReducers(
    {
        projectSliceInfos: projectSlice.reducer,
        deleteProjectSliceInfos: deleteProjectSlice.reducer,
        addProjectSliceInfos: addProjectSlice.reducer,
        getOneProjectSliceInfos: getOneProjectSlice.reducer,
        updateProjectSliceInfos: updateProjectSlice.reducer
    }
)

export default projectReducer;
