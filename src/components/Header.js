import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    // Function to close the menu
    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    return (
        <header className="flex justify-between px-5 py-4 bg-second text-white pb-5">
            <a className="font-bold  text-[#2c2a2a]" href="#remote">
                Vasanth S
            </a>

            <nav className="hidden md:block font-bold">
                <ul className="flex">
                    <li className="hover:shadow-md transition-shadow duration-300"><a href="/">Home</a></li>
                    <li className="hover:shadow-md transition-shadow duration-300"><a href="#about">About</a></li>
                    <li className="hover:shadow-md transition-shadow duration-300"><a href="#projects">Projects</a></li>
                    <li className="hover:shadow-md transition-shadow duration-300"><a href="#experience">Experience</a></li>
                    <li className="hover:shadow-md transition-shadow duration-300"><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {toggleMenu && (
                <nav className=" flex font-bold items-center justify-center md:hidden">
                    <ul className="flex flex-col mobile-nav">
                        <li><a href="/" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                        <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </nav>
            )}

<button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
  {toggleMenu ? (
    <XMarkIcon className="text-[#2c2a2a] h-5" /> // X icon when menu is open
  ) : (
    <Bars3Icon className="text-[#2c2a2a] h-5" /> // Hamburger icon when menu is closed
  )}
</button>
        </header>
    );
}
