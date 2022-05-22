import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProjectThunk} from "../../reducers/projectReducers/AddProjectReducer";
import {useNavigate} from "react-router";
import {rootReducer} from "../../reducers/store";
import projectReducer from "../../reducers/ProjectReducer";

export const AddProject=()=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();


    const [projet, setProjet] = useState({id:0,name:"",duration:"",startingDate:"",expenses:""});
    const projectAdded=useSelector(state => state.projectReducer.addProjectSliceInfos);


    useEffect(() => {
        console.log("=======>","project added");
        if(projectAdded.loading==="succeeded"){
            navigate("/projects");
        }


    }, [projectAdded]);

    const handleSubmit=(event)=>{
        event.preventDefault();
       dispatch(addProjectThunk(projet));
       setProjet({id:0,name:"",duration:"3 years"});
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Nom:</label>
            <input name="name" type="text" value={projet.name} onChange={(event)=>setProjet({...projet,name:event.target.value})}/>

                <label>Durée:</label>
                <input type="text" value={projet.duration} onChange={(event)=>setProjet({...projet,duration:event.target.value})}/>


                <button type="submit">Ajouter</button>
            </form>
            </div>
    )
}