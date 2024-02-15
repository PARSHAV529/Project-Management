import { useState,useRef } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSideBar.jsx";
import { SelectedProject } from "./components/SelectedProject.jsx";
import Modal from "./components/Modal.jsx";
import SignUp from "./components/SignUp.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

function App() {
  let [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  })
  let modal = useRef()

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    })
  }
  function handleCancelAddProject() {
    
    
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      }
    })
  }

  function handleAddProject(projectData) {


    const newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })

  }

  function handleProjectSelect(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,

      }
    })

  }
function handlemodalDelete(id){
 
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)

    }
  })
}
  function handleDeleteProject() {
    
    modal.current.open()

  }
  const selectedProject = projectState.projects.find(projects => projects.id === projectState.selectedProjectId)

  let content = <SelectedProject 
                projects={selectedProject} 
                onDelete={handleDeleteProject}
                onAddTask={handleAddTask} 
                onDeleteTask={handleDeleteTask}
                tasks={projectState.tasks}/>;



  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  console.log(projectState)
  let [login,setLogin]= useState(false);
  function handellogin(){
      setLogin(true)
      setRegister(false)  
  }

  function handelloginButton(){
    setLogin(false)
    setRegister(false)

  }
  let [register,setRegister] = useState(false)
  function handelRegister(){
    setLogin(false)
      setRegister(true)
  }
  
  return (
  
 
  <>

    <Modal ref={modal} buttonCaption="Delete" confirmDelete={handlemodalDelete}>
        <h2 className='text-xl font-bold text-stone-700 my-4'>confirm Delete Task?</h2>
       
    </Modal>

    <main className="h-screen my-8 flex gap-8 ">

      <ProjectSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleProjectSelect}
        selectedProjectId={projectState.selectedProjectId}
        handellogin={handellogin}
        handelRegister={handelRegister}
      />
    
      {login ? <SignUp handelloginButton={handelloginButton} handelRegister={handelRegister}/> :(register ? <RegisterForm handelloginButton={handelloginButton}/> : content)}


    </main></>
  );
}

export default App;
