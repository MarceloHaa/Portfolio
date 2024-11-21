import React from 'react';
import './AboutSection.css';
import backgroundImage from '../../img/opcao7.jpg';

export const AboutSection = () => {
    return (
        <section
            className="about-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="about-overlay">
                <div className="about-section">
                    <h2 className="about-title">Sobre mim</h2>
                    <p className="about-text">
                        Sou um profissional em transição de carreira com 15 anos
                        de experiência como gerente comercial, onde desenvolvi
                        habilidades de relacionamento, liderança e gestão de
                        equipes. Tenho facilidade em adquirir novos
                        conhecimentos, sou proativo, organizado, pontual,
                        trabalho bem em grupo. Aos 36 anos, decidi mudar minha
                        trajetória e iniciei minha jornada na área de
                        desenvolvimento front-end. Atualmente, estou aprimorando
                        minhas habilidades em C#, React, TypeScript, HTML, CSS e
                        JavaScript, com o objetivo de construir soluções
                        dinâmicas e intuitivas que criem valor para os usuários
                        e para as empresas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
