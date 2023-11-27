import './styles.scss'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../app/assets/logo.svg';
import { useState } from 'react';

export default function HeaderComponent() {
    const [isMenuActive, setIsMenuActive] = useState(Boolean)

    async function handleMenuActive() {
        if (isMenuActive) setIsMenuActive(false)
        else setIsMenuActive(true)
    }

    return (
        <header className={`${isMenuActive ? 'show-menu' : 'hidden-menu'}`}>
            <Image
                src={logo}
                alt='Logo image'
            />

            <nav>
                <ul>
                    <li>
                        <Link href=''>Sobre mim</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href=''>
                            Projetos
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href=''>
                            Contato
                        </Link>
                    </li>
                </ul>
                <div className='menu-bars'>
                    <div onClick={handleMenuActive}>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className='three'></div>
                    </div>
                </div>
            </nav>

        </header>
    )
}