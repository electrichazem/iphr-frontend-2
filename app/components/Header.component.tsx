'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1350);
    };

    // Set initial state
    handleResize();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Partners", href: "/partners" },
    { name: "Results", href: "/results" },
    { name: "Syllabus", href: "/syllabus" },
    { name: "Archive", href: "/archive" },
    { name: "Ambassadors", href: "/ambassadors" },
    { name: "Awards", href: "/awards" },
    { 
      name: "Register", 
      href: "/register", 
      isHighlighted: true,
      className: "bg-[#4380eb] text-white hover:bg-[#3a70d1] hover:text-white px-4 py-2 rounded-md transition-colors duration-200"
    }
  ];

  return (
    <header className={`sticky top-0 w-full bg-gradient-to-r from-[#030d2af4] to-[#0a1a4df4] py-4 z-50 shadow-lg transition-all duration-300 ${isScrolled ? 'opacity-95' : 'opacity-100'} select-none`}>
      <div className="max-w-[1300px] mx-auto flex items-center justify-between w-full px-4 sm:px-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="hover:scale-105 transition-transform duration-200 w-[220px]"
              src="/image.png"
              alt="logo"
              width={180}
              height={38}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - shown only when not in mobile view */}
        {!isMobileView && (
          <nav>
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`font-bold transition-colors duration-200 text-lg px-3 py-2 rounded-md hover:bg-white/10 ${
                      item.isHighlighted 
                        ? item.className 
                        : 'text-white hover:text-[#528bf2]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Mobile Menu Button - shown only in mobile view */}
        {isMobileView && (
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#528bf2]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileView && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <nav className="px-4 pb-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full font-bold transition-colors duration-200 text-lg px-4 py-3 rounded-md ${
                        item.isHighlighted
                          ? 'bg-[#4380eb] text-white hover:bg-[#3a70d1]'
                          : 'text-white hover:text-[#528bf2] hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}