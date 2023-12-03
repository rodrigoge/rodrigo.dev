"use client"
import FooterComponent from '@/components/FooterComponent'
import './styles.scss'
import HeaderComponent from '@/components/HeaderComponent'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <div className='hero-section-container'>
        <span className='greeting-container'>Hey, olá a todos 👋</span>
        <div className='personal-name-container'>Eu sou Rodrigo Gouveia</div>
        <span className='office-container'>Fullstack Software Developer</span>
        <Link
          className='call-to-action-navigation'
          href='/about'>
          Conheça um pouco mais
        </Link>
      </div>
      <FooterComponent />
    </>
  )
}