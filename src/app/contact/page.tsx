"use client"
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import "./styles.scss"
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <>
            <HeaderComponent />
            <div className="contact-container">
                <h3>Vamos nos conectar</h3>
                <div className="contact-summary-container">
                    Alguns links de onde me encontrar, juntamente com as minhas redes sociais. Vamos bater um papo, sinta-se à vontade.
                </div>
                <div className="link-container">
                    <Link
                        href='mailto:rgestevao@gmail.com'
                        target='_blank'
                        className='social-media-link'
                    >
                        <Mail size={18} />
                        <span>rgestevao@gmail.com</span>
                    </Link>
                    <Link
                        href='https://www.instagram.com/rodrigoge_/'
                        target='_blank'
                        className='social-media-link'
                    >
                        <Instagram size={18} />
                        <span>@rodrigoge_</span>
                    </Link>
                    <Link
                        href='https://github.com/rodrigoge'
                        target='_blank'
                        className='social-media-link'
                    >
                        <Github size={18} />
                        <span>/rodrigoge</span>
                    </Link>
                    <Link
                        href='www.linkedin.com/in/rgestevao'
                        target='_blank'
                        className='social-media-link'
                    >
                        <Linkedin size={18} />
                        <span>/rgestevao</span>
                    </Link>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}