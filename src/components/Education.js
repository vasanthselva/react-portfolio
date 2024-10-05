import EducationImg from '../assets/education.jpeg';
export default function Education() {
    const config = {
        line1:'BE, Computer Science and Engineering-7.5 CGPA',
        line2:'Chendhuran College of Engineering and Technology.'
    }
    return(
        <section className='flex flex-col md:flex-row  px-5 py-5'>
            <div className='md:w-1/2 flex justify-center'>
            <img className='w-[300px]' src={EducationImg} alt="Resume" />
            </div>
            <div className='md:w-1/2 flex justify-center bg-text'>
            <div className='md:w-1/2 flex flex-col justify-center bg-'>
            <h1 className='text-3xl text-[#0b192e] border-b-4 border-[#b32594cc] mb-5 w-[165px] font-bold'>Education</h1>
            <p className='pb-5 font-home-font'>{config.line1}<br/>
            {config.line2}</p>
            <h1 className='text-3x2 text-[#0b192e] mb-5 w-[75px] font-bold'>Batch</h1>
            <p className='pb-5 font-home-font'>2020-2024</p>
            </div>
            </div>
        </section>
    );
}
