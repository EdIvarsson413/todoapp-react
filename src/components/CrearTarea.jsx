import { useState } from "react"
import Modal from 'react-modal'


// Estilos del modal
const estilosModal = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: "translate(-50%, -50%)"
    },
    overlay: {
        backgroundColor: 'rgba(40, 40, 40, 0.75)'
    },
}

const CrearTarea = ({ createTarea, setModal, setCreando }) => {
    //El input será controlado por React
    const [title, setTitle] = useState(''); //Solo se hace captura del titulo de la tarea

    const handleSubmit = (e) => {
        e.preventDefault();

        //trim elimina espacios en blanco, negar la condicion significa que si hay caracteres en el input
        if(!title.trim())
            return setTitle(''); //Si no hay caracteres se rompe el bloque de codigo al principio

        //Si hay caracteres se agrega el title a la nueva tarea y esta pasa al state de las tareas
        createTarea(title);
        setTitle('');
    }

    return (
        <div
            className="flex gap-4 items-center overflow-hidden bg-white dark:bg-gray-800 transition-all duration-500 
                        rounded-md p-2 mt-4 hover:bg-slate-300 dark:hover:bg-gray-700"
        >
            <button 
                className="w-full h-full font-semibold dark:text-white text-gray-500 hover:text-gray-600"
                onClick={() => { setModal( true ); setCreando( true ); }}
            >
                Crear nueva tarea
            </button>


            {/* Se cambio el input text por un boton para activarc el modal
            
            <div className={`inline-block ml-2 h-5 w-5 rounded-full border-2 ${title && degradado}`}></div>
            
            <input
                type="text"
                placeholder="Crear una nueva tarea"
                className="w-full text-gray-400 dark:bg-gray-800 dark:text-gray-300 transition-all duration-500 outline-none"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /> */}
        </div>
    )
}

export default CrearTarea