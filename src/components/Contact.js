import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactImg from '../assets/contact.webp';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        gmail: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendGmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_f4z3db1', 
            'template_cij5bbc', 
            formData,
            'Fg-AiSzboUhkxUXWy'  
        ).then((result) => {
            console.log('mail sent successfully:', result.text);
            alert('Message Sent!');
        }, (error) => {
            console.error('Failed to send mail:', error.text);
            alert('Failed to send message. Please try again.');
        });

        // Clear form fields after submission
        setFormData({
            name: '',
            Gmail: '',
            message: ''
        });
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'id='contact'>
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-[250px] pb-5' src={ContactImg} alt="Contact" />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-[#8d274d] mb-5 w-[135px] font-bold'>Contact</h1>
                <form onSubmit={sendGmail} className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <input 
                        type="gmail" 
                        name="gmail"
                        placeholder="Gmail" 
                        value={formData.gmail}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <textarea 
                        name="message"
                        placeholder="Message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <button 
                        type="submit" 
                        className="p-3 btn rounded-lg  transition duration-300">
                        Send Message
                     </button>
                </form> 
            </div>
        </section>
    );
}
