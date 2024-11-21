import React, { forwardRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import './ContactSection.css';

const ContactSection = forwardRef((props, ref) => {
    return (
        <div className="contact-overlay" ref={ref}>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contato</h2>
                    <div className="contact-details">
                        <div className="contact-item">
                            <MapPin className="icon" />
                            <span>Campinas, São Paulo - Brasil</span>
                        </div>
                        <div className="contact-item">
                            <a
                                href="https://wa.me/5519974070580"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-link"
                            >
                                <FaWhatsapp
                                    size={30}
                                    className="icon whatsapp-icon"
                                />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="social-links">
                    <h2>Redes Sociais</h2>
                    <div className="social-icons">
                        <a
                            href="https://github.com/MarceloHaa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={45} className="social-icon" />
                        </a>
                        <a
                            href="https://linkedin.com/in/marcelohenalmeida/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={45} className="social-icon" />
                        </a>
                        <a
                            href="https://instagram.com/marceloalmeida.h/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram size={45} className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ContactSection;
