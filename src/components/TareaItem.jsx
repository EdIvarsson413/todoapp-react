import { CheckIcon } from './icons/CheckIcon'
import { CrossIcon } from './icons/CrossIcon'

const TareaItem = ({tarea, updateTarea ,removeTarea}) => {
  const {id, title, complete} = tarea

  return (
      <article className="flex gap-4 border-b-gray-300 border-b dark:bg-gray-800 transition-all duration-500">
          <buttton
            className={`${complete && 'bg-gradient-to-r from-indigo-500 to via-purple-500 to-pink-500'} 
                       grid place-items-center h-5 w-5 rounded-full border-2`}
            onClick={() => updateTarea(id)}
          >
            {complete && <CheckIcon/>}
          </buttton>
          <p className={`text-gray-500 dark:text-gray-300 transition-all duration-500 
                       flex-grow text-center ${complete && 'line-through'}`}>
            {title}
          </p>
          <button className="flex-none" onClick={() => removeTarea(id)}><CrossIcon /></button>
      </article>
  )
}

export default TareaItem