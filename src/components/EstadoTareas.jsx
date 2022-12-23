import React from 'react'

const EstadoTareas = ({computedTareas, cleanComplete}) => {
  return (
      <section className="p-4 flex justify-between bg-white rounded-b-md">
          <span className="text-gray-400">Quedan {computedTareas} tareas</span>
          <button className="text-gray-400" onClick={cleanComplete}>Limpiar completas</button>
      </section>
  )
}

export default EstadoTareas