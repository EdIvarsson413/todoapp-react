import TareaItem from './TareaItem'

const ListaTareas = ( { tareas, updateTarea ,removeTarea } ) => {
  return (
    <div className="bg-white overflow-hidden rounded-t-md [&>article]:p-4 mt-6">
      {
        tareas.map( tarea => (
          <TareaItem
          key={tarea.id}
          tarea={tarea}
          updateTarea={updateTarea}
          removeTarea={removeTarea}
        />
        ))
      }
    </div>
  )
}
export default ListaTareas