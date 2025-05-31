import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ГСК «Квартал»',
    short_name: 'ГСК «Квартал»',
    description: 'Квартиры с видом на культуру Дагестана',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#214838',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
