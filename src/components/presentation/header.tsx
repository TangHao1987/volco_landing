import React, { useState, useEffect } from "react";
import {
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

// Define the navigation links data
const NAV_LINKS = [
  { label: "Why Volco?", href: "#forgetting-curve" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Progress", href: "#stats" },
];

export function HeaderPresentation() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  // Function to handle smooth scrolling for navigation links
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, callback?: () => void) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = href.substring(1); // Remove # from href
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (callback) {
      callback(); // Call the callback if provided (e.g., toggleOpen for mobile menu)
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <ThemeProvider>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent ${isScrolling ? 'bg-white/80 backdrop-blur-md shadow-lg border-slate-200' : 'bg-transparent shadow-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Typography
                as="a"
                href="#hero"
                variant="h4"
                className="font-bold text-indigo-600 cursor-pointer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleNavClick(e, "#hero")}
              >
                Volco
              </Typography>
            </div>
            <div className="hidden lg:flex lg:items-center lg:ml-6">
              {NAV_LINKS.map((link) => (
                <Typography
                  key={link.label}
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-medium text-slate-700 hover:text-indigo-600 transition-colors px-3 py-2 rounded-md"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Typography>
              ))}
              <Button 
                variant="filled" 
                size="sm"
                className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => {
                  const finalCtaSection = document.getElementById('final-cta');
                  if (finalCtaSection) {
                    finalCtaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Download
              </Button>
            </div>
            <div className="lg:hidden">
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={toggleOpen}
              >
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-white shadow-md rounded-b-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.label}
                as="a"
                href={link.href}
                variant="small"
                className="block font-medium text-slate-700 hover:text-indigo-600 transition-colors px-3 py-2 rounded-md hover:bg-slate-100"
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleNavClick(e, link.href, toggleOpen)}
              >
                {link.label}
              </Typography>
            ))}
            <Button 
              fullWidth
              variant="filled"
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white mt-2"
               onClick={() => {
                  const finalCtaSection = document.getElementById('final-cta');
                  if (finalCtaSection) {
                    finalCtaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  toggleOpen(); 
                }}
            >
              Download
            </Button>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default HeaderPresentation;
