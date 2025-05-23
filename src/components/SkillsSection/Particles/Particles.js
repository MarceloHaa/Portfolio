import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './Particles.css';

const ParticlesComponent = ({ id }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false,
                zIndex: -1,
            },
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: 'repulse' },
                    onHover: { enable: true, mode: 'grab' },
                },
                modes: {
                    push: { distance: 250, duration: 15 },
                    grab: { distance: 200 },
                },
            },
            particles: {
                color: { value: '#00ff00' },
                links: {
                    color: '#00ff00',
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: { default: 'bounce' },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: { density: { enable: true }, value: 200 },
                opacity: { value: 1.0 },
                shape: { type: 'circle' },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        }),
        []
    );

    if (!init) return null;

    return (
        <div className="particles-section">
            <Particles id={id} options={options} />
        </div>
    );
};

export default ParticlesComponent;
