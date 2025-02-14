import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorDot = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const trailX = useMotionValue(-100);
    const trailY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const trailConfig = { damping: 15, stiffness: 150 }; // Slower spring for trailing dot

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const trailXSpring = useSpring(trailX, trailConfig);
    const trailYSpring = useSpring(trailY, trailConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            // Trail follows with a delay
            setTimeout(() => {
                trailX.set(e.clientX - 8);
                trailY.set(e.clientY - 8);
            }, 50);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY, trailX, trailY]);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <div className="w-8 h-8 rounded-full bg-white/80 border-2 border-white" />
            </motion.div>

            {/* Trailing dot */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                style={{
                    x: trailXSpring,
                    y: trailYSpring,
                }}
            >
                <div className="w-4 h-4 rounded-full bg-black/80" />
            </motion.div>
        </>
    );
};

export default CursorDot;
