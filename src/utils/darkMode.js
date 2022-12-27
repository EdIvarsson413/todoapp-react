// Este archivo tiene la utilidad de detectar el modo que tiene el sistema operativo o navegador cuando 
//se ingresa a la pagina por primera vez 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'

}