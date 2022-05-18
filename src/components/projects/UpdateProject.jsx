import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getOneProjectThunk} from "../../reducers/ProjectReducer";
import {rootReducer} from "../../reducers/store";

const UpdateProject=()=>{

    const dispatch=useDispatch();
    const getOneProjectState=useSelector((state)=>  state.rootReducer.getOneProjectSliceInfos)

    const [project, setProject] = useState({id:0,name:""});
    useEffect(() => {
       dispatch(getOneProjectThunk(53));
    }, []);

    useEffect(() => {
        setProject(getOneProjectState);
    }, [getOneProjectState]);

    const updateProject=(event)=>{
        event.preventDefault();
        console.log(project)
    }

    return (
        <form onSubmit={updateProject}>
            <label>Id du projet</label>
            <h3>{getOneProjectState.entities.id}</h3>
            <label>Nom Projet</label>
            <input type="text" value={project.name} onChange={(event)=>{setProject({id:53,name:event.target.value})}}  />
     <button type="submit">Modifier</button>
        </form>
    )
};

export default UpdateProject;