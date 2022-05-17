import axios from "axios";

const    headers = {'Access-Control-Allow-Origin': '*'}

export const addProjectService= async (project) => {
    await axios.post("http://localhost:8080/projects", project, headers).then(project => {
       return  project;
    })
    return null;
}

export const getAllProjectService=  () => {
    return  axios.get("http://localhost:8080/projects", headers);
}


export const deleteProjectService=  (id) => {
    return  axios.delete("http://localhost:8080/projects/"+id, headers);
}


export const getAllProjectService2=  () => {
    axios.get("http://localhost:8080/projects", headers).then(projectList => {
        console.log("projectlist: ");

        return   projectList.data;
    })

}