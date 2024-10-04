import ContactImg from '../assets/contact.webp';

export default function Contact() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'id='contact'>
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-[250px] pb-5' src={ContactImg} alt="Contact" />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-[#5de79b] mb-5 w-[135px] font-bold'>Contact</h1>
                <form className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <textarea 
                        placeholder="Message" 
                        rows="5" 
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <button 
                        type="submit" 
                        className="p-3 bg-forth text-white rounded-lg hover:bg-secondary-dark transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
