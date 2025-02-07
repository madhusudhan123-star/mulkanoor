import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: "Phone",
            details: ["+91 87904 36417", "+91 87904 36418"],
            animation: { y: [0, -5, 0], transition: { duration: 2, repeat: Infinity } }
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            details: ["info@mulkanoor.coop", "support@mulkanoor.coop"],
            animation: { x: [-5, 5, -5], transition: { duration: 2, repeat: Infinity } }
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Address",
            details: ["Mulkanoor village, Bheemdevarapally Mandal", "Hanamkonda District, Telangana - 506 345"],
            animation: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }
        },
        {
            icon: <FaClock className="text-2xl" />,
            title: "Working Hours",
            details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
            animation: { rotate: [0, 5, -5, 0], transition: { duration: 3, repeat: Infinity } }
        }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, color: "hover:bg-blue-600" },
        { icon: <FaTwitter />, color: "hover:bg-blue-400" },
        { icon: <FaInstagram />, color: "hover:bg-pink-600" },
        { icon: <FaLinkedin />, color: "hover:bg-blue-700" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9] pt-24 pb-16">
            {/* Decorative Background Pattern */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 pattern-diagonal opacity-5" />
                <div className="absolute bottom-0 right-0 w-full h-64 pattern-dots opacity-5" />
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 text-center mb-16">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-[#4A3F35] mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    className="text-xl text-[#8B7355] max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Get in touch with us for any queries or assistance
                </motion.p>
            </div>

            {/* Contact Info Cards */}
            <div className="container mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl 
                                     transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <motion.div
                                className="text-[#8B7355] mb-4"
                                animate={info.animation}
                            >
                                {info.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-[#4A3F35] mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-[#8B7355]">{detail}</p>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Map and Form Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Map */}
                    <motion.div
                        className="rounded-xl overflow-hidden shadow-lg h-[400px]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.087281403!2d79.27659!3d18.19235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f36eb976d79%3A0x9f236b1b1049f432!2sMulkanoor%20Cooperative%20Rural%20Bank%20and%20Marketing%20Society!5e0!3m2!1sen!2sin!4v1708786037571!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-white/80 rounded-xl p-8 shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-2xl font-bold text-[#4A3F35] mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['name', 'email', 'phone', 'subject'].map((field, index) => (
                                    <motion.input
                                        key={field}
                                        type={field === 'email' ? 'email' : 'text'}
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        value={formData[field]}
                                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#8B7355]/20
                                                 focus:outline-none focus:border-[#8B7355]"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                ))}
                            </div>
                            <motion.textarea
                                rows="4"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#8B7355]/20
                                         focus:outline-none focus:border-[#8B7355]"
                                whileFocus={{ scale: 1.02 }}
                            ></motion.textarea>
                            <motion.button
                                type="submit"
                                className="bg-[#8B7355] text-white px-8 py-3 rounded-full flex items-center 
                                         justify-center gap-2 hover:bg-[#4A3F35] transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                                <BiSend />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Social Links */}
            <div className="container mx-auto px-4">
                <div className="flex justify-center gap-6">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            className={`w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center 
                                      text-[#8B7355] ${social.color} transition-all duration-300`}
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;