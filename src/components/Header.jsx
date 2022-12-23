import { MoonIcon } from './icons/MoonIcon'

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-6">
          <div className="flex justify-between">
            <h1 className="uppercase text-2xl text-white font-bold tracking-[0.3em]">Todo</h1>
            <button><MoonIcon className="fill-white"/></button>
          </div>          
    </header>
  )
}

export default Header