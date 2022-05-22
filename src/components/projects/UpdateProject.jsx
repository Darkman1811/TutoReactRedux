import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getOneProjectThunk} from "../../reducers/projectReducers/GetOneProjectReducer";
import projectReducer from "../../reducers/ProjectReducer";
import {useNavigate, useParams} from "react-router";
import {updateProjectsThunk} from "../../reducers/projectReducers/UpdateProjectReducer";
import type {Project} from "./interfaces";
import {useForm} from "react-hook-form";
import {resetAddProjects} from "../../reducers/projectReducers/AddProjectReducer";

const UpdateProject=()=>{

    const dispatch=useDispatch();
    const params=useParams();
    const navigate=useNavigate();
    const {register}=useForm();

    const getOneProjectState=useSelector((state)=>  state.projectReducer.getOneProjectSliceInfos.entity);
    const projectUpdatedState=useSelector(state => state.projectReducer.updateProjectSliceInfos);

    const [project, setProject] = useState({id:0,name:"",duration:""});
    useEffect(() => {
        let id:number=params.id;
        dispatch(getOneProjectThunk(id));
    }, []);

    useEffect(() => {
        setProject(getOneProjectState);
    }, [getOneProjectState]);

    useEffect(()=>{
        if(projectUpdatedState.loading==="succeeded"){navigate("/projects")};
        resetAddProjects();
    },[projectUpdatedState])

    const updateProject=(event)=>{
        event.preventDefault();
        console.log("====>project:",project);
        dispatch(updateProjectsThunk(project));
    }

    return (
        <form onSubmit={updateProject}>
            <label>Id du projet</label>
            <h3>{getOneProjectState.id}</h3>
            <label>Nom Projet</label>
            <input type="text" defaultValue={getOneProjectState.name} onChange={(event)=>{


                setProject({...project,name:event.target.value})
            }}/>

     <button type="submit">Modifier</button>
        </form>
    )
};

export default UpdateProject;