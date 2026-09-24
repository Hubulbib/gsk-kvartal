'use client'

import ProjectCardComponent from 'kvartal/components/project-card/project-card.component'
import styles from './page.module.css'
import Image from 'next/image'
import ProjectOfferComponent from 'kvartal/components/project-offer/project-offer.component'
import { ProjectData } from './project.data'
import Link from 'next/link'
import CalculatorComponent from 'kvartal/components/calculator/calculator.component'
import { useEffect, useState } from 'react'

const projectKeys = Object.keys(ProjectData)

const Home = () => {
  const [heroSlide, setHeroSlide] = useState<'brand' | 'press'>('brand')
  const [offerProject, setOfferProject] = useState(ProjectData[projectKeys[0]])

  useEffect(() => {
    // Slide 2 (video) stays up longer than slide 1 before auto-advancing back.
    const duration = heroSlide === 'brand' ? 8000 : 13000
    const timer = setTimeout(() => {
      setHeroSlide((s) => (s === 'brand' ? 'press' : 'brand'))
    }, duration)
    return () => clearTimeout(timer)
  }, [heroSlide])

  // Random pick happens after mount only, so server and client render the same project on first paint.
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * projectKeys.length)
    setOfferProject(ProjectData[projectKeys[randomIndex]])
  }, [])

  return (
    <div className={styles['main']}>
      <section className={styles['hero-section']}>
        <div className={styles['hero-card']}>
          <div className={styles['hero-ornament']} />
          <div className={styles['hero-vignette']} />
          {heroSlide === 'press' && (
            <div className={styles['hero-video-wrap']}>
              {/* Видео: положите файл в public/about-video.mp4 */}
              <video
                src="/about-video.mp4"
                poster="/ornament.png"
                autoPlay
                muted
                loop
                playsInline
                className={styles['hero-video']}
              />
              <div className={styles['hero-video-overlay']} />
            </div>
          )}
          {heroSlide === 'brand' ? (
            <div key="brand" className={styles['hero-brand']}>
              <Image src="/logo-big.svg" alt="КВАРТАЛ" width={280} height={70} />
              <h1>
                Квартиры с видом
                <br />
                на культуру Дагестана
              </h1>
            </div>
          ) : (
            <div key="press" className={styles['hero-press']}>
              <div className={styles['hero-press_badge']}>
                <span>О нас пишут</span>
                <span className={styles['hero-press_badge-ria']}>
                  <b>РИА</b> Дагестан
                </span>
              </div>
              <h2>«Квартал» меняет правила игры</h2>
              <p>Как дагестанская строительная компания «Квартал» меняет правила игры — интервью РИА «Дагестан»</p>
              <div className={styles['hero-press_actions']}>
                <a
                  href="https://riadagestan.ru/news/interview/kak_dagestanskaya_stroitelnaya_kompaniya_kvartal_menyaet_pravila_igry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['hero-press_cta']}
                >
                  Читать интервью →
                </a>
                <a href="#projects" className={styles['hero-press_secondary']}>
                  Смотреть проекты
                </a>
              </div>
            </div>
          )}
          <div className={styles['hero-dots']}>
            <button
              className={heroSlide === 'brand' ? styles['dot-active'] : ''}
              onClick={() => setHeroSlide('brand')}
            >
              <span className={styles['hero-dot-bar']} />
              <span className={styles['hero-dot-label']}>01 · КВАРТАЛ</span>
            </button>
            <button
              className={heroSlide === 'press' ? styles['dot-active'] : ''}
              onClick={() => setHeroSlide('press')}
            >
              <span className={styles['hero-dot-bar']} />
              <span className={styles['hero-dot-label']}>02 · О НАС ПИШУТ</span>
            </button>
          </div>
        </div>
        <div className={styles['hero-badge']}>
          <span>Рассрочка</span>
          <strong>0%</strong>
        </div>
      </section>

      <section id="projects" className={styles['projects-section']}>
        <div className={styles['section-heading']}>
          <h1 className={styles.heading}>Проекты</h1>
          <span>{Object.keys(ProjectData).length} жилых комплекса в Дагестане, выбирайте свой</span>
        </div>
        <div className={styles['projects-grid']}>
          {Object.values(ProjectData).map((project) => (
            <Link href={project.link} key={project.link} className={styles['projects-grid_item']}>
              <ProjectCardComponent
                cover={project.cover}
                title={project.name}
                text1={project.text1}
                text2={project.text2}
                paySum={project.paySum}
              />
            </Link>
          ))}
        </div>
      </section>

      <section id="calculator" className={styles['calculator-section']}>
        <h1 className={styles.heading}>Калькулятор</h1>
        <p className={styles.disclaimer}>
          Расчёт является предварительным и носит информационный характер. Не является публичной офертой и не
          гарантирует заключение договора.
        </p>
        <CalculatorComponent />
      </section>

      <section id="company" className={styles['company-section']}>
        <div className={styles['company-section_content']}>
          <div className={styles['company-plaque']}>
            <div className={styles['company-plaque_ornament']} />
            <div className={styles['company-plaque_shade']} />
            <div className={styles['company-plaque_frame']} />
            <span className={styles['company-plaque_kicker']}>Республика Дагестан</span>
            <div className={styles['company-plaque_logo']}>
              <Image src="/logo-big.svg" alt="КВАРТАЛ" width={280} height={70} />
              <span>группа строительных компаний</span>
            </div>
            <div className={styles['company-plaque_stats']}>
              <div>
                <strong>10+</strong>
                <span>лет на рынке</span>
              </div>
              <div className={styles['company-plaque_stats-right']}>
                <strong>3</strong>
                <span>дома сданы и заселены</span>
              </div>
            </div>
          </div>
          <div className={styles['company-card']}>
            <h3>ГСК «КВАРТАЛ»</h3>
            <p>
              Группа компаний «Квартал» — это надёжный застройщик, который уже более 10 лет успешно реализует жилые
              проекты в Республике Дагестан.
              <br />
              <br />
              За это время компания заслужила доверие сотен семей, которые уже живут в комфортных и качественных домах,
              построенных нашей командой. Мы не просто строим здания — мы создаём уютные и современные пространства для
              жизни.
              <br />
              <br />
              Уже сданы и заселены:
              <br />
              5-этажный дом — ул. Дежнёва, 3, г. Махачкала (район Первая Махачкала)
              <br />
              10-этажный дом — ул. Грязелечебная, пос. Редукторный
              <br />
              9-этажный дом — ул. Азиза Алиева, 5-й тупик
              <br />
              <br />
              Мы гордимся тем, что дома, построенные нами, становятся надёжной основой для новых семейных историй.
            </p>
          </div>
        </div>
      </section>

      <section className={styles['offer-section']}>
        <h2>Может вас заинтересовать</h2>
        <ProjectOfferComponent info={offerProject} />
      </section>

      <section id="contacts" className={styles['contacts-section']}>
        <h1 className={styles.heading}>Контакты</h1>
        <div className={styles['contacts-grid']}>
          <a
            className={styles['contact-tile']}
            href="https://yandex.ru/maps/-/CHfTMIjf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/geo.svg" alt="" width={20} height={20} />
            г. Махачкала, ул. Дахадаева, 105
          </a>
          <a
            className={`${styles['contact-tile']} ${styles['contact-tile_accent']}`}
            href="https://wa.me/79317770327"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/whatsapp-orig.svg" alt="" width={20} height={20} />
            +7 931 777 03 27
          </a>
          <a
            className={styles['contact-tile']}
            href="https://wa.me/79884431048"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/whatsapp-orig.svg" alt="" width={20} height={20} />
            +7 988 443 10 48
          </a>
          <div className={styles['contact-socials']}>
            <a href="https://www.instagram.com/kvartal_gsk/" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.svg" alt="" width={24} height={24} />
            </a>
            <a href="https://vk.com/gsk_kvartal" target="_blank" rel="noopener noreferrer">
              VK
            </a>
            <a href="mailto:kvartalgsk@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src="/gmail.svg" alt="" width={24} height={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
