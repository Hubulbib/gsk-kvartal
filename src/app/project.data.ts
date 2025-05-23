import Federal1Image from '../../public/federal/federal-1.png'
import Federal2Image from '../../public/federal/federal-2.png'
import Federal3Image from '../../public/federal/federal-3.png'
import Federal4Image from '../../public/federal/federal-4.png'
import Federal5Image from '../../public/federal/federal-5.png'
import Federal6Image from '../../public/federal/federal-6.png'
import Federal7Image from '../../public/federal/federal-7.png'
import Federal8Image from '../../public/federal/federal-8.png'
import FederalPlanImage from '../../public/federal/federal-plan.png'

import Turali1Image from '../../public//turali/turali-1.png'
import Turali2Image from '../../public//turali/turali-2.png'
import Turali3Image from '../../public//turali/turali-3.png'
import Turali4Image from '../../public//turali/turali-4.png'
import Turali5Image from '../../public//turali/turali-5.png'
import Turali6Image from '../../public//turali/turali-6.png'
import Turali7Image from '../../public//turali/turali-7.png'
import Turali8Image from '../../public//turali/turali-8.png'
import TuraliPlanImage from '../../public//turali/turali-plan.png'

import Moskovsky1Image from '../../public/moskovsky/moskovsky-1.png'
import Moskovsky2Image from '../../public/moskovsky/moskovsky-2.png'
import Moskovsky3Image from '../../public/moskovsky/moskovsky-3.png'
import Moskovsky4Image from '../../public/moskovsky/moskovsky-4.png'
import Moskovsky5Image from '../../public/moskovsky/moskovsky-5.png'
import MoskovskyPlanImage from '../../public/moskovsky/moskovsky-plan.png'

import Lermontov1Image from '../../public/lermantov/lermantov-1.png'
import Lermontov2Image from '../../public/lermantov/lermantov-2.png'
import Lermontov3Image from '../../public/lermantov/lermantov-3.png'
import Lermontov4Image from '../../public/lermantov/lermantov-4.png'
import Lermontov5Image from '../../public/lermantov/lermantov-5.png'
import Lermontov6Image from '../../public/lermantov/lermantov-6.png'
import LermontovPlanImage from '../../public/lermantov/lermantov-plan.png'

export const ProjectData = {
  Federal: {
    link: 'Federalny',
    cover: Federal1Image,
    name: 'ЖК «ФЕДЕРАЛЬНЫЙ»',
    address: 'Махачкала, Хасавюртовское шоссе, 5',
    text1: 'Площадь участка - 16966 м2',
    text2: 'Жилая площадь - 39045 м2',
    description:
      'Находится в хорошей транспортной развязке, по федеральной трассе. С подземным паркингом, с панорамными окнами. ',
    fullDesc: `Находится в хорошей транспортной развязке, по федеральной трассе. С подземным паркингом, с панорамными окнами. 12 этажное здание, цельно-монолитный дом комфорт класса, в котором есть 2 лифта: один пассажирский, один грузовой. Лифты на автономном режиме, а это значит, что они работают при отключенном свете.
Закрытая дворовая территория, детская и спортивная площадка. К дому есть два въезда и выезда, с федеральной трассы и со двора.
Хорошо развитая инфраструктура, лицей, сады, спортивный комплекс, развлекательный комплекс ипподром Зебра, где вы сможете весело провести время со своей семьей и детьми. Все в шаговой доступности.
На территории расположен большой мебельный центр Киргу. Рядом расположены кафе, гастрономы, магазины одежды, ресторан Сабур.`,

    paySum: '65 000',
    flatsInfo: [
      { name: 'Студия', size: 25.29 },
      { name: '1-КОМН.', size: 52.78 },
      { name: '2-КОМН.', size: 59.74 },
      { name: '3-КОМН.', size: 97.23 },
    ],
    gallery: [
      Federal1Image,
      Federal2Image,
      Federal3Image,
      Federal4Image,
      Federal5Image,
      Federal6Image,
      Federal7Image,
      Federal8Image,
      FederalPlanImage,
    ],
    info: {
      text1: 'В процессе строительства',
      text2: '2 автономных лифта',
      text3: '12 Этажей',
      text4: 'Подземная парковка',
      text5: '24',
    },
    calculator: {
      flats: [
        36, 66.49, 32.84, 71.96, 26.3, 60.43, 36.2, 50.86, 60.11, 27.43, 52.78, 25.29, 97.23, 32.93, 54.72, 59.73,
        63.69, 26.77,
      ],
      payment: {
        byCash: 65000,
        byNonCash: 70000,
        period: 24,
        initialPayment: [30, 50],
        exception: {},
      },
    },
  },
  Moskovskyi: {
    link: 'Moskovsky',
    cover: Moskovsky1Image,
    name: 'ЖК «МОСКОВСКИЙ»',
    address: 'Махачкала, ул. Даганова, 139',
    description: `Дом нового поколения, отвечающий всем нормам СНиПа. Монолитный дом, панорамные окна, со своей школой, садиком и поликлиникой, парком и спорткомплексом.`,
    fullDesc: `Предлагаем вам Новый современный жилой дом, располорженный на повороте на Учхоз, 2-й тупик Доганова. Комплекс из 49 блоков.
Дом нового поколения, отвечающий всем нормам СНиПа. Монолитный дом, панорамные окна, со своей школой, садиком и поликлиникой, парком и спорткомплексом. Современный лифт с генератором, дворовая огромная территория, беседки, детская площадка, зелёная зона, отдельная, видеонаблюдение, охраняемая территория, в шаговой доступности огромная парковая аллея!`,
    text1: 'Площадь участка - 69360 м2',
    text2: 'Площадь озеленения - 23000 м2',
    paySum: '65 000',
    flatsInfo: [
      { name: 'Студия', size: 28.1 },
      { name: '1-КОМН.', size: 66.61 },
      { name: '2-КОМН.', size: 59.74 },
      { name: '3-КОМН.', size: 97.23 },
    ],
    gallery: [Moskovsky1Image, Moskovsky2Image, Moskovsky3Image, Moskovsky4Image, MoskovskyPlanImage, Moskovsky5Image],
    info: {
      text1: 'В процессе строительства',
      text2: 'Монолитная основа',
      text3: 'Развитая инфраструктура',
      text4: '49 Блоков',
      text5: '45',
    },
    calculator: {
      flats: [56.95, 42.87, 61.81, 42.42, 32.95, 46, 66.61, 52.53, 75.6, 51.94, 37.85, 55.66],
      payment: {
        byCash: 65000,
        byNonCash: 70000,
        period: 45,
        initialPayment: [0, 30, 50],
        exception: {},
      },
    },
  },
  Turali: {
    link: 'Turali',
    cover: Turali1Image,
    name: 'ЖК «Турали»',
    address: 'Махачкала, ул. Металлургов, 44',
    text1: 'Площадь участка - 17815 м2',
    text2: 'Жилая площадь - 68396 м2',
    description: `Комплекс из 11-ти корпусов, 16-ти этажный монолитный дом комфорт класса.`,
    fullDesc: `Комплекс из 11-ти корпусов, 16-ти этажный монолитный дом комфорт класса.
    Лифты на генераторах, большая закрытая дворовая территория, благоустроенный двор с детскими и спортивными площадками, спальный район. Удобная транспортная развязка. Есть вся разрешительная документация.
    РАЗВИТАЯ ИНФРАСТРУКТУРА РЯДОМ: Садик, школа в пешей доступности; Море и песчанные пляжи в 10 минутах езды; Торговые комплексы; Первые этажи-коммерция; В близи комплекса "Духовный центр им. Пророка Исы"; Аллея медиков.`,
    paySum: '55 000',
    flatsInfo: [
      { name: '1-КОМН.', size: 42.1 },
      { name: '2-КОМН.', size: 53.79 },
    ],
    gallery: [
      Turali1Image,
      Turali2Image,
      Turali3Image,
      Turali4Image,
      Turali5Image,
      Turali6Image,
      Turali7Image,
      Turali8Image,
      TuraliPlanImage,
    ],
    info: {
      text1: 'Сдача к 2026 году',
      text2: 'В процессе строительства',
      text3: '16 Этажей',
      text4: '11 Блоков',
      text5: '36',
    },
    calculator: {
      flats: [27, 42.11, 44.87, 49.36, 51.54, 53.19, 54.25, 74, 78.15, 79.6, 79.97, 83.16, 85.52, 87.15],
      payment: {
        byCash: 65000,
        byNonCash: 70000,
        period: 36,
        initialPayment: [30, 50],
        exception: { 74: 55000 },
      },
    },
  },
  Lermontov: {
    link: 'Lermontov',
    cover: Lermontov1Image,
    name: 'ЖК «Лермонтов»',
    address: 'Избербаш, ул. Лермонтова',
    text1: 'Площадь участка - 18029 м2',
    text2: 'Жилая площадь - 15725 м2',
    description: `Комплекс из 9-ти корпусов, 16-ти этажный монолитный дом комфорт класса.`,
    fullDesc: `Комплекс монолитного дома из 9-ти Корпусов, включающий в себя: воркаут и спортивные зоны, детские площадки и беседки, резервуары для воды с запасом до 2-х недель, автономные лифты`,
    paySum: '70 000',
    flatsInfo: [
      { name: 'Студия', size: 34.8 },
      { name: '1-КОМН.', size: 41.15 },
      { name: '2-КОМН.', size: 62.71 },
      { name: '3-КОМН.', size: 106.02 },
    ],
    gallery: [
      Lermontov1Image,
      Lermontov2Image,
      Lermontov3Image,
      Lermontov4Image,
      Lermontov5Image,
      Lermontov6Image,
      LermontovPlanImage,
    ],
    info: {
      text1: 'Более 450 квартир',
      text2: 'В процессе строительства',
      text3: '8 Этажей',
      text4: '9 Корпусов',
      text5: '24',
    },
    calculator: {
      flats: [],
      payment: {
        byCash: 0,
        byNonCash: 0,
        period: 24,
        initialPayment: [30, 50],
        exception: {},
      },
    },
  },
}

export type ProjectType = typeof ProjectData.Federal
