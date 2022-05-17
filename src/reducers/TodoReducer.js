import { createSlice} from "@reduxjs/toolkit";

export const todoSlice= createSlice({
    name:"todos",
    initialState: [
        {id:1,text:"Faire des courses",done:false},
        {id:2,text:"Aller au sport",done:true}
    ],
    reducers:{
        addTask:(state,action)=>{
            //Valeur de action devrait être {type: ADD_TASK, payload: {aller faire des courses} }
            //Valeur de action devrait être {type: todos/ADD_TASK, payload: {aller faire des courses} }
            const newTask={
                id: Date.now(),
                done: false,
                text: action.payload
            };
            // L'immutabilité est gérée par react. Le state en paramètre est déja une copie
         state.push(newTask);

        },
        toggleTask:(state,action)=>{
            // Valeur de action devrait être {type: TOGGLE_TASK, payload{20}}
            // Valeur de action devrait être {type: todos/TOGGLE_TASK, payload{20}}
          //  console.log("action: "+JSON.stringify(action));
           // console.log("state: "+JSON.stringify(state));

            const task= state.find(t=>t.id===action.payload);
            task.done= !task.done;

        },
        deleteTask:(state,action)=>{
            // Valeur de action devrait être {type: DELETE_TASK, payload{20}}
            // Valeur de action devrait être {type: todos/ DELETE_TASK, payload{20}}
            console.log("delete: "+JSON.stringify(state));
            state= state.filter((t)=>t.id===action.payload);


        }
    }
})

export const {addTask,deleteTask,toggleTask} = todoSlice.actions;

