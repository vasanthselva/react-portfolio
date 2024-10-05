import AboutImg from '../assets/about.jpeg';
export default function About() {
    const config = {
        line1:'I am a computer science Engineer, who enjoys learning and scraping new stuff. I started coding when I was in college second year doing very basic stuff, like building static website with html.',
        line2:'I am proficient in Front end like Reactjs, Html-5, css-3, Javascript, Typescript Tailwindcss, bootstrap and Figma.',
        line3:'I am proficient in Back end Python frameworks like Flask, Django and node js, Express js and mangoDB.'
    }
    return(
        <section className='flex flex-col md:flex-row  px-5 py-5'id='about'>
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-[300px]' src={AboutImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center bg-text'>
            <div className='md:w-1/2 flex flex-col justify-center bg-'>
            <h1 className='text-4xl text-[#0b192e] border-b-4 border-[#568bd1] mb-5 w-[170px] font-bold'>About me</h1>
                    <p className='pb-5 font-home-font'>{config.line1}</p>
                    <p className='pb-5 font-home-font'>{config.line2}</p>
                    <p className='font-home-font'>{config.line3}</p>
            </div>
            
            </div>
        </section>
    );

}
