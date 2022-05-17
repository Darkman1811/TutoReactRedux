import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./TodoReducer";
import {deleteProjectSlice, projectSlice} from "./ProjectReducer";

export const rootReducer=combineReducers({todosSliceInfos: todoSlice.reducer, projectSliceInfos: projectSlice.reducer,deleteProjectSliceInfos: deleteProjectSlice.reducer});

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

