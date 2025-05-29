import { Project } from 'kvartal/app/project.type'
import { PayType } from './calculator.component'

export const calculateFlat = (
  project: Project,
  square: number,
  payType: PayType,
  period: number,
  initPayPercent: number,
  floor?: number,
): { pricePerM2: number; initSum: number; pricePerMonth: number; totalSum: number } => {
  let pricePerM2 = 0
  if (payType === PayType.byCash) {
    let exception = 0
    if ((exception = findException(project, square))) {
      pricePerM2 = exception
    } else {
      if (project.link === 'Moskovsky') {
        for (const [sum, floors] of Object.entries(project.calculator.payment.byCash as Record<number, number[]>)) {
          if (floors.includes(floor!)) pricePerM2 = +sum
        }
      } else {
        pricePerM2 = project.calculator.payment.byCash as number
      }
    }
  } else {
    let exception = 0
    if ((exception = findException(project, square))) {
      pricePerM2 = exception
    } else {
      if (project.link === 'Moskovsky') {
        for (const [sum, floors] of Object.entries(project.calculator.payment.byNonCash as Record<number, number[]>)) {
          if (floors.includes(floor!)) pricePerM2 = +sum
        }
      } else {
        pricePerM2 = project.calculator.payment.byNonCash[
          project.calculator.payment.initialPayment.findIndex((el) => el === initPayPercent)
        ] as number
      }
    }
  }

  const flatPrice = square * pricePerM2
  const initSum = Number(((flatPrice * initPayPercent) / 100).toFixed(2))
  const totalSum = Number((flatPrice - initSum).toFixed(2))
  const pricePerMonth = Number((totalSum / period).toFixed(2))

  return {
    pricePerM2,
    initSum,
    pricePerMonth,
    totalSum,
  }
}

const findException = (project: Project, square: number): number => {
  return project.calculator.payment.exception[square] | 0
}
