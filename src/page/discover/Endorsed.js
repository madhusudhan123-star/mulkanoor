import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Matter from 'matter-js';
import card1 from '../../assets/Endorsed/card1.jpg';
import card2 from '../../assets/Endorsed/card2.jpg';
import card3 from '../../assets/Endorsed/card3.jpg';
import card4 from '../../assets/Endorsed/card4.jpg';
import card5 from '../../assets/Endorsed/card5.jpg';
import card6 from '../../assets/Endorsed/card6.jpg';
import card7 from '../../assets/Endorsed/card7.jpg';
import card8 from '../../assets/Endorsed/card8.jpg';
import card9 from '../../assets/Endorsed/card9.jpg';
import card10 from '../../assets/Endorsed/card10.jpg';
import card11 from '../../assets/Endorsed/card11.jpg';
import card12 from '../../assets/Endorsed/card12.jpg';
import { Helmet } from 'react-helmet'

const Modal = ({ founder, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#2a2a2a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 p-6">
                        <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-[400px] object-contain rounded-lg"
                        />
                    </div>
                    <div className="md:w-3/5 p-6">
                        <h2 className="text-3xl font-bold mb-2">{founder.name}</h2>
                        <p className="text-xl text-gray-300 mb-1">{founder.position}</p>
                        {founder.period && (
                            <p className="text-lg text-gray-400 mb-4">{founder.period}</p>
                        )}
                        <p className="text-xl leading-relaxed text-yellow-400">{founder.bio}</p>
                    </div>
                </div>
                <button
                    className="absolute top-4 right-4 text-white p-2"
                    onClick={onClose}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </motion.div>
        </motion.div>
    );
};

const Endorsed = () => {
    const sceneRef = useRef(null);
    const [selectedFounder, setSelectedFounder] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const founders = [
        {
            id: 1,
            name: "Sri. Krishna Kanth",
            position: "Governor of Andra Pradesh",
            period: "10-07-1990",
            image: card1,
            bio: "I am feeling very much rewarded for coming and seeing cooperative concept so well administered that it can be a model to not only the cooperative movement but to the administrators & managers all over the Country.",
        },
        {
            id: 2,
            name: "P.N.Haksar",
            position: "Deputy Chairman, planning Commission",
            image: card11,
            bio: `"Ye Mulkanoor Nahi Hai... Ye Mulk ka Noor Hai "
                    "This is not Mulkanoor, it is light of Nation"`,
        },
        {
            id: 3,
            name: "ESL Narsimhan",
            position: " Governor, Andhra Pradesh",
            period: "14-09-2012",
            image: card3,
            bio: "A dream fulfilled a mind boggling exercise in cooperative its fruits. A cooperative with a vision and a mission aimed at uplifting the lives of people. Only wish we could replicate this model in other areas of the state see the same smiles on our Sri Shakthi.",
        },
        {
            id: 4,
            name: "Marri Chenna Reddy",
            position: "Panchayati Raj Minister, Govt. of A.P",
            period: "11-01-1963",
            image: card4,
            bio: "I am happy to see the enthusiasm & sincerity of purpose in the functioning of this bank.The necessaries of the rural people are looked after with care and attention & all the resources are mobilized this study growth which is also healthy & backed by popular support & comprehensive procreative gives us great inspiration. I wish the institution all success.",
        },
        {
            id: 5,
            name: "Dr. Y.S. Rajashekhara Reddy",
            position: "Chief Minister, Govt. of A.P",
            period: "19-03-2006",
            image: card5,
            bio: "There is an imperative need to give new fillip to the Cooperative movement and help extend sustainable efforts in employment and poverty alleviation besides providing support to the weaker section of the society. It is also important to know that the MCRB MS Ltd., is striving in this direction with dedication.",
        },
        {
            id: 6,
            name: "N. Kiran Kumar Reddy",
            position: " Speaker, A.P Legislative Assembly",
            period: "26-11-2009",
            image: card6,
            bio: "It was a total study tour and the Cooperative setup in the state. if it follows the Mulkanoor way shall be a farmers revival and golden day as the farmers shall return.",
        },
        {
            id: 7,
            name: "Dr. V. Kurien",
            position: "Father of Milk Revolution, INDIA",
            image: card7,
            bio: `This institution has demonstrated that cooperatives can help in ensuring that our marginalized people can work wonders when the instruments of development are placed in their hands.
                In every successful grass roots cooperative members must trust their leaders. Trust is the most cost effective way to manage cooperatives. It is built on the demonstrations of entrepreneurship, transparently honestly and commitment to the concept of trusteeship. These traits were ably demonstrated by the late Sri A.K. Vishwanatha Reddy the founder President.
                A strong member controlled cooperative movement provide a foundation on which a strong India can built development in not only a matter of technology it is a matter of building institution.`,
        },
        {
            id: 8,
            name: "Sri Chandrapal Singh Yadav",
            position: "NCUI President",
            image: card8,
            bio: "Cooperative institutions are more relevant today in the context of socio- economic development of rural masses, especially the farming community. The role being played by MCRB MS in this direction and the significant contribution made by it for the development of cooperative movement hardly needs to be emphasizes. The society is a shining example in the realms of successful cooperatives, not only in the state of A.P. but also in the whole country.",
        },
        {
            id: 9,
            name: "Sri Jayaprakash Narayan",
            position: "National Coordinator, Lok Satta",
            image: card9,
            bio: `There is an imperative need to give new fillip to the Cooperative movement and help extend sustainable efforts in employment and poverty alleviation besides providing support to the weaker section of the society. It is also important to know that the MCRB MS Ltd., is striving in this direction with dedication.
                In an otherwise gloomy scenario. The Mulkanoor Cooperative Society stands out and is a shining example of how honest and committed leadership, free from undue government control, could make the difference and will continue to be the harbinger of development in its area of operation.`,
        },
        {
            id: 10,
            name: "Sri Ch. Hanumantha Rao",
            position: " Former Member, Planning Commission of India",
            image: card10,
            bio: "I had the privilege of meeting and discussing with the Founder-President of the societ -y. Late Sri Algireddy Kashi Viswanatha Reddy garu. I was overtaken by a sense of pride in the fact that, a so called backward area is capable of producing rural leadership that is rated amongst the best in the word in terms of commitment to rural development and the betterment of the rural poor, organizational abilities, personal integrity and adherence to the highest values of a democratic and just society. Ever since then I have been groping to find out how the Mulkanoor model of Cooperative Movement can be replicated on a wider scale in the country.",
        },
        {
            id: 11,
            name: "Dr. M.V. Rao",
            position: "(IAS), NIRD, Director General, (IAS), Hyderabad",
            image: card2,
            bio: "Highly inspired by the efforts and success of the society. It is a role model for others. If at all villages have such committed cooperative societies, India will change for better. It is one stop answer to all needs and aspirations of farmers. The villages are lucky to have such visionary founder and followed by the President, Shri A. Praveen Reddy, Hats off!",
        },
        {
            id: 12,
            name: "Vasudha Mishra",
            position: "IAS, Managing Director, NCDC, New Delhi",
            image: card12,
            bio: "It was a pleasure to visit the bank and the society. They are doing all activities in the spirit of cooperative principles. I wish them all success in their Endeavour.",
        },
    ];

    useEffect(() => {
        const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Common } = Matter;
        const engine = Engine.create({
            gravity: { x: 0, y: 0.2 }
        });

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio
            }
        });

        // Create interactive floating elements
        const elements = [];
        const colors = ['#4CAF50', '#81C784', '#C8E6C9'];

        for (let i = 0; i < 20; i++) {
            const radius = Common.random(5, 15);
            elements.push(
                Bodies.circle(
                    Common.random(0, window.innerWidth),
                    Common.random(0, window.innerHeight),
                    radius,
                    {
                        mass: radius * 0.1,
                        friction: 0.1,
                        restitution: 0.9,
                        render: {
                            fillStyle: colors[Math.floor(Math.random() * colors.length)],
                            opacity: 0.6
                        }
                    }
                )
            );
        }

        World.add(engine.world, elements);

        // Add mouse interaction
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        World.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        // Run the engine
        Engine.run(engine);
        Render.run(render);

        // Handle window resize
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
            Render.setPixelRatio(render, window.devicePixelRatio);
        };

        window.addEventListener('resize', handleResize);

        // Mouse move effect for cards
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            Render.stop(render);
            World.clear(engine.world);
            Engine.clear(engine);
            render.canvas.remove();
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white pt-32 pb-8 overflow-hidden">
            <Helmet>
                <title>Leaders & Endorsements - Mulkanoor Cooperative Society</title>
                <meta 
                    name="description" 
                    content="Discover the visionary leaders who shaped Mulkanoor Cooperative Society, including governors, ministers, and agricultural experts. Featuring endorsements from Dr. V. Kurien, ESL Narsimhan, and other distinguished personalities."
                />
                <meta
                    name="keywords"
                    content="Mulkanoor leaders, cooperative movement pioneers, agricultural development, rural leadership, cooperative society endorsements"
                />
                <meta 
                    property="og:title" 
                    content="Leaders & Endorsements - Mulkanoor Cooperative Society" 
                />
                <meta 
                    property="og:description" 
                    content="Meet the visionary leaders and distinguished personalities who endorsed and shaped our cooperative movement's success story." 
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mulkanoor Cooperative Society",
                        "description": "Pioneering cooperative society in rural development",
                        "founder": founders.map(founder => ({
                            "@type": "Person",
                            "name": founder.name,
                            "jobTitle": founder.position,
                            "description": founder.bio,
                            "image": founder.image
                        })),
                        "review": founders.map(founder => ({
                            "@type": "Review",
                            "author": {
                                "@type": "Person",
                                "name": founder.name,
                                "jobTitle": founder.position
                            },
                            "reviewBody": founder.bio,
                            "datePublished": founder.period || "1956"
                        })),
                        "award": [
                            {
                                "@type": "Award",
                                "name": "Model Cooperative Society",
                                "description": "Recognition for exemplary cooperative management and rural development"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            {/* Interactive Background */}
            <div ref={sceneRef} className="fixed inset-0 pointer-events-none" />

            {/* Hero Section */}
            <motion.div
                className="relative z-10 mb-12 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl cursor-default md:text-6xl font-bold text-center mb-4">
                    Our Visionary Leaders
                </h1>
                <p className="text-lg cursor-default md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
                    The pioneers who shaped our cooperative movement
                </p>
            </motion.div>

            {/* Founders Grid */}
            <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {founders.map((founder, index) => (                        <motion.div
                            key={founder.id}
                            className="bg-white/5 backdrop-blur-sm cursor-pointer rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedFounder(founder)}
                        >
                            <div className="relative cursor-pointer h-[280px] sm:h-[320px] md:h-[300px]">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t cursor-pointer from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 p-3 md:p-4">
                                    <h3 className="text-lg md:text-xl cursor-default font-bold mb-1">{founder.name}</h3>
                                    <p className="text-xs md:text-sm cursor-default text-gray-300">{founder.position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                <Modal
                    founder={selectedFounder}
                    isOpen={!!selectedFounder}
                    onClose={() => setSelectedFounder(null)}
                />
            </AnimatePresence>
        </div>
    );
};

export default Endorsed;