import React from 'react'
import Tasks from './Tasks'

export const SelectedProject = ({projects,onDelete,onAddTask,onDeleteTask,tasks}) => {
const formatedDate= new Date(projects.dueDate).toLocaleDateString("en-US",{
    year:'2-digit',
    month:'short',
    day:'2-digit'
})

  return (
   <>
   <div className='w-[35rem] mt-16 '>
    <header className='pd-4 mb-4  border-b-2 border-stone-300  '>
        <div className='flex items-start justify-between '>
            <h1 className='text-3xl font-boldtext-stone-600 mb-2'>{projects.title}</h1>

            <button className='text-stone-600 hover:text-stone-950' onClick={onDelete}>Delete</button>

        </div>
        <p className='mb-4 text-stone-400'>{formatedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>{projects.description}</p>

    </header>
    <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} projects={projects}/>
   </div>
   
   </>
  )
}
