import Projects1Img from '../assets/chatbot.jpeg';
import Projects2Img from '../assets/sign language.jpeg';
import Projects3Img from '../assets/old portfolio.PNG';
import Projects4Img from '../assets/new portfolio.PNG';
import { FaGithub } from "react-icons/fa";
export default function Projects() {
    return(
        <section className='flex flex-col py-20 px-5 justify-center bg.primary text-[#5de79b]' id='projects'>
<div className='w-1/2'>
<div className='flex justify-center'>
<h1 className='text-4xl text-[#0b192e] border-b-4 border-[#9cedc0] mb-5 w-[140px] font-bold'>Projects</h1>
</div>
</div>
<div className='w-full'>
<div className='flex flex-col md:flex-row px-10 gap-5 '>
    <div className='relative'>
    <a target="_blank" href="https://github.com/vasanthselva/projects/tree/main/gym%20chatbot">
<img className='h-[200px] w-[500px]' src= {Projects1Img}/>
<div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration=500 hover:opacity-100'>
    <p className='text-center px-5 py-5'>The GYM Chatbot web appilication using NLP</p><p className='text-center px-5 py-5'>view</p>
</div>
</a>
</div>
<div className='relative'>
<a target="_blank" href="https://github.com/vasanthselva/projects/tree/main/BATCH-5%20SIGN%20LANGUAGE%20DETECTION">
<img className='h-[200px] w-[500px]' src= {Projects2Img}/>
<div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration=500 hover:opacity-100'>
    <p className='text-center px-5 py-5'>Sign language Recognition using python</p><p className='text-center px-5 py-5'>view</p>
</div>
</a>
</div>
<div className='relative'>
<a target="_blank" href="https://github.com/vasanthselva/portfolio">
<img className='h-[200px] w-[500px]' src= {Projects3Img}/>
<div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration=500 hover:opacity-100'>
    <p className='text-center px-5 py-5'>Portfolio website using basic html & css</p><p className='text-center px-5 py-5'>view</p>
</div>
</a>
</div>
<div className='relative'>
<a>
<img className='h-[200px] w-[500px]' src= {Projects4Img}/>
<div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration=500 hover:opacity-100'>
    <p className='text-center px-5 py-5'>Portfolio website using react library</p><p className='text-center px-5 py-5'>view</p>
</div>
</a>
</div>
</div>
</div>
        </section>
    );
}