import { useState } from "react";

const degradado = 'bg-gradient-to-r from-indigo-500 to via-purple-500 to-pink-500'

const CrearTarea = ({createTarea}) => {
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
      <form 
        onSubmit={handleSubmit} 
        className="flex gap-4 items-center overflow-hidden bg-white rounded-md p-2 mt-4">
          <div className={`inline-block ml-2 h-5 w-5 rounded-full border-2 ${title && degradado}`}></div>
          <input
              type="text"
              placeholder="Crear una nueva tarea"
              className="w-full text-gray-400 outline-none"
              value={title}
              onChange={e => setTitle(e.target.value)}
          />
      </form>
  )
}

export default CrearTarea