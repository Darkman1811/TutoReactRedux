import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./TodoReducer";
import {projectSlice} from "./ProjectReducer";

export const rootReducer=combineReducers({todosSliceInfos: todoSlice.reducer, projectSliceInfos: projectSlice.reducer});

export const store= configureStore(
    {reducer:{todosSliceInfos: todoSlice.reducer, projectSliceInfos: projectSlice.reducer},
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: "http://localhost:8080"
                }
            })}
)

