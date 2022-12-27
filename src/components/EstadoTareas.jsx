import React from 'react'

const EstadoTareas = ({computedTareas, cleanComplete}) => {
  return (
      <section className="p-4 flex justify-between bg-white dark:bg-gray-800 transition-all duration-500 rounded-b-md">
          <span className="text-gray-400 dark:text-gray-300 transition-all duration-500">Quedan {computedTareas} tareas</span>
          <button className="text-gray-400 dark:text-gray-300 transition-all duration-500" 
                  onClick={cleanComplete}>
              Limpiar completas
          </button>
      </section>
  )
}

export default EstadoTareas