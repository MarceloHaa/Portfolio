import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSection from './components/AboutSection/AboutSection';
import ParticlesComponent from './components/SkillsSection/Particles/Particles';
import ContactSection from './components/ContactSection/ContactSection';

const App = () => {
    const contactSectionRef = useRef(null);

    useEffect(() => {
        AOS.init();
    }, []);

    const scrollToContact = () => {
        if (contactSectionRef.current) {
            contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Referência para ContactSection não encontrada.');
        }
    };

    return (
        <div>
            <Navbar scrollToContact={scrollToContact} />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <div
                style={{ position: 'relative', width: '100%', height: '100vh' }}
            >
                <ParticlesComponent id="particles" />

                <ContactSection ref={contactSectionRef} />
            </div>
        </div>
    );
};

export default App;
