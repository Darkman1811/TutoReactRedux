import logo from './logo.svg';
import './App.css';
import TaskHeader from "./components/todos/TaskHeader";
import TaskList from "./components/todos/TaskList";
import TaskForm from "./components/todos/TaskForm";
import {Provider} from "react-redux";
import {store} from "./reducers/store";
import ListProjects from "./components/projects/ListProjects";
function App() {
  return (
      <Provider store={store}>
    <div className="container-fluid">
{/*
        <TaskHeader/>
          <TaskList/>
          <footer>
              <TaskForm/>
          </footer>*/}
    </div>

          <br/>
          <br/>




          <div>

              <h1>Gestion des projets</h1>
              <ListProjects />


          </div>
      </Provider>
  );
}

export default App;
