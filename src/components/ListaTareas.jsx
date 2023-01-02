import TareaItem from './TareaItem'
import { Draggable, Droppable } from '@hello-pangea/dnd' 

const ListaTareas = ({tareas, updateTarea ,removeTarea}) => {
  return (
    <Droppable droppableId='tareas'>
      {(droppableProvider) => (
        <div 
          ref={droppableProvider.innerRef} 
          {...droppableProvider.droppableProps} 
          className="bg-white overflow-hidden rounded-t-md [&>article]:p-4 mt-6">
            {tareas.map((tarea, index) => (
              <Draggable key={tarea.id} index={index} draggableId={`${tarea.id}`}>
                {(draggableProvider) => (
                  <TareaItem 
                    tarea={tarea} 
                    updateTarea={updateTarea} 
                    removeTarea={removeTarea}
                    ref={draggableProvider.innerRef}
                    {...draggableProvider.dragHandleProps}
                    {...draggableProvider.draggableProps}
                  />
                )}
              </Draggable>
            ))}
            {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default ListaTareas