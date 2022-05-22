import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProjectItem from "./ProjectItem";
import {getAllProjectsThunk, resetProjects} from "../../reducers/projectReducers/GetAllProjectsReducer";
import {resetAddProjects} from "../../reducers/projectReducers/AddProjectReducer";
import projectReducer from "../../reducers/ProjectReducer";
import {resetDeleteProjects} from "../../reducers/projectReducers/DeleteProjectReducer";

function ListProjects() {

    const dispatch = useDispatch();

    const projects = useSelector((state) => state.projectReducer.projectSliceInfos.entities);
    const deleteProjectState = useSelector((state) => {
        return state.projectReducer.deleteProjectSliceInfos
    });
    const addProjectState = useSelector((state) => {
        return state.projectReducer.addProjectSliceInfos
    });

    useEffect(() => {
        console.log(deleteProjectState.loading);
        if (deleteProjectState.loading === 'succeeded') {
            dispatch(getAllProjectsThunk());
            dispatch(resetDeleteProjects());
        }
    }, [deleteProjectState]);

    useEffect(() => {
      //  dispatch(resetProjects)
        dispatch(getAllProjectsThunk());
           dispatch(resetAddProjects());
    }, [addProjectState]);


    useEffect(() => {
         dispatch(resetProjects());
    }, [projects]);


    useEffect(() => {
        dispatch(getAllProjectsThunk());
    }, [])


    return (

        <div className="container container-fluid">

            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>

                {
                    projects?.map(
                        (project, index) => {
                            return (<ProjectItem key={index} project={project}/>)
                        })
                }

                </tbody>
            </table>

        </div>
    )
}

export default ListProjects;