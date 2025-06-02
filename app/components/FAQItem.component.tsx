'use client'
import React, { useState, useRef, useEffect } from "react";

const FAQItem = ({ question, answer }: { question: string, answer: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="border-b border-[#ffffff20] py-4 min-w-[300px] transition-all duration-300 ease-in-out">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
            >
                <h3 className="text-lg md:text-xl font-semibold text-white">{question}</h3>
                <span className="text-[#528bf2] text-2xl transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                </span>
            </button>

            <div
                ref={contentRef}
                style={{
                    height: `${height}px`,
                    overflow: 'hidden',
                    transition: 'height 300ms ease-in-out'
                }}
            >
                <div className="mt-3 text-gray-300">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQItem;