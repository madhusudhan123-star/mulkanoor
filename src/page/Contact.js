import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';


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
            // icon: <FaPhone className="text-2xl" />,
            title: "Phone",
            details: ["+91 9440800651"],
            animation: { y: [0, -5, 0], transition: { duration: 2, repeat: Infinity } }
        },
        {
            // icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            details: ["mcrcms1956@gmail.com"],
            animation: { x: [-5, 5, -5], transition: { duration: 2, repeat: Infinity } }
        },
        {
            // icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Address",
            details: ["                                Mulkanoor Cooperative Rural Credit and Marketing Society Ltd., Mulkanoor Village, Bheemadevarapally Mandal, Hanumakonda District-505471"],
            animation: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }
        },
        {
            // icon: <FaClock className="text-2xl" />,
            title: "Working Hours",
            details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
            animation: { rotate: [0, 5, -5, 0], transition: { duration: 3, repeat: Infinity } }
        }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, color: "hover:bg-blue-600", link:"https://www.facebook.com/profile.php?id=61566000885423" },
        { icon: <FaTwitter />, color: "hover:bg-blue-400", link:"https://x.com/mulkanoorCoop" },
        { icon: <FaInstagram />, color: "hover:bg-pink-600", link:"https://www.instagram.com/mulkanoor_coop/?hl=en" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9] pt-24 pb-16">
            <Helmet>
                <title>Contact Us - Mulkanoor Cooperative</title>
                <meta name="description" content="Get in touch with Mulkanoor Cooperative through our contact channels. Reach us by phone, email, or visit our location in Mulkanoor village, Telangana. Available Monday to Saturday, 9 AM to 6 PM."/>
            </Helmet>
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
                            {/* <motion.div
                                className="text-[#8B7355] mb-4"
                                animate={info.animation}
                            >
                                {info.icon}
                            </motion.div> */}
                            <h3 className="text-xl cursor-default font-semibold text-[#4A3F35] mb-2">{info.title}</h3>
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
                            src="https://www.google.com/maps?q=18.08078956604,79.3598556518555&z=14&output=embed"
                            width="100%"
                            height="100%"
                            // style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Mulkanoor Operational Areas"
                            class="rounded-lg shadow-md">
                        </iframe>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-white/80 rounded-xl p-8 shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-2xl cursor-default font-bold text-[#4A3F35] mb-6">Send us a Message</h2>
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
                            href={social.link}
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