'use client'

import styles from './project-offer.module.css'
import { type Project } from '../../app/project.type'
import Link from 'next/link'

const ProjectOfferComponent = ({ info }: { info: Project }) => {
  return (
    <div className={styles['project-offer']} style={{ backgroundImage: `url(${info.cover.src})` }}>
      <div className={styles['project-offer_content']}>
        <h3>{info.name}</h3>
        <span className={styles['project-offer_address']}>{info.address}</span>
        <p>{info.description}</p>
        <div className={styles['project-offer_flats']}>
          {info.flatsInfo.map((el) => (
            <div key={el.name}>
              <span>{el.name}</span>
              <span>от {el.size} м²</span>
            </div>
          ))}
        </div>
        <div className={styles['project-offer_footer']}>
          <span className={styles['project-offer_pay-sum']}>от {info.paySum} ₽/мес</span>
          <Link href={`/${info.link}`}>
            <button>Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectOfferComponent
