import { StaticImageData } from 'next/image'

type BaseProject = {
  link: string
  cover: StaticImageData
  name: string
  address: string
  text1: string
  text2: string
  description: string
  fullDesc: string
  paySum: string
  gallery: StaticImageData[]
}

type ProjectInfo = {
  info: {
    text1: string
    text2: string
    text3: string
    text4: string
    text5: string
  }
}

type ProjectCalculator = {
  calculator: {
    flats: number[]
    payment: {
      byCash: number | Record<number, number[]>
      byNonCash: number[] | Record<number, number[]>
      period: number
      initialPayment: number[]
      exception: Record<number, number>
    }
  }
}

export type Project = BaseProject &
  ProjectInfo &
  ProjectCalculator & {
    flatsInfo: Array<{ name: string; size: number }>
  }
