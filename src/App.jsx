import { useState, useRef, useEffect } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSideBar.jsx";
import { SelectedProject } from "./components/SelectedProject.jsx";
import { fetchProjects } from "./store/projectSlice.js";
import SignUp from "./components/SignUp.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectCard from "./components/ProjectCard.jsx";
import { Projects } from "./pages/Projects.jsx";
import axios from "axios";
import Modal from "./components/Modal.jsx";


function App() {
  let [fetch,setFetch] = useState('');
// let [selectedProject,setSelectedProject] = useState()
 
  let [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  })
  let modal = useRef()
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  useEffect(() => {
    dispatch(fetchProjects());
setFetch('')

  }, [dispatch,fetch]);

 

  useEffect(() => {

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: projects,
      }
    })

  }, [projects]);

  // useEffect(() => {
  //   const fetchProject = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8081/projectmangemnet/projects/${projectState.selectedProjectId}`);
   
  //     } catch (error) {
       
  //     }
  //   };

  //   fetchProject();

  //   // Cleanup function
  //   return () => {
  //     // Abort fetch if component unmounts before request is completed
  //   };
  // }, [projectState.selectedProjectId]);

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




    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projectData],
      }
    })

    setFetch('added')
    
    // dispatch(addProject(projectData));
    dispatch(fetchProjects());

  }

  function handleProjectSelect(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,

      }
    })

  }
  const handlemodalDelete= async(id)=>  {
    console.log(id)

    try {
    await axios.delete(`http://localhost:8081/projectmangemnet/projects/${id}`);
      // console.log('Project added:', response.data);
     
    } catch (error) {
      console.log(error)
    }
  

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)

      }
    })
  }
  function handleDeleteProject(id) {

    modal.current.open(id)

  }
  const selectedProject = projectState.projects.find(projects => projects.id === projectState.selectedProjectId)

  let content = <SelectedProject
    projects={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
     />;



  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  console.log(projectState)
 



  return (


    <>
    <Modal ref={modal} buttonCaption="Delete" confirmDelete={handlemodalDelete}>
        <h2 className='text-xl font-bold text-stone-700 my-4'>confirm Delete Task?</h2>

      </Modal>

<BrowserRouter>
<div className="flex gap-10">
         <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleProjectSelect}
          selectedProjectId={projectState.selectedProjectId}
         
          /> 
          
      <Routes>
       
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/addProject" element={<NewProject  onAdd={handleAddProject} onCancel={handleCancelAddProject} />} />
        <Route path="/Home" element={<NoProjectSelected onStartAddProject={handleStartAddProject} />}/>
        <Route path="/projects" element={<Projects project={projects}   projects={projectState.projects}
          onSelectProject={handleProjectSelect}
          selectedProjectId={projectState.selectedProjectId} />}/>
        <Route path="/selctedprojects" element={<SelectedProject projects={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>}/>
      
      </Routes>
      </div>
    </BrowserRouter>
        {/* <SignUp/> */}
      {/* <Modal ref={modal} buttonCaption="Delete" confirmDelete={handlemodalDelete}>
        <h2 className='text-xl font-bold text-stone-700 my-4'>confirm Delete Task?</h2>

      </Modal>

      <main className="h-screen my-8 flex gap-8 ">

        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleProjectSelect}
          selectedProjectId={projectState.selectedProjectId}
          handellogin={handellogin}
         
        /> */}
        {/* <ProjectCard/> */}

        {/* {login ? <SignUp/> : ( ? <RegisterForm handelloginButton={handelloginButton} /> : content)} */}


      {/* </main> */}
      </>
  );
}

export default App;
