import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
// د ټولنیزو رسنیو نښانونه (Icons)
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaGlobe } from 'react-icons/fa';

function App() {
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    // له بېک-اینډ څخه د پروژو او ټولنیزو لینکونو راوړل
    const fetchData = async () => {
      try {
        const projectRes = await axios.get('https://portfolio-backend-c83n.onrender.com/api/projects/');
        setProjects(projectRes.data);
        
        const socialRes = await axios.get('https://portfolio-backend-c83n.onrender.com/api/socials/');
        setSocials(socialRes.data);
      } catch (error) {
        console.error("Connection error with Django!", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#211e39] text-white font-sans scroll-smooth">
      <Navbar />
      
      {/* 1. Hero Section */}
      <main id="home" className="flex flex-col md:flex-row items-center justify-between px-10 pt-32 pb-20 max-w-6xl mx-auto">
        <div className="text-left">
          <h4 className="text-[#fca61f] text-xl font-medium mb-2">Hello, I'm</h4>
          <h1 className="text-6xl font-bold mb-4">Kiramatullah <span className="text-[#fca61f]">Noori</span></h1>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            "I am a Full-Stack Software Engineer with a passion for building scalable systems that solve real-world challenges. My expertise lies in Python, Django, and React, with a proven track record of developing complex platforms like E-Healthcare systems. Currently, I am bridging the gap between Computer Science and Sustainable Development by researching AI-driven solutions for Agriculture. My goal is to leverage Computer Vision (CNNs) to empower the farming sector with automated diagnostic tools."
          </p>
          <a href="#contact" className="bg-[#fca61f] hover:bg-[#e8951b] text-white px-10 py-3 rounded-full font-bold shadow-lg transition inline-block">
            Get In Touch
          </a>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-[#fca61f] rounded-full overflow-hidden border-8 border-gray-700 shadow-2xl">
             <img src="/images/Noori.png" alt="Noori Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>

      {/* 2. Skills Section */}
      <section id="skills" className="py-24 px-10 max-w-6xl mx-auto bg-[#2a2746] rounded-3xl my-10">
        <h2 className="text-4xl font-bold text-center mb-16 underline decoration-[#fca61f] underline-offset-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { name: 'HTML & CSS', value: '90' },
            { name: 'Tailwind', value: '75' },
            { name: 'JavaScript', value: '80' },
            { name: 'Python/Django', value: '65' }
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2 font-bold">
                <span>{skill.name}</span>
                <span className="text-[#fca61f]">{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-[#fca61f] h-3 rounded-full transition-all duration-1000" style={{ width: `${skill.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Portfolio Section */}
      <section id="portfolio" className="py-24 px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 underline decoration-[#fca61f] underline-offset-8">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#2a2746] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 border border-gray-700">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-[#fca61f] text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-white font-semibold hover:text-[#fca61f]">Live Demo →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact" className="py-24 px-10 max-w-4xl mx-auto text-center">
         <h2 className="text-4xl font-bold mb-12 text-[#fca61f]">Contact Me</h2>
         <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#2a2746] p-10 rounded-3xl shadow-2xl">
            <input type="text" placeholder="Your Name" className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-700 outline-none focus:border-[#fca61f]" />
            <input type="email" placeholder="Your Email" className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-700 outline-none focus:border-[#fca61f]" />
            <textarea placeholder="Your Message..." rows="5" className="p-4 bg-[#1a1a2e] rounded-xl border border-gray-700 outline-none focus:border-[#fca61f] md:col-span-2"></textarea>
            <button className="bg-[#fca61f] hover:bg-[#e8951b] text-white py-4 rounded-xl font-bold md:col-span-2 transition">Send Message</button>
         </form>
      </section>

      {/* ډاینامیک فوټر له سوشل میډیا نښانونو سره */}
      <footer className="py-12 text-center bg-[#1a1a2e] border-t border-gray-800">
        <div className="flex justify-center gap-8 mb-6 text-3xl">
          {socials.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#fca61f] transition-all hover:scale-110">
              {link.platform === 'GitHub' && <FaGithub />}
              {link.platform === 'LinkedIn' && <FaLinkedin />}
              {link.platform === 'Facebook' && <FaFacebook />}
              {link.platform === 'Twitter' && <FaTwitter />}
              {!['GitHub', 'LinkedIn', 'Facebook', 'Twitter'].includes(link.platform) && <FaGlobe />}
            </a>
          ))}
        </div>
        <p className="text-gray-500 italic">"Building the future with code."</p>
        <p className="mt-2 text-sm text-gray-600">© 2026 Kiramatullah Noori | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;