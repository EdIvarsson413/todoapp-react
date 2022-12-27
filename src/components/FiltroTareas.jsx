import React from 'react'

const FiltroTareas = ({filtro ,changeFiltro}) => {
  return (
      <section className="container mx-auto mt-8">
          <div className="bg-white dark:bg-gray-800 p-4 transition-all duration-500 rounded-md flex justify-center gap-8">
                <button 
                    className={`${filtro === 'todas' ? 'text-blue-600': 'text-gray-400'}
                                ${filtro === 'todas' && 'dark:text-white'}
                                hover:text-blue-400 transition-all duration-500`} 
                    onClick={() => changeFiltro('todas')}>
                        Todas
                </button>
                <button 
                    className={`${filtro === 'pendientes' ? 'text-blue-600': 'text-gray-400'}
                                ${filtro === 'pendientes' && 'dark:text-white'}
                                hover:text-blue-400 transition-all duration-500`} 
                    onClick={() => changeFiltro('pendientes')}>
                        Pendientes
                </button>
                <button 
                    className={`${filtro === 'completadas' ? 'text-blue-600': 'text-gray-400'}
                                ${filtro === 'completadas' && 'dark:text-white'}
                                hover:text-blue-400 transition-all duration-500`} 
                    onClick={() => changeFiltro('completadas')}>
                        Completas
                </button>
          </div>
      </section>
  )
}

export default FiltroTareas