import React from 'react'
import { CheckIcon } from './icons/CheckIcon'
import { CrossIcon } from './icons/CrossIcon'

//Se hace llamar al metodo forwardRef para modificar xcompoenntes y no html tags
//forwardRef recibe los props propios del compoentes y el ref que lo modificara
const TareaItem = ( { tarea, updateTarea ,removeTarea, setTarea, setModal, setCreando } ) => {
  const {id, title, complete} = tarea

  return (
    <article
      className="flex gap-4 border-b-gray-300 border-b dark:bg-gray-800 transition-all duration-500"
    >
      <button
        type="button"
        className={`${complete && 'bg-gradient-to-r from-indigo-500 to via-purple-500 to-pink-500'} 
                        grid place-items-center h-5 w-5 rounded-full border-2`}
        onClick={() => updateTarea(id)}
      >
        {complete && <CheckIcon />}
      </button>
      <p
        className={`text-gray-500 dark:text-gray-300 transition-all duration-500 
                        flex-grow text-center cursor-pointer ${complete && 'line-through'}`}
        onClick={() => { setTarea(tarea); setModal(true); setCreando(false) }}
      >
        {title}
      </p>
      <button type='button' className="flex-none" onClick={() => removeTarea(id)}><CrossIcon /></button>
    </article>
  )
}

export default TareaItem