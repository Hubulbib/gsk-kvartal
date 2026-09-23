'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { getProjectInfo } from './get-info.util'
import { useParams, useRouter } from 'next/navigation'
import { type Project } from '../project.type'
import { Check, ArrowLeft } from 'lucide-react'
import LightboxComponent from 'kvartal/components/lightbox/lightbox.component'

const bulletList = (text?: string) =>
  text
    ? text
        .split('•')
        .slice(1)
        .map((el) => el.trim())
        .filter(Boolean)
    : []

const ProjectPage = () => {
  const { name } = useParams()
  const router = useRouter()
  const [data, setData] = useState<Project>()
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)

  useEffect(() => {
    setData(getProjectInfo(name as string))
  }, [name])

  if (!data) return null

  const descParas = data.fullDesc.split('\n').filter(Boolean)
  const innerList = bulletList(data.inner)
  const outerList = bulletList(data.outer)

  return (
    <div className={styles['project-page']}>
      <button className={styles['back-button']} onClick={() => router.push('/')}>
        <ArrowLeft size={18} />
        Все проекты
      </button>

      <section className={styles['project-hero']} style={{ backgroundImage: `url(${data.cover.src})` }}>
        <h1>{data.name}</h1>
        <span>{data.address}</span>
      </section>

      <section className={styles['project-info']}>
        {[data.info.text1, data.info.text2, data.info.text3, data.info.text4].map((text, i) => (
          <div key={i} className={styles['project-info_tile']}>
            <span>{text}</span>
          </div>
        ))}
        <div className={`${styles['project-info_tile']} ${styles['project-info_tile-accent']}`}>
          <strong>{data.calculator.payment.period}</strong>
          <span>мес. рассрочка</span>
        </div>
      </section>

      <section className={styles['project-desc']}>
        <h2>{data.name}</h2>
        <div>
          {descParas.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className={styles['project-amenities']}>
        <div className={styles['amenities-card']}>
          <h3>Внутреннее благоустройство</h3>
          {innerList.map((it, i) => (
            <div key={i} className={styles['amenities-item']}>
              <Check size={17} strokeWidth={2.5} />
              <span>{it}</span>
            </div>
          ))}
        </div>
        <div className={`${styles['amenities-card']} ${styles['amenities-card-dark']}`}>
          <h3>Внешняя инфраструктура</h3>
          {outerList.map((ot, i) => (
            <div key={i} className={styles['amenities-item']}>
              <Check size={17} strokeWidth={2.5} />
              <span>{ot}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles['media-section']}>
        <h2>Планировки</h2>
        <div className={styles['media-grid']}>
          {data.planning.map((img, i) => (
            <button
              key={i}
              className={styles['media-grid_item']}
              onClick={() => setLightbox({ images: data.planning.map((p) => p.src), index: i })}
            >
              <Image src={img} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      </section>

      <section className={styles['media-section']}>
        <h2>Галерея</h2>
        <div className={styles['media-grid']}>
          {data.gallery.map((img, i) => (
            <button
              key={i}
              className={styles['media-grid_item']}
              onClick={() => setLightbox({ images: data.gallery.map((g) => g.src), index: i })}
            >
              <Image src={img} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      </section>

      <p className={styles.disclaimer}>
        Представленные визуализации, планировки, характеристики и стоимость объектов могут изменяться. Уточняйте
        актуальную информацию у представителей компании.
      </p>

      {lightbox && (
        <LightboxComponent
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((l) => l && { ...l, index: (l.index - 1 + l.images.length) % l.images.length })}
          onNext={() => setLightbox((l) => l && { ...l, index: (l.index + 1) % l.images.length })}
        />
      )}
    </div>
  )
}

export default ProjectPage
