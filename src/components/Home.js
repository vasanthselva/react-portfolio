import vasanthImg from '../assets/vasanth.jpg';
import ResumePdf from '../assets/current CV.pdf';
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
export default function Home() {
    const config = {
        subtitle:'Im Frontend and Backend Developer',
        link:ResumePdf
    }
 
    return(<section className='flex flex-col md:flex-row px-8 py-28 bg-secondary justify-center' id='home'>
        <div className='md:w-1/2 flex flex-col'> 
        <h1 className=' text-[#5de79b] text-4xl font-home-font justify-center'>Hi,<br/>Im <span className='text-white'>Vasanth S</span>
        <p className='text-2xl justify-center'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10 bg-icon'>
            <a href='https://github.com/vasanthselva'className='pr-5 '><FaGithub size={40} /></a>
            <a href='https://www.linkedin.com/in/vasanth-selvakumar/'className='pr-5 '><FaLinkedinIn size={40} /></a>
            <a href='https://www.instagram.com/vasanthx._/'className=''><FaInstagram size={40} /></a>
        </div>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-4xl text-white font-home-font justify-center border-b-4 border-[#5de79b] mb-5 w-[125px] font-bold'>Resume</h1>
                    <p className='pb-5 text-[#5de79b] font-home-font'>You can view my resume <a className='btn' href={config.link}>Downlord</a></p>
            </div>
        </div>
        <img className='md:w-1/3' src={vasanthImg}/>
            
    </section>
    );
}
