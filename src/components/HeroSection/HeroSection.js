import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import profilePic from '../../img/profile-pic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Desenvolvedor Front-end.';
    const typingDelay = 1000;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        });

        let currentIndex = -1;

        const startTyping = setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (currentIndex < fullText.length - 1) {
                    currentIndex++;
                    setTypedText(fullText.slice(0, currentIndex + 1));
                } else {
                    clearInterval(typeInterval);
                }
            }, 150);
        }, typingDelay);

        return () => clearTimeout(startTyping);
    }, []);

    const handleDownloadCV = () => {
        const pdfPath = '/Marcelo-Almeida_CV.pdf';

        const link = document.createElement('a');
        link.href = pdfPath;

        link.download = 'Marcelo-Almeida_CV.pdf';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

    return (
        <div className="hero-section">
            <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
            >
                <p className="hero-subtitle">Bem vindo, eu sou</p>
                <h1 className="hero-title">Marcelo Almeida</h1>
                <p className="hero-subtitle2">{typedText}</p>

                <button className="download-cv-btn" onClick={handleDownloadCV}>
                    Baixar CV
                </button>
            </div>
            <div
                className="hero-img"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
            >
                <img src={profilePic} alt="Profile" className="hero-image" />
            </div>
        </div>
    );
};

export default HeroSection;
