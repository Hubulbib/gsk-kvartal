import type { Metadata } from 'next'
import './globals.css'
import NavBarComponent from 'kvartal/components/navbar/navbar.component'
import FooterComponent from 'kvartal/components/footer/footer.component'
import Image from 'next/image'

import 'rc-slider/assets/index.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-photo-view/dist/react-photo-view.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

export const metadata: Metadata = {
  title: 'ГСК «Квартал»',
  description: 'Квартиры с видом на культуру Дагестана',
  keywords:
    'квартиры, жилой комплекс, новостройка, недвижимость, Квартал, Махачкала, квартиры в Махачкале, новостройки Махачкала, недвижимость Дагестан, Дагестан, квартиры с видом на море, квартиры в центре Махачкалы, строительная компания Дагестан, Турали, купить квартиру в Махачкале, современные квартиры, жилье премиум класса, новостройки 2024, квартиры с отделкой, жилой комплекс с развитой инфраструктурой, квартиры рядом с морем, квартиры с панорамными окнами',
  openGraph: {
    title: 'ГСК «Квартал» - Квартиры с видом на культуру Дагестана',
    description:
      'ГСК «Квартал» - современные квартиры с видом на культуру Дагестана. Строим качественное жилье с 2014 года',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ГСК «Квартал»',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: '5a50868d4eb7113c',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral+SC:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Ubuntu+Condensed&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBarComponent />
        {children}
        <FooterComponent />
        <a href="https://wa.me/79317770327" target="_blank">
          <Image className="action-whatsapp" src={'/whatsapp-orig.svg'} alt="" width={50} height={50} />
        </a>
      </body>
    </html>
  )
}
