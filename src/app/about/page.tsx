"use client"
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import "./styles.scss"
import avatar from '../assets/avatar.png'
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";
import pdfFile from '../assets/curriculum.pdf'
import ExperienceComponent from "@/components/ExperienceComponent";

export default function About() {
    const handleCurriculumDownload = () => {
        const link = document.createElement('a')
        link.href = pdfFile
        link.target = '_blank'
        link.download = 'CV - Rodrigo Gouveia.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
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
                    <button
                        className="download-button"
                        onClick={handleCurriculumDownload}
                    >
                        <Download />
                        Download CV
                    </button>
                </div>
            </div>
            <div className="my-experience-container">
                <h2>Minhas experiências</h2>
                <ExperienceComponent
                    responsibility="Desenvolvedor Full-stack Pleno"
                    company="HST Card Technology"
                    companyLink="https://www.hst.com.br/"
                    location="Campinas-SP"
                    startAtCompany="Julho/2022"
                    endAtCompany="Atualmente"
                />
                <ExperienceComponent
                    responsibility="Analista de Sistemas Jr."
                    company="Tinnova Software Solutions"
                    companyLink="https://tinnova.com.br/"
                    location="São José dos Campos-SP"
                    startAtCompany="Janeiro/2022"
                    endAtCompany="Junho/2022"
                />
                <ExperienceComponent
                    responsibility="Desenvolvedor Back-end Jr."
                    company="B2ML Sistemas"
                    companyLink="https://b2ml.com.br/"
                    location="Itajubá-MG"
                    startAtCompany="Junho/2020"
                    endAtCompany="Janeiro/2022"
                />
            </div>
            <FooterComponent />
        </>
    )
}