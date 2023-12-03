import { ExperienceType } from '@/interfaces/ExperienceType'
import './styles.scss'
import Link from 'next/link'
import { Dot } from 'lucide-react'

export default function ExperienceComponent({
    responsibility,
    company,
    companyLink,
    location,
    startAtCompany,
    endAtCompany
}: ExperienceType) {
    return (
        <div className='experience-container'>
            <h3>{responsibility}</h3>
            <div className="company-container">
                <Link
                    href={`${companyLink}`}
                    target='_blank'
                    className='company-link'
                >
                    {company}
                </Link>
                <span className='company-icon'>•</span>
                <span className="location">
                    {location}
                </span>
            </div>
            <div className="period-container">
                <span>
                    {startAtCompany}
                </span>
                -
                <span>
                    {endAtCompany}
                </span>
            </div>
        </div>
    )
}