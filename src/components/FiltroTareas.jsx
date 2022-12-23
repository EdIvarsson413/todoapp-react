import React from 'react'

const FiltroTareas = ({filtro ,changeFiltro}) => {
  return (
      <section className="container mx-auto mt-8">
          <div className="bg-white p-4 rounded-md flex justify-center gap-8">
                <button 
                    className={`${filtro === 'todas' ? 'text-blue-600': 'text-gray-400'} hover:text-blue-400`} 
                    onClick={() => changeFiltro('todas')}>
                        Todas
                </button>
                <button 
                    className={`${filtro === 'pendientes' ? 'text-blue-600': 'text-gray-400'} hover:text-blue-400`} 
                    onClick={() => changeFiltro('pendientes')}>
                        Pendientes
                </button>
                <button 
                    className={`${filtro === 'completadas' ? 'text-blue-600': 'text-gray-400'} hover:text-blue-400`} 
                    onClick={() => changeFiltro('completadas')}>
                        Completas
                </button>
          </div>
      </section>
  )
}

export default FiltroTareas