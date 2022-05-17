import {useDispatch} from "react-redux";
import {toggleTask, deleteTask} from "../../reducers/TodoReducer";

const  TaskItem=(props)=>{
   const task=props.task;
   const dispatch=useDispatch();




    return (
        <div>
        <input type="checkbox" onChange={()=>{dispatch(toggleTask(task.id))}} checked={task.done}/>
            {task.text}
            <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    )
}

export default TaskItem;