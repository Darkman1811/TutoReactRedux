import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProjectItem from "./ProjectItem";
import {deleteProjectsThunk, getAllProjects, getAllProjectsThunk,} from "../../reducers/ProjectReducer";

function ListProjects(){

    const dispatch=useDispatch();

    const projects=useSelector((state)=> state.projectSliceInfos.entities);
      const deleteProjectState=useSelector((state)=> { return state.deleteProjectSliceInfos})


      useEffect(() => {
          dispatch(getAllProjectsThunk());
      }, []);

        useEffect((state) => {
            console.log("Gell All projects: "+JSON.stringify(state));
        } ,[projects]);


        useEffect((state) => {
            dispatch(getAllProjectsThunk());
            console.log("deleted: "+JSON.stringify(state));
        }, [deleteProjectState]);



    return(

        <div className="container container-fluid">

            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>


           {
                  projects?.map(
                        (project,index)=>{
                        return( <ProjectItem key={index} project={project}/>    )
                        })

         }



                </tbody>
            </table>

        </div>
    )
}
export default ListProjects;