import SkillsImg from '../assets/skills.jpeg';
import { FaHtml5, FaGithub, FaReact, FaPython, FaNode } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { BiLogoFlask, BiLogoMongodb } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";


export default function Skills() {
    return (
        <section className='flex flex-col md:flex-row  px-5 py-5' id='skills'>
            {/* Image Section */}
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-[300px]' src={SkillsImg} alt="Skills" />
            </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='md:w-1/2 flex flex-col justify-start'>
            <h1 className='text-3xl text-[#0b192e] border-b-4 border-[#b32594cc] mb-5 w-[75px] font-bold'>Skills</h1>
            <h1 className='text-3x2 text-[#0b192e] mb-5 w-[75px] font-bold'>Front-end</h1>
            <div className='md:w-1/2 flex justify-start py-5 bg-skills'>
            <a href='#skills'className='pr-3'><FaHtml5 size={40} /></a>
            <a href='#skills'className='pr-3'><IoLogoCss3 size={40} /></a>
            <a href='#skills'className='pr-3 '><TbBrandJavascript size={40} /></a>
            <a href='#skills'className='pr-3 '><SiTypescript size={40} /></a>
            <a href='#skills'className='pr-3 '><RiTailwindCssFill size={40} /></a>
            <a href='#skills'className='pr-3 '><FaReact size={40} /></a>
            </div>
            <h1 className='text-3x2 text-[#0b192e] mb-5 w-[75px] font-bold'>Back-end</h1>
            <div className='md:w-1/2 flex justify-start py-5 bg-skills'>
            <a href='#skills'className='pr-3'><FaPython size={40} /></a>
            <a href='#skills'className='pr-3'><BiLogoFlask size={40} /></a>
            <a href='#skills'className='pr-3 '><DiDjango size={40} /></a>
            <a href='#skills'className='pr-3 '><FaNode size={40} /></a>
            <a href='#skills'className='pr-3 '><BiLogoMongodb size={40} /></a>
            <a href='#skills'className='pr-3 '><VscVscodeInsiders size={40} /></a>
            </div>
        </div>
        </div>
        </section>
    );
};
