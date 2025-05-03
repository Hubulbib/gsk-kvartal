import { StaticImageData } from 'next/image'
import styles from './project-card.module.css'

const ProjectCardComponent = ({
  cover,
  title,
  text1,
  text2,
  paySum,
}: {
  cover: StaticImageData
  title: string
  text1: string
  text2: string
  paySum: string
}) => {
  return (
    <div style={{ backgroundImage: `url(${cover.src})` }} className={styles['project-card']}>
      <h2>{title}</h2>
      <div className={styles['project-card_detail']}>
        <div className={styles['project-card_detail_left']}>
          <h5>{text1}</h5>
          <h5>{text2}</h5>
        </div>
        <div className={styles['project-card_detail_right']}>
          <h5>от {paySum} Р/МЕС</h5>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardComponent
