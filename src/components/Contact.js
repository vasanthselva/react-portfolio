import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactImg from '../assets/contact.webp';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_nspdntn', 
            'template_5jpka3p', 
            formData,
            'k_wAG6Eu6soUTXPIq'  
        ).then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message Sent!');
        }, (error) => {
            console.error('Failed to send email:', error.text);
            alert('Failed to send message. Please try again.');
        });

        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'id='contact'>
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-[250px] pb-5' src={ContactImg} alt="Contact" />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-[#5de79b] mb-5 w-[135px] font-bold'>Contact</h1>
                <form onSubmit={sendEmail} className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
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
                        className="p-3 con rounded-lg  transition duration-300">
                        Send Message
                     </button>
                </form> 
            </div>
        </section>
    );
}
