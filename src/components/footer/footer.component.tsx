'use client'

import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const FooterComponent = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-up']}>
        <Image className={styles['footer-up_img']} src="/logo-big.svg" alt="КВАРТАЛ" height={130} width={680} />
        <div className={styles['footer-socials']}>
          <a href="https://www.instagram.com/kvartal_gsk/" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://vk.com/gsk_kvartal" target="_blank" rel="noopener noreferrer"></a>
          <a href="mailto:kvartalgsk@gmail.com" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <nav className="footer-nav">
          <Link className={styles['footer-link']} href="#projects">
            Проекты
          </Link>
          <Link className={styles['footer-link']} href="#company">
            Компания
          </Link>
          <Link className={styles['footer-link']} href="#contacts">
            Контакты
          </Link>
        </nav>
      </div>
      <div className={styles['footer-down']}>
        <Link target="_blank" href="https://vk.com/concept_tag">
          <Image src="/concept.svg" alt="Квартал" width={220} height={90} priority />
        </Link>
        <small role="contentinfo">© Concept. 2025 Все права защищены.</small>
      </div>
    </footer>
  )
}

export default FooterComponent
