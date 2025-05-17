import type { Metadata } from 'next'
import './globals.css'
import NavBarComponent from 'kvartal/components/navbar/navbar.component'
import FooterComponent from 'kvartal/components/footer/footer.component'
import Image from 'next/image'

import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-photo-view/dist/react-photo-view.css'

export const metadata: Metadata = {
  title: 'Квартал',
  description: 'Квартиры с видом на культуру',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="5a50868d4eb7113c" />
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
