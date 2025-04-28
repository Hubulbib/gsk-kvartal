import styles from './project-offer.module.css'
import Image from 'next/image'
import { ProjectType } from '../../app/project.data'

const ProjectOfferComponent = ({ info }: { info: ProjectType }) => {
  return (
    <div className={styles['project-offer']}>
      <Image className={styles['project-offer_cover']} src={info.cover} alt="" height={400} width={900} />
      <div className={styles['project-offer_info']}>
        <div className={styles['project-offer_content']}>
          <h2>{info.name}</h2>
          <h3>{info.address}</h3>
          <p>{info.description}</p>
        </div>
        <h2 className={styles['project-offer_pay-sum']}>от {info.paySum} Р/МЕС</h2>
        <div className={styles['project-offer_flats']}>
          <div>
            {info.flats.map((el) => (
              <h5 key={el.name}>{el.name}</h5>
            ))}
          </div>
          <div>
            {info.flats.map((el) => (
              <h5 key={el.name}>от {el.size}м</h5>
            ))}
          </div>
        </div>
        <button>Подробнее</button>
      </div>
    </div>
  )
}

export default ProjectOfferComponent
