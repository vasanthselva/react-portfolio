import { CgWebsite } from "react-icons/cg";
import { IoLogoAndroid } from "react-icons/io";
import { TbWriting } from "react-icons/tb";
import { FaBlogger, FaEnvelope, FaWhatsappSquare } from "react-icons/fa";
export default function Remote() {
    return(<section className='flex flex-col md:flex-row  px-5 py-5 bg-[#ecc363]' id="remote">
        <div className='w-1/2 md:w-ful  flex justify-items-center px-5 bg-[#ecc363]'>
            <div className='md:w-full flex flex-col justify-center bg-text'>
            <h1 className='text-3xl text-black border-b-4 border-[#f0ab44] mb-5 w-[185px] font-bold'>RemoteWork</h1>
            <h1 className='text-1xl text-black mb-5 w-[250px] font-bold flex items-center' href='#remote'>
      <CgWebsite size={25} className="mr-2"/>Web Design</h1>
      <h1 className='text-1xl text-black mb-5 w-[250px] font-bold flex items-center' href='#remote'>
      <IoLogoAndroid size={25} className="mr-2"/>Web Application</h1>
      <h1 className='text-1xl text-black mb-5 w-[250px] font-bold flex items-center' href='#remote'>
      <TbWriting size={25} className="mr-2"/>Content Writing</h1>
      <h1 className='text-1xl text-black mb-5 w-[250px] font-bold flex items-center' href='#remote'>
      <FaBlogger size={25} className="mr-2"/>Digital Marketing (BLOGS)</h1>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-4 bg-[#ecc363]">
          <a href="mailto:cssvasanth@gmail.com" className=" w-[185px] hover:text-gray-400 text-black text-1xl  mb-5 w-[250px] flex items-center"><FaEnvelope size={20} className="text-black mr-2" />Email</a>
        <a href="https://wa.me/<917094988549>?text=Hi" className=" w-[185px] hover:text-gray-400 text-black text-1xl mb-5 w-[250px] flex items-center"><FaWhatsappSquare size={20} className="text-black mr-2" /> Whatapp</a>
        </div>

    </section>)
}
