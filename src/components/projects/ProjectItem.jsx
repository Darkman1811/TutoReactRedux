import {useDispatch} from "react-redux";
import {deleteProjectsThunk} from "../../reducers/projectReducers/DeleteProjectReducer";
import {useEffect} from "react";
import {useNavigate} from "react-router";

const ProjectItem = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const deleteProject = (event, project) => {
        event.preventDefault();
        dispatch(deleteProjectsThunk(project.id))
    }

    return (
        <tr>
            <th scope="row">{props.project.id}</th>
            <td>{props.project.id}</td>
            <td>{props.project.name}</td>
            <td>{props.project.duration}</td>
            <td>
                <button className="btn btn-primary" name={props.project.id}
                        onClick={(event) => navigate("/updateProject/"+props.project.id)}>Modifier
                </button>
            </td>
            <td>
                <button className="btn btn-primary" name={props.project.id}
                        onClick={(event) => deleteProject(event, props.project)}>Supprimer
                </button>
            </td>
        </tr>)
}

export default ProjectItem;