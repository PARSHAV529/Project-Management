import {  useRef ,useImperativeHandle, forwardRef } from "react";
import{createPortal} from 'react-dom'
import  Button  from "./Button";


const Modal = forwardRef(function Modal({children,buttonCaption,confirmDelete},ref) {
    let dialoge=useRef()

    useImperativeHandle(ref,()=>{

        return{
            open(){
                dialoge.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialoge} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md ">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button onClick={confirmDelete}>{buttonCaption}</Button>
            </form>
        </dialog>,document.getElementById('modal-root')

    )

})

export default Modal