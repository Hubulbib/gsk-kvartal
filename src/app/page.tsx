'use client'

import ProjectCardComponent from 'kvartal/components/project-card/project-card.component'
import styles from './page.module.css'
import Image from 'next/image'
import ProjectOfferComponent from 'kvartal/components/project-offer/project-offer.component'
import { ProjectData } from './project.data'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules'

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
        <Swiper
          className={styles['hero-swipe']}
          navigation
          scrollbar={{ draggable: true, hide: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
        >
          <SwiperSlide>
            <div className={styles['hero-type-1']}>
              <Image src="/logo-big.svg" alt="КВАРТАЛ" width={450} height={100} />
              <h2>Квартиры с видом на культуру Дагестана</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['hero-type-1-2']}>
              <div>
                <h2>О нас пишут в </h2>
                <Image src="/logo-ria.png" alt="РИА Дагестан" width={200} height={50} />
              </div>
              <h3>«Как дагестанская строительная компания «Квартал» меняет правила игры»</h3>
              <a
                href="https://riadagestan.ru/news/interview/kak_dagestanskaya_stroitelnaya_kompaniya_kvartal_menyaet_pravila_igry/"
                target="_blank"
              >
                Подробнее
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles['hero-type-2']}>
          <h2>Рассрочка</h2>
          <h5>0%</h5>
        </div>
      </section>
      <section id="projects" className={styles['projects-section']}>
        <h1>Проекты</h1>
        <div>
          {Object.values(ProjectData).map((project, ind) => (
            <Link href={project.link} key={ind}>
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
      <section id="company" className={styles['company-section']}>
        <h1>О компании</h1>
        <div className={styles['company-section_content']}>
          <Image src={'/logo-orig.png'} alt="" height={300} width={600} />
          <div>
            <h2>ГСК «КВАРТАЛ»</h2>
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
      <section className={styles['offer-section']}>
        <h1>Может вас заинтересовать</h1>
        <ProjectOfferComponent info={getProjectOffer()} />
      </section>
      <section id="contacts" className={styles['contacts-section']}>
        <h1>Контакты</h1>
        <div className={styles['support-section_content']}>
          <a href="https://yandex.ru/maps/-/CHfTMIjf" target="_blank" rel="noopener noreferrer">
            г. Махачкала, ул. Дахадаева, 105
          </a>
          <a href="https://wa.me/79317770327" target="_blank" rel="noopener noreferrer">
            +7 931 777 03 27
          </a>
          <a href="https://wa.me/79884431048" target="_blank" rel="noopener noreferrer">
            +7 988 443 10 48
          </a>
          <div>
            <a href="https://www.instagram.com/kvartal_gsk/" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://vk.com/gsk_kvartal" target="_blank" rel="noopener noreferrer"></a>
            <a href="mailto:kvartalgsk@gmail.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
