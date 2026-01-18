import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#1a1a2e]/90 backdrop-blur-md z-50 px-10 py-5 flex justify-between items-center shadow-xl border-b border-gray-800">
      <div className="text-2xl font-extrabold text-[#fca61f] tracking-tighter">
        NOORI<span className="text-white font-light">.DEV</span>
      </div>
      
      <ul className="hidden md:flex gap-10 font-semibold text-sm uppercase tracking-widest">
        <li><a href="#home" className="hover:text-[#fca61f] transition">Home</a></li>
        <li><a href="#skills" className="hover:text-[#fca61f] transition">Skills</a></li>
        <li><a href="#portfolio" className="hover:text-[#fca61f] transition">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-[#fca61f] transition">Contact</a></li>
      </ul>

      <div className="flex gap-4">
        <a 
          href="/Kiramatullah_Noori_Europass_CV.pdf" 
          download 
          className="bg-transparent border-2 border-[#fca61f] text-[#fca61f] px-6 py-2 rounded-full font-bold hover:bg-[#fca61f] hover:text-white transition text-sm"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;