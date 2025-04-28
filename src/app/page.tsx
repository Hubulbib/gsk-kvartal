import ProjectCardComponent from 'kvartal/components/project-card/project-card.component'
import styles from './page.module.css'
import Image from 'next/image'
import JKFederalImage from '../../public/jk-federal.jpg'
import ProjectOfferComponent from 'kvartal/components/project-offer/project-offer.component'
import { ProjectData } from './project.data'

const Home = () => {
  const getProjectOffer = () => {
    const projects = Object.keys(ProjectData)
    const randomIndex = Math.floor(Math.random() * projects.length)
    const randomProjectKey = projects[randomIndex]

    return ProjectData[randomProjectKey as keyof typeof ProjectData]
  }

  return (
    <div className={styles['main']}>
      <section className={styles['hero-section']}>
        <div className={styles['hero-type-1']}>
          <Image src="/logo-big.svg" alt="КВАРТАЛ" width={450} height={100} />
          <h2>Квартиры с видом на культуру</h2>
        </div>
        <div className={styles['hero-type-2']}>
          <h2>Вкусные цены</h2>
          <h5>15%</h5>
        </div>
      </section>
      <section id="projects" className={styles['projects-section']}>
        <h1>Проекты</h1>
        <div>
          <ProjectCardComponent
            cover={JKFederalImage}
            title={'ЖК "Федеральный"'}
            dateKey={'25.10.2025'}
            forSale={104}
            paySum={'12 200'}
          />
          <ProjectCardComponent
            cover={JKFederalImage}
            title={'ЖК "Федеральный"'}
            dateKey={'25.10.2025'}
            forSale={104}
            paySum={'12 200'}
          />
          <ProjectCardComponent
            cover={JKFederalImage}
            title={'ЖК "Федеральный"'}
            dateKey={'25.10.2025'}
            forSale={104}
            paySum={'12 200'}
          />
          <ProjectCardComponent
            cover={JKFederalImage}
            title={'ЖК "Федеральный"'}
            dateKey={'25.10.2025'}
            forSale={104}
            paySum={'12 200'}
          />
        </div>
      </section>
      <section className={styles['offer-section']}>
        <h1>Может вас заинтересовать</h1>
        <ProjectOfferComponent info={getProjectOffer()} />
      </section>
      <section id="company" className={styles['company-section']}>
        <h1>О компании</h1>
        <div className={styles['company-section_content']}>
          <Image src={'/logo-orig.png'} alt="" height={300} width={600} />
          <div>
            <h2>ГСК "КВАРТАЛ"</h2>
            <p>
              Наша строительная компания была создана в 2014 году. На рынке строительства и недвижимости мы представлены
              белее 10 лет. За это время было реализовано много интересных объектив, а именно жилые многоквартирные
              дома.
              <br />
              <br />
              Время идет мы расширяемся и совместно с нашими клиентами строим не просто дома, а комплексы домов с
              развитой инфраструктурой, качественной отделкой, используя современные материалы строительства и отделки.
              <br />
              <br />
              Для удобства наших клиентов у нас предусмотрены различные программы. А именно :{' '}
              <strong>
                минимальный первоначальный взнос, беспроцентная рассрочка на весь срок строительства, сжатые сроки сдачи
                дома оговоренные договором.
              </strong>
              <br />
              <br />
              Работая совместно с нами, вы получаете добротное, современное жилье за адекватные деньги, с хорошими
              планировками, большими дворовыми территориями, с резервуарами воды, генераторами электричества. Дома
              комфорт класса.
            </p>
          </div>
        </div>
      </section>
      <section id="contacts" className={styles['support-section']}>
        <h1>Контакты</h1>
      </section>
    </div>
  )
}

export default Home
