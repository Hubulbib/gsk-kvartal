'use client'

import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/#projects', label: 'Проекты' },
  { href: '/#calculator', label: 'Калькулятор' },
  { href: '/#company', label: 'Компания' },
  { href: '/#contacts', label: 'Контакты' },
]

const FooterComponent = () => {
  return (
    <footer className={styles['footer']}>
      <Image src="/logo-big.svg" alt="КВАРТАЛ" height={80} width={300} className={styles['footer-logo']} />

      <div className={styles['footer-socials']}>
        <a
          className={styles['footer-social']}
          href="https://www.instagram.com/kvartal_gsk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Image src="/instagram.svg" alt="" width={20} height={20} />
        </a>
        <a
          className={styles['footer-social']}
          href="https://vk.com/gsk_kvartal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="VK"
        >
          <Image src="/vk.svg" alt="" width={20} height={20} />
        </a>
        <a
          className={styles['footer-social']}
          href="mailto:kvartalgsk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <Image src="/gmail.svg" alt="" width={20} height={20} />
        </a>
      </div>

      <nav className={styles['footer-nav']}>
        {links.map((l) => (
          <Link key={l.href} className={styles['footer-link']} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>

      <div className={styles['footer-divider']} />

      <div className={styles['footer-legal']}>
        <span>ООО ГСК «КВАРТАЛ»</span>
        <span>ИНН: 0500031600 · КПП: 050001001 · ОГРН: 1250500006316</span>
        <div className={styles['footer-documents']}>
          <Link href="/terms">Пользовательское соглашение</Link>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
        </div>
      </div>

      <p className={styles['footer-disclaimer']}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </p>
      <small role="contentinfo">© Concept. 2025 Все права защищены.</small>
    </footer>
  )
}

export default FooterComponent
