import Projects1Img from '../assets/chatbot.jpeg';
import Projects2Img from '../assets/sign language.jpeg';
import Projects3Img from '../assets/old portfolio.PNG';
import Projects4Img from '../assets/new portfolio.PNG';
export default function Projects() {
    const config = {
        projects : [
            {
                image: Projects1Img,
                discribtion:'The GYM Chatbot web appilication using NLP',
                link:'https://github.com/vasanthselva/projects/tree/main/gym%20chatbot'
            },
            {
                image: Projects2Img,
                discribtion:'Sign language Recognition using python',
                link:'https://github.com/vasanthselva/projects/tree/main/BATCH-5%20SIGN%20LANGUAGE%20DETECTION'
            },
            {
                image: Projects3Img,
                discribtion:'Portfolio website using basic html & css',
                link:'https://vasanthselvaportfolio.netlify.app/'
            },
            {
                image: Projects4Img,
                discribtion:'Portfolio website using react library',
                link:'https://github.com/vasanthselva/react-portfolio'
            }
        ]
    }
return(
        <section className='flex flex-col py-20 px-5 justify-center bg.primary text-[#5de79b]' id='projects'>
<div className='w-1/2'>
<div className='flex justify-center'>
<h1 className='text-4xl text-[#0b192e] border-b-4 border-[#9cedc0] mb-5 w-[140px] font-bold'>Projects</h1>
</div>
</div>
<div className='w-full'>
<div className='flex flex-col md:flex-row px-10 gap-5 '>
    {config.projects.map((proc) => (
        <div className='relative'>
    <img className='h-[200px] w-[500px]' src= {proc.image}/>
    <div className='absolute left-0 right-0 bottom-0 top-0 bg-forth opacity-0 duration=500 hover:opacity-100'>
        <p className='text-center px-5 py-5'>{proc.discribtion}</p>
        <div className='flex justify-center'>
    <a className='btn' target='blank' href={proc.link}>view project</a>
</div>
    </div>
    </div>

))}
</div>
</div>
        </section>
    );
}
