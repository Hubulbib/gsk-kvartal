'use client'

import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

const links = [
  { href: '/#projects', label: 'Проекты' },
  { href: '/#calculator', label: 'Калькулятор' },
  { href: '/#company', label: 'Компания' },
  { href: '/#contacts', label: 'Контакты' },
]

const lockScroll = () => {
  document.body.style.top = `-${window.scrollY}px`
  document.body.classList.add('lock')
}

const unlockScroll = () => {
  const scrollY = document.body.style.top
  document.body.classList.remove('lock')
  document.body.style.top = ''
  window.scrollTo(0, -parseInt(scrollY || '0'))
}

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    const next = !isOpen
    if (next) lockScroll()
    else unlockScroll()
    setIsOpen(next)
  }

  const closeMenu = () => {
    setIsOpen(false)
    unlockScroll()
  }

  return (
    <>
      <div className={styles['nav-spacer']} />
      <nav className={styles['nav']}>
        <Link href="/" className={styles['nav-logo']}>
          <Image src="/logo-big.svg" alt="Квартал" width={140} height={30} style={{ height: 30, width: 'auto' }} priority />
        </Link>

        <ul className={styles['nav-items']}>
          {links.map((l) => (
            <li key={l.href}>
              <Link className={styles['nav-link']} href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a className={styles['nav-cta']} href="https://wa.me/79884431048" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>

        <button className={styles['nav-burger-button']} onClick={toggleMenu} aria-label="Меню">
          {isOpen ? <X color="#e7e9c3" size={26} /> : <Menu color="#e7e9c3" size={26} />}
        </button>
      </nav>

      {isOpen && (
        <div className={styles['nav-menu']}>
          <button className={styles['nav-menu_close']} onClick={closeMenu} aria-label="Закрыть">
            <X color="#f6f2e4" size={30} />
          </button>
          <span className={styles['nav-menu_label']}>Меню</span>
          {links.map((l) => (
            <Link key={l.href} className={styles['nav-menu_link']} href={l.href} onClick={closeMenu}>
              {l.label}
            </Link>
          ))}
          <a
            className={styles['nav-menu_cta']}
            href="https://wa.me/79884431048"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в WhatsApp →
          </a>
        </div>
      )}
    </>
  )
}

export default NavBarComponent
