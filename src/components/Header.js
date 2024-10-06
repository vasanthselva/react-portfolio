import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    // Function to close the menu
    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    return (
        <div class="header-wrapper">
        <header className="flex justify-between px-5 py-4 bg-second text-white">
            <a className="font-bold text-color: rgb(156, 237, 192); text-white" href="#">
                Vasanth S
            </a>

            <nav className="hidden md:block font-bold">
                <ul className="flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
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
                <Bars3Icon className="text-white h-5" />
            </button>
        </header>
        </div>
    );
}
