import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId, handellogin , onAdd ,onCancel }) {
    const navigate = useNavigate();

    // const handleLogin = () => {
    //     navigate("/login"); // Navigate to the login page
    // };

    return (
        <>
            <aside className="  px-8 h-screen  py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl" >
                <h2 className="mb-8  uppercase font-bold md:text-xl text-stone-200">Your Project</h2>
                {/* <div className="m-4">
                    <Button onClick={()=>{
                        
                         navigate("/")
                    }
                       
                    } >Login/SignUp</Button>
                </div> */}
                <div className="m-4">
                    <Button onClick={()=>{
                         navigate("/addProject")
                         onStartAddProject()
                    }
                        
                        }>+ Add Project</Button>
                </div>
                <div className="m-4 ">
                    <Button  onClick={()=>{
                          navigate("/projects")
                         onStartAddProject()
                    }
                        
                        }> Project  </Button>
                </div>


                {/* <ul className="mt-8">
                    {projects.map((project) => {
                        let cssClasses = "w-full text-left px-2 py-1 my-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800 "

                        if (project.id === selectedProjectId) {
                            console.log(project.id)
                            cssClasses += " text-stone-200 bg-stone-800"
                        }
                        else {
                            cssClasses += " text-stone-400"

                        }

                        return (<li key={project.key}>
                            <button
                                className={cssClasses}
                                onClick={
                                    () => onSelectProject(project.id)
                                }>
                                {project.title}
                            </button>
                        </li>)
                    })}
                </ul> */}
            </aside>
        </>
    )
}
