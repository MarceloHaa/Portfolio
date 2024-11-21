import React, { useEffect } from 'react';
import AOS from 'aos';
import Card from '../ui/Card';
import './ProjectsSection.css';
import Aporte from '../../img/Aporte.png';
import Gerenciador from '../../img/Gerenciador.png';

const ProjectsSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        });
    }, []);

    const projects = [
        {
            name: 'Aporte Inteligente',
            link: 'https://aporteinteligente.com/',
            description:
                'Plataforma de investimentos inteligente que ajuda investidores a tomar decisões estratégicas baseadas em análise de dados.',
            coverImage: Aporte,
        },
        {
            name: 'Gerenciador de Despesas',
            link: 'https://expensemha.netlify.app/',
            description:
                'Aplicação web para controle financeiro pessoal, permitindo rastreamento de gastos, categorização e geração de relatórios.',
            coverImage: Gerenciador,
        },
    ];

    return (
        <div className="projects-section">
            <h2 className="section-title">Meus Projetos</h2>
            <div className="project-cards">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Card>
                            <div className="project-card-content">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-image-link"
                                >
                                    <img
                                        src={project.coverImage}
                                        alt={`Capa do projeto ${project.name}`}
                                        className="project-cover-image"
                                    />
                                </a>
                                <div className="project-card-header">
                                    <h3>{project.name}</h3>
                                </div>
                                <p className="project-description">
                                    {project.description}
                                </p>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
