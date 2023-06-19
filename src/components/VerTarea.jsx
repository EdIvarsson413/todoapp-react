import { useState } from 'react'

const VerTarea = ({ tarea, creando ,setModal, createTarea }) => {
    const [ titulo, setTitulo ] = useState('');
    const [ descripcion, setDescripcion ] = useState('');
    const [ nota, setNota ] = useState('');
    const [ alerta, setAlerta ] = useState('');

    const generarID = () => {
        const math = Math.random().toString(32).substring(2);
        const fecha = Date.now().toString(32);
        return math + fecha;
    }

    const handleSubit = (e) => {
        e.preventDefault();

        if( titulo === '' ){
            setAlerta('Debes tener al menos el titulo');
            setTimeout(() => {setAlerta('')}, 2000)
            return
        }
        
        const nuevaTarea = {
            id: generarID(),
            title: titulo,
            descripcion,
            nota,
            complete: false
        }

        createTarea( nuevaTarea );
        setModal( false )
    }

    return (
        <div className='w-96'>
            {   // Si se esta creando una nueva tarea se muestra el formulario y si no los detalles de la esta
                // iconos importados de heroicons
                creando ? (
                    <>
                        <div className='flex justify-between'>
                            <p className='font-bold text-lg'>Crear tarea</p>
                            <button type='button' onClick={() => { setModal( false ) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form className='my-5' onSubmit={handleSubit}>
                            <input 
                                type="text" 
                                placeholder='Titulo de la tarea' 
                                className='w-full py-2 border border-gray-500 rounded-sm placeholder:text-gray-500 placeholder:text-center'
                                value={titulo}
                                onChange={e => setTitulo( e.target.value )}
                            />

                            <textarea
                                rows={4}
                                className='w-full mt-3 border border-gray-500 rounded-sm placeholder:text-gray-500 placeholder:text-center'
                                placeholder='Describe la tarea'
                                value={descripcion}
                                onChange={e => setDescripcion( e.target.value )}
                            />

                            <input 
                                type="text" 
                                placeholder='Nota o referencia importante' 
                                className='w-full py-2 mt-3 border border-gray-500 rounded-sm placeholder:text-gray-500 placeholder:text-center'
                                value={nota}
                                onChange={e => setNota( e.target.value )}
                            />

                            <button 
                                type="submit"
                                className='w-full mt-3 py-2 rounded-sm bg-black text-white font-semibold 
                                        hover:bg-gray-800 transition-all duration-500'
                            >
                                Agregar tarea
                            </button>

                            
                            { // Alerta
                                alerta.length !== 0 && 
                                    <p 
                                        className='w-full mt-3 py-2 bg-gradient-to-br from-red-400 to-red-600
                                                    text-center font-bold text-white rounded-sm'
                                    >
                                        { alerta }
                                    </p>
                            }
                        </form>
                    </>
                ) : (
                    <>
                        {/* Mostrar los detalles de la tarea */}
                        <div className='flex justify-between'>
                            {/* Titulo de la tarea */}
                            <p className='font-bold text-lg'>{tarea.title}</p>

                            {/* Boton de cerrar */}
                            <button type='button' onClick={() => setModal(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Detalles */}
                        <div className='mt-5'>
                            <div className='flex flex-col'>
                                <label className='text-gray-600'>Descripcion</label>
                                {
                                    // Si hay descripcion
                                    tarea.descripcion !== '' ? (
                                        <p
                                            style={{ whiteSpace: 'pre-wrap' }}
                                            className='mb-3 w-full'
                                        >
                                            {tarea.descripcion}
                                        </p>
                                    ) : ( <p className='mb-3 w-full'> --- </p> )
                                }
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-gray-600'>Notas</label>
                                {
                                    // Si es un enlace lo dejará disponible para dar clic
                                    tarea.nota.includes('https') ? (
                                        <a className='mb-3 w-full' target='_blank' href={tarea.nota}>Ver enlace de referencia</a>
                                    ) : (
                                        <p className='mb-3 w-full'>{ tarea.nota }</p>
                                    )
                                }
                                {
                                    // Si no hay notas
                                    tarea.nota === '' && <p className='mb-3 w-full'> --- </p>
                                }
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-gray-600'>Estado</label>
                                <p className='font-semibold'>{ tarea.complete ? (
                                        <div className='flex gap-2'>
                                            Completado 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    ) : (
                                        <div className='flex gap-2'>
                                            Pendiente
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                </svg>
                                            </span>
                                        </div>
                                    )}
                                </p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default VerTarea