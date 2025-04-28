'use client'

import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

const NavLinks = ({ onClick }: { pathname: string; onClick: () => void }) => {
  return (
    <>
      <li>
        <Link className={styles['nav-link']} href="#projects" onClick={onClick}>
          Проекты
        </Link>
      </li>
      <li>
        <Link className={styles['nav-link']} href="#company" onClick={onClick}>
          Компания
        </Link>
      </li>
      <li>
        <Link className={styles['nav-link']} href="#contacts" onClick={onClick}>
          Контакты
        </Link>
      </li>
    </>
  )
}

const NavBarComponent = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
    document.body.classList.toggle('lock')
  }

  return (
    <nav className={styles['nav']}>
      <Link href="/" className={styles['nav-logo']}>
        <Image src="/logo-mini.svg" alt="Квартал" width={70} height={60} priority />
      </Link>

      <button className={styles['nav-burger-button']} onClick={toggleMenu}>
        {isOpen ? <X color="#e7e9c3" size={30} /> : <Menu color="#e7e9c3" size={30} />}
      </button>

      {/* Мобильное меню */}
      <ul className={`${styles['nav-menu']} ${isOpen ? styles['active'] : ''}`}>
        <NavLinks onClick={toggleMenu} pathname={pathname} />
      </ul>

      {/* Десктопное меню */}
      <ul className={styles['nav-items']}>
        <NavLinks onClick={toggleMenu} pathname={pathname} />
      </ul>
    </nav>
  )
}

export default NavBarComponent
