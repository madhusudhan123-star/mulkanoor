import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleCursorOver = (e) => {
            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a')
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleCursorOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleCursorOver);
        };
    }, []);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    mass: 0.3,
                    stiffness: 100,
                    damping: 10,
                }}
            />

            {/* Trailer effect */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-yellow-400 rounded-full pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    mass: 0.7,
                    stiffness: 50,
                    damping: 10,
                }}
            />
        </>
    );
};

export default Cursor;
