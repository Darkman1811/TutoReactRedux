import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./TodoReducer";
import {projectSlice} from "./projectReducers/GetAllProjectsReducer";
import {addProjectSlice} from "./projectReducers/AddProjectReducer";
import {getOneProjectSlice} from "./projectReducers/GetOneProjectReducer";
import {deleteProjectSlice} from "./projectReducers/DeleteProjectReducer";
import projectReducer from "./ProjectReducer";


export const rootReducer=combineReducers({
    todosSliceInfos: todoSlice.reducer,

});

export const store= configureStore(
    {reducer:{
        rootReducer,
            projectReducer
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: "http://localhost:8080"
                }
            })}
)

