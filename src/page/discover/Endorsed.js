import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Matter from 'matter-js';

const Endorsed = () => {
    const sceneRef = useRef(null);
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const founders = [
        {
            id: 1,
            name: "Sri. Krishna Kanth",
            position: "Governor of Andra Pradesh",
            period: "10-07-1990",
            image: "/path-to-image.jpg",
            bio: "I am feeling very much rewarded for coming and seeing cooperative concept so well administered that it can be a model to not only the cooperative movement but to the administrators & managers all over the Country.",
        },
        {
            id: 2,
            name: "P.N.Haksar",
            position: "Deputy Chairman, planning Commission",
            image: "/path-to-image.jpg",
            bio: `"Ye Mulkanoor Nahi Hai... Ye Mulk ka Noor Hai "
                    "This is not Mulkanoor, it is light of Nation"`,
        },
        {
            id: 3,
            name: "ESL Narsimhan",
            position: " Governor, Andhra Pradesh",
            period: "14-09-2012",
            image: "/path-to-image.jpg",
            bio: "A dream fulfilled a mind boggling exercise in cooperative its fruits. A cooperative with a vision and a mission aimed at uplifting the lives of people. Only wish we could replicate this model in other areas of the state see the same smiles on our Sri Shakthi.",
        },
        {
            id: 4,
            name: "Marri Chenna Reddy",
            position: "Panchayati Raj Minister, Govt. of A.P",
            period: "11-01-1963",
            image: "/path-to-image.jpg",
            bio: "I am happy to see the enthusiasm & sincerity of purpose in the functioning of this bank.The necessaries of the rural people are looked after with care and attention & all the resources are mobilized this study growth which is also healthy & backed by popular support & comprehensive procreative gives us great inspiration. I wish the institution all success.",
        },
        {
            id: 5,
            name: "Dr. Y.S. Rajashekhara Reddy",
            position: "Chief Minister, Govt. of A.P",
            period: "19-03-2006",
            image: "/path-to-image.jpg",
            bio: "There is an imperative need to give new fillip to the Cooperative movement and help extend sustainable efforts in employment and poverty alleviation besides providing support to the weaker section of the society. It is also important to know that the MCRB MS Ltd., is striving in this direction with dedication.",
        },
        {
            id: 6,
            name: "N. Kiran Kumar Reddy",
            position: " Speaker, A.P Legislative Assembly",
            period: "26-11-2009",
            image: "/path-to-image.jpg",
            bio: "It was a total study tour and the Cooperative setup in the state. if it follows the Mulkanoor way shall be a farmers revival and golden day as the farmers shall return.",
        },
        {
            id: 7,
            name: "Dr. V. Kurien",
            position: "Father of Milk Revolution, INDIA",
            image: "/path-to-image.jpg",
            bio: `This institution has demonstrated that cooperatives can help in ensuring that our marginalized people can work wonders when the instruments of development are placed in their hands.
                In every successful grass roots cooperative members must trust their leaders. Trust is the most cost effective way to manage cooperatives. It is built on the demonstrations of entrepreneurship, transparently honestly and commitment to the concept of trusteeship. These traits were ably demonstrated by the late Sri A.K. Vishwanatha Reddy the founder President.
                A strong member controlled cooperative movement provide a foundation on which a strong India can built development in not only a matter of technology it is a matter of building institution.`,
        },
        {
            id: 8,
            name: "Sri Chandrapal Singh Yadav",
            position: "NCUI President",
            image: "/path-to-image.jpg",
            bio: "Cooperative institutions are more relevant today in the context of socio- economic development of rural masses, especially the farming community. The role being played by MCRB MS in this direction and the significant contribution made by it for the development of cooperative movement hardly needs to be emphasizes. The society is a shining example in the realms of successful cooperatives, not only in the state of A.P. but also in the whole country.",
        },
        {
            id: 9,
            name: "Sri Jayaprakash Narayan",
            position: "National Coordinator, Lok Satta",
            image: "/path-to-image.jpg",
            bio: `There is an imperative need to give new fillip to the Cooperative movement and help extend sustainable efforts in employment and poverty alleviation besides providing support to the weaker section of the society. It is also important to know that the MCRB MS Ltd., is striving in this direction with dedication.
                In an otherwise gloomy scenario. The Mulkanoor Cooperative Society stands out and is a shining example of how honest and committed leadership, free from undue government control, could make the difference and will continue to be the harbinger of development in its area of operation.`,
        },
        {
            id: 10,
            name: "Sri Ch. Hanumantha Rao",
            position: " Former Member, Planning Commission of India",
            image: "/path-to-image.jpg",
            bio: "I had the privilege of meeting and discussing with the Founder-President of the societ -y. Late Sri Algireddy Kashi Viswanatha Reddy garu. I was overtaken by a sense of pride in the fact that, a so called backward area is capable of producing rural leadership that is rated amongst the best in the word in terms of commitment to rural development and the betterment of the rural poor, organizational abilities, personal integrity and adherence to the highest values of a democratic and just society. Ever since then I have been groping to find out how the Mulkanoor model of Cooperative Movement can be replicated on a wider scale in the country.",
        },
        {
            id: 11,
            name: "Dr. M.V. Rao",
            position: "(IAS), NIRD, Director General, (IAS), Hyderabad",
            image: "/path-to-image.jpg",
            bio: "Highly inspired by the efforts and success of the society. It is a role model for others. If at all villages have such committed cooperative societies, India will change for better. It is one stop answer to all needs and aspirations of farmers. The villages are lucky to have such visionary founder and followed by the President, Shri A. Praveen Reddy, Hats off!",
        },
        {
            id: 12,
            name: "Vasudha Mishra",
            position: "IAS, Managing Director, NCDC, New Delhi",
            image: "/path-to-image.jpg",
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

    // Calculate card movement based on mouse position
    const calculateCardMovement = (index, mousePosition) => {
        if (!containerRef.current) return { x: 0, y: 0 };
        const card = containerRef.current.children[index];
        if (!card) return { x: 0, y: 0 };

        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const deltaX = mousePosition.x - cardCenterX;
        const deltaY = mousePosition.y - cardCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 400;

        if (distance < maxDistance) {
            const factor = (maxDistance - distance) / maxDistance;
            return {
                x: deltaX * factor * 0.1,
                y: deltaY * factor * 0.1
            };
        }
        return { x: 0, y: 0 };
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white pt-16 md:pt-24 overflow-hidden">
            {/* Interactive Background */}
            <div ref={sceneRef} className="fixed inset-0 pointer-events-none" />

            {/* Hero Section */}
            <motion.div
                className="relative z-10 mb-8 md:mb-16 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-4">
                    Our Visionary Leaders
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
                    The pioneers who shaped our cooperative movement
                </p>
            </motion.div>

            {/* Founders Grid with Alternating Layout */}
            <div className="relative z-10 mb-10 px-4 md:px-8">
                <div ref={containerRef} className="space-y-8">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.id}
                            className={`bg-white/5 backdrop-blur-sm flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                                rounded-2xl overflow-hidden`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                x: calculateCardMovement(index, mousePosition).x,
                                y: calculateCardMovement(index, mousePosition).y
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(255, 255, 255, 0.1)"
                            }}
                        >
                            {/* Image Section */}
                            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{founder.name}</h3>
                                    <p className="text-lg md:text-xl text-gray-300 mb-1">{founder.position}</p>
                                    <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-6">{founder.period}</p>
                                    <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                        {founder.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Endorsed;