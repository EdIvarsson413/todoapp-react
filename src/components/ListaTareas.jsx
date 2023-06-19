import TareaItem from './TareaItem'

const ListaTareas = ( { tareas, updateTarea ,removeTarea, setTarea, setModal, setCreando } ) => {
  return (
    <div className="bg-white dark:bg-gray-800 [&>article]:p-4 mt-6 h-96 hover:overflow-y-auto 
                    overflow-hidden rounded-t-md"
    >
      {
        tareas.map( tarea => (
          <TareaItem
            key={tarea.id}
            tarea={tarea}
            updateTarea={updateTarea}
            removeTarea={removeTarea}
            setTarea={setTarea}
            setModal={setModal}
            setCreando={setCreando}
          />
        ))
      }
    </div>
  )
}
export default ListaTareas