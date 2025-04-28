import { StaticImageData } from 'next/image'
import styles from './project-card.module.css'

const ProjectCardComponent = ({
  cover,
  title,
  dateKey,
  forSale,
  paySum,
}: {
  cover: StaticImageData
  title: string
  dateKey: string
  forSale: number
  paySum: string
}) => {
  return (
    <div style={{ backgroundImage: `url(${cover.src})` }} className={styles['project-card']}>
      <h2>{title}</h2>
      <div className={styles['project-card_detail']}>
        <div className={styles['project-card_detail_left']}>
          <h5>Выдача ключей {dateKey}</h5>
          <h5>{forSale} квартиры в продаже</h5>
        </div>
        <div className={styles['project-card_detail_right']}>
          <h5>от {paySum} Р/МЕС</h5>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardComponent
