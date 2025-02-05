import React, { useEffect, useRef } from 'react';
import { OrgChart } from 'd3-org-chart';
import { motion } from 'framer-motion';

const Organization = () => {
    const containerRef = useRef();

    const data = [
        {
            id: "1",
            parentId: "",
            name: "General Body",
            position: "Members of the society meets at least once in a year",
        },
        {
            id: "2",
            parentId: "1",
            name: "Managing committee",
            position: "Members of the society elect 15 managing committee members",
        },
        {
            id: "3",
            parentId: "2",
            name: "President",
        },
        {
            id: "4",
            parentId: "3",
            name: "Village Committees",
        },
        {
            id: "5",
            parentId: "3",
            name: "General Manager",
        },
        {
            id: "6",
            parentId: "4",
            name: "Members",
        },
        {
            id: "7",
            parentId: "5",
            name: "Employees",
        },
    ];

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
        }

        const chart = new OrgChart();

        // Basic configuration with only supported methods
        chart
            .container(containerRef.current)
            .data(data)
            .nodeWidth(() => 280)
            .nodeHeight(() => 160)
            .compactMarginBetween(() => 40)
            .buttonContent(({ node }) => {
                return `<div style="border-radius:50%;color:#716E7B;background-color:rgba(200, 173, 127, 0.2);width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px">
                    ${node.children ? node.children.length : 0}
                </div>`;
            })
            .nodeContent((d) => {
                return `
                    <div style="
                        padding: 16px;
                        border-radius: 12px;
                        background: linear-gradient(135deg, rgba(240, 235, 224, 0.15) 0%, rgba(200, 173, 127, 0.25) 100%);
                        backdrop-filter: blur(10px);
                        border: 2px solid rgba(200, 173, 127, 0.3);
                        width: ${d.width}px;
                        height: ${d.height}px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.3s ease;
                    "
                    onmouseover="this.style.transform='scale(1.02)'"
                    onmouseout="this.style.transform='scale(1)'"
                    >
                        <div style="
                            color: #4A3F35;
                            font-size: 18px;
                            font-weight: bold;
                            margin-bottom: 12px;
                            text-align: center;
                        ">
                            ${d.data.name}
                        </div>
                        ${d.data.position ? `
                            <div style="
                                color: #8B7355;
                                font-size: 14px;
                                text-align: center;
                                padding: 0 12px;
                            ">
                                ${d.data.position}
                            </div>
                        ` : ''}
                    </div>
                `;
            });

        // Simple render
        chart.render();

        // Basic resize handler
        const handleResize = () => {
            chart.render();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [data]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#F0EBE0] to-[#E8E3D9] pt-24">
            {/* Hero Section */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#4A3F35] relative">
                    <span className="inline-block bg-gradient-to-r from-[#8B7355] to-[#C8AD7F] bg-clip-text text-transparent">
                        Organizational Structure
                    </span>
                </h1>
                <p className="text-xl text-[#8B7355]">
                    The backbone of our cooperative success
                </p>
            </motion.div>

            {/* Chart Container with smoother transitions */}
            <motion.div
                className="container mx-auto px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    ref={containerRef}
                    className="w-full bg-gradient-to-br from-white/60 to-[#F0EBE0]/60 
                             backdrop-blur-sm rounded-xl p-8 min-h-[600px] shadow-xl
                             transition-all duration-700 ease-in-out"
                    style={{
                        border: '2px solid rgba(200, 173, 127, 0.3)',
                        boxShadow: '0 4px 24px rgba(200, 173, 127, 0.2)'
                    }}
                />
            </motion.div>

            {/* Description */}
            <div className="container mx-auto px-4 py-16">
                <div className="bg-gradient-to-br from-[#C8AD7F]/20 to-white/20 backdrop-blur-sm 
                              rounded-xl p-8 shadow-xl"
                    style={{ border: '2px solid rgba(200, 173, 127, 0.3)' }}>
                    <h2 className="text-2xl font-bold mb-4 text-[#4A3F35]">Our Structure</h2>
                    <p className="text-[#8B7355] leading-relaxed">
                        Our organizational structure ensures efficient operations and clear
                        communication channels that benefit our cooperative members.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Organization;