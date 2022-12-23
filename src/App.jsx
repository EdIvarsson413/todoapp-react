import { useState } from "react"
import CrearTarea from "./components/CrearTarea"
import EstadoTareas from "./components/EstadoTareas"
import FiltroTareas from "./components/FiltroTareas"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"

//Se crea una lista estatica que puede tener mas tareas
const initialStateTareas = [
  {
    id: 1,
    title: 'Terminar la app Todo de FrontEnd Mentor',
    complete: false,
  },
  {
    id: 2,
    title: 'Terminar el curso de JavaScript con Bluuweb',
    complete: false,
  },
  {
    id: 3,
    title: 'Iniciar el curso de VueJS',
    complete: false,
  },
  {
    id: 4,
    title: '10 minutos de React',
    complete: false,
  },
  {
    id: 5,
    title: 'Reforzar conocimientos en JAVA',
    complete: false,
  },
]

function App() {
  const [tareas, setTareas] = useState(initialStateTareas); //Se agrega al state las tareas predefinidas

  //Esta funion permite crear una nueva tarea para ser agregada al state
  const createTarea = title => {
    //Crea un objeto de tarea
    const newTarea = {
      id: tareas.length + 1,
      title: title.trim(),
      complete: false,
    }

    //La nueva tarea se agrega a la collecion de tareas
    setTareas([...tareas, newTarea]);
  }

  //Cuando una tarea fue finalizada
  const updateTarea = (id) => {
    //Recorrido por el arreglo, si el id de la tarea seleccionada coincide en uno del recorrido
    //se hace copia del resto de los atribitos de la tarea pero se modifica el completado, en caso contrario solo devuelve 
    //la tarea
    setTareas(tareas.map(tarea => tarea.id === id ? {...tarea, complete: !tarea.complete} : tarea))
  }

  //Cuando se quiere eliminar una tarea
  const removeTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id)); //Elimina la tarea que coincida con el id de la seleccioanda
  }

  //Monitoreo de tareas: total de todas las tareas
  const computedTareas = tareas.filter(tarea => !tarea.complete).length

  //Monitoreo: limpiar completadas
  const cleanComplete = () => {
    setTareas(tareas.filter(tarea => !tarea.complete)); //Toda tarea que este completada es eliminada por el filter
  }

  //Filtro: Todas las tareas 
  const [filtro, setFiltro] = useState('todas'); //Se declara un nuevo state que tiene un string como indicador

  const changeFiltro = filtro => setFiltro(filtro);

  const filtrarTareas = () => {
    switch (filtro) {
      case 'todas': return tareas;
      case 'pendientes': return tareas.filter(tarea => !tarea.complete);
      case 'completadas': return tareas.filter(tarea => tarea.complete);
      default: return tareas;
    }
  }

  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] 
                      bg-clip-border bg-no-repeat bg-gray-200 min-h-screen">
      {/* El header contiene el titulo, boton de modo osucro/claro*/}
      <Header />

      {/* Contendra todas las tareas y crearlas */}
      <main className="container mx-auto px-4 mt-7">
        <CrearTarea createTarea={createTarea}/>

        {/* Listado de tareas*/}
        <ListaTareas 
            tareas={filtrarTareas()} 
            updateTarea={updateTarea} 
            removeTarea={removeTarea}
        />

        {/* Estado de tareas y operaciones */}
        <EstadoTareas 
            computedTareas={computedTareas}
            cleanComplete={cleanComplete}
        />

        {/* Filtro de tareas */}
        <FiltroTareas filtro={filtro} changeFiltro={changeFiltro}/>
      </main>

      {/* Sugerencia sobre la aplicacion */}
      <footer className="text-center mt-8"><p>Seleccionar y arrastrar para reordenar</p></footer>
    </div>
  )
}

export default App
