import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (<header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-color: rgb(156, 237, 192); bg-name" href="#about">Vasanth S</a>
        <nav className="hidden md:block">
        <ul className="flex">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
        </nav>
        { toggleMenu && <nav className="block md:hidden ">
        <ul onclick={() => setToggleMenu(!toggleMenu)} className="flex flex-col mobile-nav">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-white h-5"/></button>
        </header>
    );
}
