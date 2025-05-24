'use client'

import ImageGallery from 'react-image-gallery'
import styles from './project-offer.module.css'
import { ProjectType } from '../../app/project.data'
import Link from 'next/link'

const ProjectOfferComponent = ({ info }: { info: ProjectType }) => {
  return (
    <div className={styles['project-offer']}>
      <ImageGallery
        additionalClass={styles['project-offer_cover']}
        items={info.gallery.map((el) => ({ original: el.src }))}
      />
      <div className={styles['project-offer_info']}>
        <div className={styles['project-offer_content']}>
          <h2>{info.name}</h2>
          <h3>{info.address}</h3>
          <p>{info.description}</p>
        </div>
        <h2 className={styles['project-offer_pay-sum']}>от {info.paySum} Р/МЕС</h2>
        <div className={styles['project-offer_flats']}>
          <div>
            {info.flatsInfo.map((el) => (
              <h5 key={el.name}>{el.name}</h5>
            ))}
          </div>
          <div>
            {info.flatsInfo.map((el) => (
              <h5 key={el.name}>от {el.size}м</h5>
            ))}
          </div>
        </div>
        <Link href={`/${info.link}`}>
          <button>Подробнее</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectOfferComponent
