"use client"
import HeaderComponent from '@/components/HeaderComponent'
import './styles.scss'
import FooterComponent from '@/components/FooterComponent'
import { useState, useEffect } from 'react';
import ProjectCardComponent from '@/components/ProjectCardComponent';
import { ProjectProps } from '@/interfaces/ProjectProps';
import { ShieldAlert } from 'lucide-react';

export default function Projects() {
    const [projects, setProjects] = useState<ProjectProps[]>([])

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/rodrigoge/repos')
                const data = await response.json()
                setProjects(data)
            } catch (error) {
                console.error('Error on get data in GitHub API', error)
            }
        };
        fetchGitHubData();
    }, [])
    return (
        <>
            <HeaderComponent />
            <div className="projects-container">
                <h2>
                    Meus projetos
                </h2>
                <div className="projects-summary">
                    Aqui estão todos os projetos pessoais, vindos diretamente do meu perfil no GitHub.
                    Fique à vontade para navegar e acessar os projetos.
                </div>

                {projects.length === 0 ?
                    <>
                        <div className='cards-group-error-container'>
                            <ShieldAlert size={64} />
                            Desculpe, houve algum erro ao ser realizada a busca de projetos.
                        </div>
                    </>
                    :
                    <div className="project-cards-container">
                        {projects.map((project, key) => (
                            <div key={key} className="cards-group-container">
                                <ProjectCardComponent
                                    name={`${project.name}`}
                                    description={`${project.description ? project.description : ""}`}
                                    language={`${project.language ? project.language : ""}`}
                                    license={`${project.license?.name ? project.license?.name : ""}`}
                                    html_url={`${project.html_url}`}
                                />
                            </div>
                        ))}
                    </div>
                }
            </div>
            <FooterComponent />
        </>
    )
}