'use client'

import { ProjectType } from '../project.data'
import Image from 'next/image'
import styles from './page.module.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { useEffect, useState } from 'react'
import { getProjectInfo } from './get-info.util'
import { useParams } from 'next/navigation'

const Project = () => {
  const { name } = useParams()
  const [data, setData] = useState<ProjectType>()

  useEffect(() => {
    setData(getProjectInfo(name as string))
  }, [])

  return (
    <div className={styles['project-page']}>
      <section
        style={{
          backgroundImage: `linear-gradient(
        to bottom,
      rgba(0,0,0,0.3) 0%,    /* сверху чуть-чуть затемнено */
      rgba(0,0,0,0.5) 60%,   /* плавный переход */
      rgba(0,0,0,1) 100%  /* внизу сильное затемнение */
        ), url(${data?.cover.src})`,
        }}
        className={styles['project-hero-section']}
      >
        <h1>{data?.name}</h1>
      </section>
      <section className={styles['project-info']}>
        <div>
          <span className={styles['project-info_main']}>{data?.info.text1}</span>
          <span className={styles['project-info_label']}></span>
        </div>
        <div>
          <span className={styles['project-info_main']}>{data?.info.text2}</span>
          <span className={styles['project-info_label']}></span>
        </div>
        <div>
          <span className={styles['project-info_main']}>{data?.info.text3?.split(' ')[0]}</span>
          <span className={styles['project-info_label']}>{data?.info.text3?.split(' ')[1]}</span>
        </div>
        <div>
          <span className={styles['project-info_main']}>{data?.info.text4?.split(' ')[0]}</span>
          <span className={styles['project-info_label']}>{data?.info.text4?.split(' ')[1]}</span>
        </div>
        <div>
          <span className={styles['project-info_main']}>45</span>
          <span className={styles['project-info_label']}>
            <span className={styles['project-info_sub']}>МЕСЯЦЕВ</span>
            <br />
            РАССРОЧКА
          </span>
        </div>
      </section>
      <section className={styles['project-desc']}>
        <h2>{data?.name}</h2>
        <p>{data?.fullDesc}</p>
      </section>
      <section className={styles['project-gallery']}>
        <h2>Галерея</h2>
        <div>
          <PhotoProvider>
            {data?.gallery.map((el) => (
              <PhotoView key={el.src} src={el.src}>
                <Image key={el.src} src={el.src} alt="" width={800} height={600} />
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </section>
    </div>
  )
}

export default Project
