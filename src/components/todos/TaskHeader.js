import {useSelector} from "react-redux";

const TaskHeader=()=>{
    const tasks=useSelector((state)=>state.todosSliceInfos);

    const undoneTasks=useSelector((state)=>{return state.todosSliceInfos.filter((task)=>{ return task.done===false})});

  //  const undoneTasks=((task)=>{return task.done===false});
    return (
        <div>
            <h1>React Todos List</h1>
            <p>
                <strong>Taches à faire: </strong>{undoneTasks.length} / {tasks.length}
            </p>
        </div>
    )
}

export default TaskHeader;