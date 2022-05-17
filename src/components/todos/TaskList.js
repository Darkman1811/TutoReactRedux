import { useSelector} from "react-redux";
import TaskItem from "./TaskItem";

const TaskList=()=>{
    const tasks=useSelector((state)=>state.todosSliceInfos);

    return (

        <div>

            {
               tasks.map((task)=>{
                return   <div key={task.id}>
                   <TaskItem task={task}/>
                   </div>
               })

            }
        </div>
    )
}

export default TaskList;