import Link from 'next/link'
import './styles.scss'
import { Copyright, Linkedin, Mail, Instagram, Github } from 'lucide-react'

export default function FooterComponent() {
    return (
        <footer>
            <div className="copyright-container">
                <Copyright size={14} />
                Rodrigo Gouveia Estevão
            </div>
            <div className="social-media-container">
                <Link
                    href='mailto:rgestevao@gmail.com'
                    target='_blank'
                >
                    <Mail size={18} />
                </Link>
                <Link
                    href='https://www.instagram.com/rodrigoge_/'
                    target='_blank'
                >
                    <Instagram size={18} />
                </Link>
                <Link
                    href='https://github.com/rodrigoge'
                    target='_blank'
                >
                    <Github size={18} />
                </Link>
                <Link
                    href='https://www.linkedin.com/in/rodrigogouveiae/'
                    target='_blank'
                >
                    <Linkedin size={18} />
                </Link>
                2023
            </div>
        </footer>
    )
}