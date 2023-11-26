import './styles.scss'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../app/assets/logo.svg';

export default function HeaderComponent() {
    return (
        <header>
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
            </nav>
        </header>
    )
}