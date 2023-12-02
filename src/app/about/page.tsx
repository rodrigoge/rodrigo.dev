"use client"
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import "./styles.scss"
import avatar from '../assets/avatar.png'
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <>
            <HeaderComponent />
            <div className="about-me-container">
                <div className="avatar-container">
                    <Image
                        src={avatar}
                        alt="Image from Rodrigo Gouveia"
                        width={360}
                        height={400}
                    />
                </div>
                <div className="summary-container">
                    <h2>Um pouco sobre mim</h2>
                    <p>Olá, meu nome é Rodrigo Gouveia e sou Fullstack Software Developer.</p>
                    <p>
                        Há + de 3 anos atuando na área de desenvolvimento, possuo uma grande experiência nas seguintes
                        tecnologias: Java, Spring, Node.js, API Restful, React.js, SASS, Javascript, Typescript, entre outras.
                    </p>
                    <p>
                        Além disso, possuo conhecimento em algumas metodologias como Clean Code, Clean Architecture, TDD e
                        outras abordagens que são extremamente importantes para o desenvolvimento.
                    </p>
                    <p>
                        Também sou apaixonado por construir
                        <Link
                            className="link-content"
                            href=""
                        >
                            projetos
                        </Link>
                        pessoais afins de estudo, com foco em aprender novas tecnologias ou melhorar as que já conheço.
                    </p>
                    <button className="download-button">
                        <Download />
                        Download CSV
                    </button>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}