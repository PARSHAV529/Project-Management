import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd,onCancel}) {
        let modal = useRef()
        let title=useRef()
        let description=useRef()
        let dueDate=useRef()

        function handleSave(){

            const enterdTitle=title.current.value
            const enterdDescription=description.current.value
            const enterdDueDate=dueDate.current.value
            if(enterdTitle.trim()==='' || enterdDescription.trim()===''|| enterdDueDate.trim()===''){
                modal.current.open()
                return;
            }
            onAdd({
                title:enterdTitle,
                description:enterdDescription,
                dueDate:enterdDueDate,
            })


        }


    return <>
    <Modal ref={modal} buttonCaption="close">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>opps... Looks like you forgot to enter a value</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide value for every input field</p>

    </Modal>
    
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <form action="">
            <Input type="text" ref={title} label="Title"/>
            <Input type='text' ref={description} label="Description" textarea/>
            <Input type='date' ref={dueDate} label="Due Date"/>


        </form>
    </div></>
}