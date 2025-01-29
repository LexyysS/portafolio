import {useState, useEffect} from 'react'

const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



  return (
    <nav className={ `  fixed w-full h-20 flex justify-center items-center gap-4 transition-all  ${scrolling ? 'bg-[rgba(0,0,0,0.35)]' : 'bg-transparent'}`}>
        <a href='#inicio' className='text-white p-2 hover:scale-110 transition-all'>Inicio</a>
        <a href='#proyectos' className='text-white p-2 hover:scale-110 transition-all'>Proyectos</a>
        <a href='#sobremi' className='text-white p-2  hover:scale-110 transition-all'>Sobre mi</a>

    </nav>
  )
}

export default NavBar