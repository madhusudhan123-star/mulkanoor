import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import one from '../../assets/home/one.mp4';
import two from '../../assets/home/two.mp4';
import three from '../../assets/home/three.mp4';
import poster1 from '../../assets/home/poster1.jpg';
import poster2 from '../../assets/home/poster2.jpg';
import poster3 from '../../assets/home/poster3.jpg';
import CountUp from 'react-countup';
import useInView from '../../hooks/useInView';

const StatCard = ({ number, suffix, prefix, label }) => (
    <div className='text-center p-6 rounded-xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm 
        transition-all duration-500 hover:scale-105 border border-white/10'>
        <div className='text-4xl md:text-6xl font-bold text-white'>
            <CountUp end={number} duration={2.5} prefix={prefix} suffix={suffix} />
        </div>
        <p className='text-sm md:text-base mt-2 text-white/80'>{label}</p>
    </div>
);

const Head = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRefs = useRef([]);

    // Use webm format for better compression and faster loading
    const videos = [
        {
            src: one,
            poster: poster1, // Add poster images for faster initial load
            title: 'Empowering Farmers'
        },
        {
            src: two,
            poster: poster2,
            title: 'Modern Agriculture'
        },
        {
            src: three,
            poster: poster3,
            title: 'Sustainable Future'
        }
    ];

    useEffect(() => {
        // Preload next video
        const preloadNext = () => {
            const nextIndex = (currentVideo + 1) % videos.length;
            const nextVideo = videoRefs.current[nextIndex];
            if (nextVideo) {
                nextVideo.load();
            }
        };

        // Handle video transitions
        const handleVideoEnd = () => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        };

        const currentVideoElement = videoRefs.current[currentVideo];
        if (currentVideoElement) {
            currentVideoElement.play();
            currentVideoElement.addEventListener('ended', handleVideoEnd);
        }

        preloadNext();

        return () => {
            if (currentVideoElement) {
                currentVideoElement.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, [currentVideo, videos.length]);

    return (
        <div className="relative w-full h-screen">
            {/* Video Container */}
            <AnimatePresence mode="wait">
                {videos.map((video, index) => (
                    <motion.div
                        key={index}
                        className={`absolute inset-0 ${index === currentVideo ? 'z-10' : 'z-0'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentVideo ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <video
                            ref={el => videoRefs.current[index] = el}
                            className="w-full h-full object-cover absolute top-0 left-0"
                            playsInline
                            muted
                            preload={index === currentVideo ? 'auto' : 'none'}
                            poster={video.poster}
                            loading="lazy"
                        >
                            <source src={video.src} type="video/webm" />
                            Your browser does not support video playback.
                        </video>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                        {/* Video Title */}
                        <motion.div
                            className="absolute bottom-20 left-10 text-white z-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.5 }}
                        >
                            {/* <h2 className="text-4xl font-bold">{video.title}</h2> */}
                        </motion.div>
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Stats Section - Added at bottom of video */}
            <motion.div
                className="absolute bottom-20 left-0 right-0 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row items-center justify-around gap-8'>
                        <StatCard
                            number={7600}
                            suffix="+"
                            label="Farmers Empowered"
                        />
                        <StatCard
                            number={220}
                            prefix="₹ "
                            suffix=" Cr"
                            label="Credit Facilitated"
                        />
                        <StatCard
                            number={40000}
                            suffix="+"
                            label="Acres Cultivated per Season"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex gap-2 px-4">
                {videos.map((_, index) => (
                    <div
                        key={index}
                        className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                    >
                        {index === currentVideo && (
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{
                                    duration: 8, // Adjust based on your video duration
                                    ease: 'linear'
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Head;