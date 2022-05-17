
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProjectItem from "./ProjectItem";
import { getAllProjectsThunk,} from "../../reducers/ProjectReducer";
import {rootReducer} from "../../reducers/store";

function ListProjects(){

    const dispatch=useDispatch();

    const projects=useSelector((state)=> state.rootReducer.projectSliceInfos.entities);
    const deleteProjectState=useSelector((state)=> { return state.rootReducer.deleteProjectSliceInfos});

           useEffect((state) => {
               dispatch(getAllProjectsThunk());
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