import './styles.scss'
import Link from 'next/link'
import { MousePointer } from 'lucide-react'
import { ProjectType } from '@/types/ProjectType'

export default function ProjectCardComponent({
    name,
    description,
    language,
    license,
    html_url
}: ProjectType) {
    return (
        <Link
            href={html_url}
            className="card-container"
            target='_blank'
        >
            <h3>
                {name}
            </h3>
            <span className="card-description-container">
                {description}
            </span>
            <div className='footer-card-container'>
                <div className="tag-license-container">
                    <span>{language}</span>
                    <span>{license}</span>
                </div>
                <div className='card-link-container'>
                    <MousePointer size={16} />
                    Clique para acessar o projeto
                </div>
            </div>
        </Link>
    )
}