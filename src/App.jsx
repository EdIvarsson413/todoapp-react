import { CrossIcon } from "./components/icons/CrossIcon"
import { MoonIcon } from "./components/icons/MoonIcon"

function App() {

  return (
    <>
      <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] 
                      bg-clip-border bg-no-repeat bg-gray-200 min-h-screen">
          {/* El header contiene el titulo, boton de modo osucro/claro y agregar nueva tarea */}
          <header className="container mx-auto px-4 pt-6">
          <div className="flex justify-between">
            <h1 className="uppercase text-2xl text-white font-bold tracking-[0.3em]">Todo</h1>
            <button><MoonIcon className="fill-white"/></button>
          </div>
          
          <form className="flex gap-4 items-center overflow-hidden bg-white rounded-md p-2 mt-4">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input 
              type="text"
              placeholder="Crear una nueva tarea"
              className="w-full text-gray-400 outline-none"
            />
          </form>
        </header>

        {/* Contendra todas las tareas y opciones auxiliares */}
        <main className="container mx-auto px-4 mt-7">
          <div className="bg-white rounded-md [&>article]:p-4">
            <article className="flex gap-4 border-b-gray-300 border-b">
              <buttton className="flex-none inline-block h-5 w-5 rounded-full border-2"></buttton>
              <p className="text-gray-500 flex-grow text-center">Completa el curso completo de JavaScript en Bluuweb</p>
              <button className="flex-none"><CrossIcon/></button>
            </article>
            <article className="flex gap-4 border-b-gray-300 border-b">
              <buttton className="flex-none inline-block h-5 w-5 rounded-full border-2"></buttton>
              <p className="text-gray-500 flex-grow text-center">Completa el curso completo de JavaScript en Bluuweb</p>
              <button className="flex-none"><CrossIcon/></button>
            </article>
            <article className="flex gap-4 border-b-gray-300 border-b">
              <buttton className="flex-none inline-block h-5 w-5 rounded-full border-2"></buttton>
              <p className="text-gray-500 flex-grow text-center">Completa el curso completo de JavaScript en Bluuweb</p>
              <button className="flex-none"><CrossIcon/></button>
            </article>

            <section className="p-4 flex justify-between">
              <span className="text-gray-400">5 items left</span>
              <button className="text-gray-400">Limpiar completos</button>
            </section>
          </div>
        </main>

        {/* Filtro de tareas */}
        <section className="container mx-auto px-4 mt-5">
          <div className="bg-white p-4 rounded-md flex justify-center gap-8">
            <button className="hover:text-blue-400">Todos</button>
            <button className="hover:text-blue-400">Activo</button>
            <button className="hover:text-blue-400">Completos</button>
          </div>
        </section>

        <section className="text-center mt-8">
          <p>
            Seleccionar y arrastrar para reordenar
          </p>
          <p>Proximamente xd</p>
          </section>
      </div>
    </>
  )
}

export default App
