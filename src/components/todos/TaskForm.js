import {useState} from "react";
import {addTask} from "../../reducers/TodoReducer";
import {useDispatch} from "react-redux";

const  TaskForm=()=>{

    const dispatch=useDispatch();

    const [text, setText] = useState("");

    const onAdd=()=>{

    }
    return (
        <div>
            <form  onSubmit={(e)=> {
                e.preventDefault();
                dispatch(addTask(text));
                setText("")
            }
            }>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default TaskForm;