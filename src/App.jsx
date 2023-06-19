import { useEffect, useState } from "react"
import CrearTarea from "./components/CrearTarea"
import EstadoTareas from "./components/EstadoTareas"
import FiltroTareas from "./components/FiltroTareas"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"
import { DragDropContext } from "@hello-pangea/dnd"

const reOrdenar = (listaIni, iniIndex, finIndex) => {
  const copia = [...listaIni];
  const [removed] = copia.splice(iniIndex, 1);
  copia.splice(finIndex, 0, removed);

  return copia;
}

function App() {
  const [tareas, setTareas] = useState([]); //Se agrega al state las tareas predefinidas

  //localStorage para guardar las tareas
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])
  
  //Se cargan todas las tareas en localStorage y se cargan directamente al state, si no hay nada inicia un nuevo arreglo
  useState(() => {
    setTareas(JSON.parse(localStorage.getItem('tareas')) ?? []) //Si no hay nada en LS se crea un arreglo vacio
  })

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

  //Ordenar los elementos drag n' drop
  const handleDragEnd = result => {
    const {destination, source} = result;

    if(!destination) return;

    if(
        source.index === destination.index 
        && 
        source.droppableId === destination.droppableId
      )
        return ;

    setTareas((prevTareas) => reOrdenar(prevTareas, source.index, destination.index))
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
                    bg-clip-border bg-contain bg-no-repeat bg-gray-200 
                    dark:bg-gray-900 min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
                    dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')] 
                    md:bg-[url('./assets/images/bg-desktop-light.jpg')]
                    transition-all duration-500">
      {/* El header contiene el titulo, boton de modo osucro/claro*/}
      <Header />

      {/* Contendra todas las tareas y crearlas */}
      <main className="container mx-auto px-4 mt-7 md:max-w-xl">
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

      {/* Sugerencia sobre la aplicacion
      <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-500">
        <p>Seleccionar y arrastrar para reordenar</p>
      </footer> */}
    </div>
  )
}

export default App
