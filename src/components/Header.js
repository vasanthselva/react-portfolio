import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    // Function to close the menu
    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    return (
        <header className="flex justify-between px-5 py-2 bg-fifth text-[#5de79b]">
            <a className="font-bold text-color: rgb(156, 237, 192); bg-name" href="#">
                Vasanth S
            </a>

            <nav className="hidden md:block">
                <ul className="flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {toggleMenu && (
                <nav className="block md:hidden justify-between">
                    <ul className="flex flex-col mobile-nav">
                        <li><a className="nav-item href="/" onClick={handleLinkClick}>Home</a></li>
                        <li><a className="nav-item href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a className="nav-item href="#projects" onClick={handleLinkClick}>Projects</a></li>
                        <li><a className="nav-item href="#experience" onClick={handleLinkClick}>Experience</a></li>
                        <li><a className="nav-item href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </nav>
            )}

            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-5" />
            </button>
        </header>
    );
}
