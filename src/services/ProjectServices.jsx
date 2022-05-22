import axios from "axios";

const    headers = {'Access-Control-Allow-Origin': '*'}

export const addProjectService= async (project) => {
   return await axios.post("http://localhost:8080/projects", project, headers).then(project => {
       return  project.data;
    })

}

export const getAllProjectService=  () => {
    return  axios.get("http://localhost:8080/projects", headers);
}


export const deleteProjectService=  (id) => {
    return  axios.delete("http://localhost:8080/projects/"+id, headers);
}

export const updateProjectService= (project)=>{
    return axios.put("http://localhost:8080/projects",project,headers);
}

export const getProjectByIdService= async (id:number) => {
   return await  axios.get("http://localhost:8080/projects/"+id, headers).then(project => {
         return   project.data;
    })

}