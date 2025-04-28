'use client'

import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const FooterComponent = () => {
  const pathname = usePathname()

  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-up']}>
        <Image className={styles['footer-up_img']} src="/logo-big.svg" alt="КВАРТАЛ" height={130} width={680} />
        <nav className="footer-nav">
          <Link
            className={
              pathname === '/projects' ? `${styles['footer-link']} ${styles['active']}` : styles['footer-link']
            }
            href="#projects"
          >
            Проекты
          </Link>
          <Link
            className={pathname === '/company' ? `${styles['footer-link']} ${styles['active']}` : styles['footer-link']}
            href="#company"
          >
            Компания
          </Link>
          <Link
            className={pathname === '/support' ? `${styles['footer-link']} ${styles['active']}` : styles['footer-link']}
            href="#support"
          >
            Поддержка
          </Link>
        </nav>
      </div>
      <div className={styles['footer-down']}>
        <Link href="/">
          <Image src="/concept.svg" alt="Квартал" width={220} height={90} priority />
        </Link>
        <small role="contentinfo">© Concept. 2025 Все права защищены.</small>
      </div>
    </footer>
  )
}

export default FooterComponent
