import { useEffect, useState } from 'react'
import { MoonIcon } from './icons/MoonIcon'
import { SunIcon } from './icons/SunIcon';

//Si el atributo de theme es dark, el state pasará a true y activa el modo oscuro
const modoInicial = localStorage.getItem('theme') === 'dark' ? true : false;

const Header = () => {
  //El state realiza el cambio de configuracion del tema
  const [dark, setDark] = useState(modoInicial);

  useEffect(() => {
    if(dark){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); //El modo queda en localStorage para evitar un modo indeseado por el usuario
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark])
  
  return (
    <header className="container mx-auto px-4 pt-6  md:max-w-xl">
          <div className="flex justify-between">
            <h1 className="uppercase text-2xl text-white font-bold tracking-[0.3em]">Todo</h1>
            <button onClick={() => setDark(!dark)}>
              {dark ? <SunIcon/> : <MoonIcon/>}
            </button>
          </div>          
    </header>
  )
}

export default Header