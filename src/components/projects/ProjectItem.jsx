import {useDispatch} from "react-redux";
import {deleteProjectsThunk} from "../../reducers/ProjectReducer";

const ProjectItem=(props)=>{

    const dispatch= useDispatch();



    const deleteProject= (event,project)=>{
        event.preventDefault();
        dispatch(deleteProjectsThunk(project.id))
    }

    return (
        <tr  >
        <th scope="row">{props.project.id}</th>
        <td>{props.project.id}</td>
        <td>{props.project.name}</td>
        <td>  <button className="btn btn-primary" name={props.project.id} onClick={(event)=>console.log("Update: "+props.project.name)}>Modifier</button></td>
        <td>  <button className="btn btn-primary" name={props.project.id} onClick={(event)=>deleteProject(event,props.project)}>Supprimer</button></td>
    </tr>)
}

export default ProjectItem;