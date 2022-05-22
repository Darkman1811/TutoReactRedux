import logo from './logo.svg';
import './App.css';
import TaskHeader from "./components/todos/TaskHeader";
import TaskList from "./components/todos/TaskList";
import TaskForm from "./components/todos/TaskForm";
import {Provider} from "react-redux";
import {store} from "./reducers/store";
import ListProjects from "./components/projects/ListProjects";
import {AddProject} from "./components/projects/AddProject";
import UpdateProject from "./components/projects/UpdateProject";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Outlet, Routes} from "react-router";
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>




          <h1>Gestion des projets</h1>
              <Link  to="/projects">Projects</Link>
              <Link  to="/add">Add</Link>
    <div className="container-fluid">



    </div>


              <Routes>
                  <Route path="/" element={<ListProjects/>}/>
                  <Route path="/projects" element={<ListProjects/>}/>
                  <Route path="/add" element={<AddProject/>}/>
                  <Route path="/updateProject/:id" element={<UpdateProject/>}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
