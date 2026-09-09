import { StaticImageData } from 'next/image'
import styles from './project-card.module.css'

const ProjectCardComponent = ({
  cover,
  title,
  text1,
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
      <h3>{title}</h3>
      <div className={styles['project-card_detail']}>
        <span>{text1}</span>
        <span className={styles['project-card_price']}>от {paySum} ₽</span>
      </div>
    </div>
  )
}

export default ProjectCardComponent
