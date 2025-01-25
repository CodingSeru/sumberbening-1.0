import logo from '../img/logo.png'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './navbar.css'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-screen z-10 py-3 fixed top-0 h-[11dvh] md:px-14 sm:px-5 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : ''}`}>
    <nav>
      <div className="container mx-auto px-14 flex justify-between items-center">
        <motion.div className='flex items-center space-x-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img src={logo} alt="Logo" className='w-10' />
          <motion.h1 className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Sumber Bening
          </motion.h1>
        </motion.div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`text-3xl focus:outline-none ${isScrolled ? 'text-black' : 'text-white'}`}>
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
        <motion.ul id='menunav' className={` flex space-x-4 items-center transition-all ${isMenuOpen ? 'flex bg-white absolute flex-col right-0 top-16 w-2/5 h-screen' : 'hidden '} md:flex ${isScrolled ? 'text-black' : 'text-white rounded-xl h-fit right-8'} `} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <li className={`${isMenuOpen ? 'text-black m-2 mr-0' : ''}`}>
            <motion.a href="#" className="hover:text-blue-700 transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Home
            </motion.a>
          </li>
          <li className={`${isMenuOpen ? 'text-black m-2' : ''}`}>
            <motion.a href="#produk" className="hover:text-blue-700 transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Produk
            </motion.a>
          </li>
          <li className={`${isMenuOpen ? 'text-black m-2' : ''}`}>
            <motion.a href="#tentang" className="hover:text-blue-700 transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Tentang
            </motion.a>
          </li>
          <li className={`${isMenuOpen ? 'text-black m-2' : ''}`}>
            <motion.a href="#hubungi" className="hover:text-blue-700 transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Hubungi
            </motion.a>
          </li>
        </motion.ul>
      </div>
    </nav>
    </header>
  );
};

export default Navbar; 