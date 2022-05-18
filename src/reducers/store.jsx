import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./TodoReducer";
import {addProjectSlice, deleteProjectSlice, getOneProjectSlice, projectSlice} from "./ProjectReducer";

export const rootReducer=combineReducers({
    todosSliceInfos: todoSlice.reducer,
    projectSliceInfos: projectSlice.reducer,
    deleteProjectSliceInfos: deleteProjectSlice.reducer,
    addProjectSliceInfos: addProjectSlice.reducer,
    getOneProjectSliceInfos: getOneProjectSlice.reducer

});

export const store= configureStore(
    {reducer:{
        rootReducer
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: "http://localhost:8080"
                }
            })}
)

