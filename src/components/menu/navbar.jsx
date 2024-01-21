import React from 'react';
import logome from '../../assets/logome.jpg';
import { MdClear, MdMenu } from 'react-icons/md';
import { useState } from 'react';
import { motion } from 'framer-motion';

const menulink = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About Me',
    link: '/',
  },
  {
    id: 3,
    title: 'Projects',
    link: '/',
  },
];
const Navbar = () => {
  const [menu, setmenu] = useState(false);

  const openmenu = (e) => {
    setmenu(!menu);
  };
  return (
    <>
      <nav className="navbar bg-slate-50 justify-between">
        <div className="navbar-start py-1 px-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <a href="/">
                <img src={logome} />
              </a>
            </div>
          </div>
        </div>
        <div classname="hidden md:navbar-center">
          <ul className="hidden md:flex md:flex-row md:items-center md:space-x-5 md:mr-10">
            {menulink.map((menulinks) => (
              <li
                className="text-xl font-medium text-slate-950 hover:text-gray-500"
                key={menulinks.id}
              >
                <a href={menulinks.link}>{menulinks.title}</a>
              </li>
            ))}
          </ul>
          <motion.div
            initial={false}
            animate={{ rotate: menu ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="py-1 px-1 rounded-full bg-orange-500 md:hidden"
              type="button"
              onClick={openmenu}
            >
              {menu ? 
                (
                <MdClear className="text-3xl text-white animate_animated animate_rotatein" />
                ) : (
                <MdMenu className="text-3xl text-white animate_animated animate_rotateout" />
              )}
            </button>
          </motion.div>
        </div>
   
      </nav>
      <motion.div
          initial = {false}
          animate={menu ? {y: 0} : {y : '-100%'}}
          transition={{delay: 0}}
      >
        {menu && (
          <div className="bg-slate-50 md:hidden">
            <ul className="flex flex-col items-center justify-center p-20">
              {menulink.map((menulinks) => (
                <li
                  className="text-3xl font-medium text-teal-950 hover:text-slate-800 cursor-pointer py-2 place-items-center"
                  key={menulinks.id}
                >
                  <a href={menulinks.link}>{menulinks.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </>  
  )
    }
export default Navbar
