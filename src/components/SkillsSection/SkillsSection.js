import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './SkillsSection.css';
import {
    Code as HtmlIcon,
    FileJson as JavaScriptIcon,
    FileType as TypeScriptIcon,
    Atom as ReactIcon,
    Palette as CssIcon,
    PaintBucket as StyledIcon,
    Wind as TailwindIcon,
    Layout as BootstrapIcon,
} from 'lucide-react';

const SkillCard = ({ skill, index }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '0px 0px -200px 0px', // Ajusta quando a animação começa
    });

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'tween',
                    duration: 0.7,
                    ease: 'easeOut',
                    delay: index * 0.15,
                },
            });
        }
    }, [isInView, controls, index]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="skill-card"
        >
            <div className="animated-border"></div>
            <div className="skill-content">
                <motion.div
                    className="skill-icon-wrapper"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    <skill.Icon
                        size={32}
                        className="skill-icon"
                        style={{ color: skill.color }}
                    />
                </motion.div>
                <h3 className="skill-name">{skill.name}</h3>
            </div>
            <div className="skill-card-overlay" />
        </motion.div>
    );
};

const SkillsSection = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '0px 0px -100px 0px',
    });

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'tween',
                    duration: 0.5,
                    ease: 'easeOut',
                },
            });
        }
    }, [isInView, controls]);

    const skills = [
        { name: 'HTML', Icon: HtmlIcon, color: '#E34F26' },
        { name: 'JavaScript', Icon: JavaScriptIcon, color: '#F7DF1E' },
        { name: 'TypeScript', Icon: TypeScriptIcon, color: '#3178C6' },
        { name: 'React', Icon: ReactIcon, color: '#61DAFB' },
        { name: 'CSS', Icon: CssIcon, color: '#264DE4' },
        { name: 'Styled Components', Icon: StyledIcon, color: '#DB7093' },
        { name: 'Tailwind', Icon: TailwindIcon, color: '#38B2AC' },
        { name: 'Bootstrap', Icon: BootstrapIcon, color: '#7952B3' },
    ];

    return (
        <section className="skills-section">
            <div className="skills-container">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -20 }}
                    animate={controls}
                    className="skills-title"
                >
                    Habilidades
                </motion.h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
