import {useState} from "react";
import {useDispatch} from "react-redux";
import {addProjectSlice, addProjectThunk} from "../../reducers/ProjectReducer";

export const AddProject=()=>{

    const dispatch=useDispatch();

    const [projet, setProjet] = useState({id:0,name:""});

    const handleSubmit=(event)=>{
        event.preventDefault();


       dispatch(addProjectThunk(projet));
       setProjet({id:0,name:""});
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Nom du projet</label>
            <input type="text" value={projet.name} onChange={(event)=>setProjet({id:0,name:event.target.value})}/>
           <button type="submit">Ajouter</button>
            </form>
            </div>
    )
}