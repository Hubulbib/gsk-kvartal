import styles from './calculator.module.css'
import { useEffect, useState } from 'react'
import { ProjectData } from 'kvartal/app/project.data'
import { Project } from 'kvartal/app/project.type'
import Slider from 'rc-slider'
import { calculateFlat } from './calculate.util'

export enum PayType {
  byCash = 'Наличными',
  byNonCash = 'Рассрочка',
}

const CalculatorComponent = ({}) => {
  const [data, setData] = useState<Project>(ProjectData.Federalny)
  const [project, setProject] = useState<string>(ProjectData.Federalny.link)
  const [square, setSquare] = useState<number>()
  const [floor, setFloor] = useState<number>(1)
  const [payType, setPayType] = useState<PayType>(PayType.byCash)
  const [initPayPercent, setInitPayPercent] = useState<number>(0)
  const [period, setPeriod] = useState<number>(1)
  const [result, setResult] = useState<{
    pricePerM2: number
    initSum: number
    pricePerMonth: number
    totalSum: number
  }>({
    pricePerM2: 0,
    initSum: 0,
    pricePerMonth: 0,
    totalSum: 0,
  })

  useEffect(() => {
    setData(ProjectData[project])
    setSquare(ProjectData[project].calculator.flats[0])
  }, [project])

  useEffect(() => {
    if (payType === PayType.byNonCash) {
      setInitPayPercent(data.calculator.payment.initialPayment[0])
      setPeriod(data.calculator.payment.period)
    } else {
      setInitPayPercent(0)
      setPeriod(0)
    }
  }, [payType])

  useEffect(() => {
    setSquare(floor === 1 ? data.calculator.flats.slice(0, 6)[0] : data.calculator.flats.slice(6)[0])
  }, [floor])

  useEffect(() => {
    setResult(calculateFlat(data, square!, payType, period, initPayPercent))
  }, [data, square, payType, period, initPayPercent, floor])

  const isMoskovsky = project === ProjectData.Moskovsky.link

  return (
    <div className={styles['calculator']}>
      <div className={styles['calculator_fields']}>
        <div className={styles['field']}>
          <label>Жилой комплекс</label>
          <select onChange={(e) => setProject(ProjectData[e.target.value].link)} value={project}>
            {Object.values(ProjectData).map((el) => (
              <option key={el.link} value={el.link}>
                {el.name}
              </option>
            ))}
          </select>
        </div>

        {isMoskovsky && (
          <div className={styles['field']}>
            <label>Этаж</label>
            <select value={floor} onChange={(e) => setFloor(+e.target.value)}>
              <option value={1}>1–5</option>
              <option value={6}>6–8</option>
            </select>
          </div>
        )}

        <div className={styles['field']}>
          <label>Площадь</label>
          <select value={square} onChange={(e) => setSquare(+e.target.value)}>
            {Array.from(
              new Set(isMoskovsky ? (floor === 1 ? data.calculator.flats.slice(0, 6) : data.calculator.flats.slice(6)) : data.calculator.flats),
            )
              .sort((a, b) => a - b)
              .map((el) => (
                <option key={el} value={el}>
                  {el} м²
                </option>
              ))}
          </select>
        </div>

        <div className={styles['field_toggle']}>
          <button
            className={payType === PayType.byCash ? styles['toggle-active'] : ''}
            onClick={() => setPayType(PayType.byCash)}
          >
            Наличными
          </button>
          <button
            className={payType === PayType.byNonCash ? styles['toggle-active'] : ''}
            onClick={() => setPayType(PayType.byNonCash)}
          >
            Рассрочка
          </button>
        </div>

        {payType === PayType.byNonCash && (
          <>
            <div className={styles['field']}>
              <label>Первый взнос</label>
              <select value={initPayPercent} onChange={(e) => setInitPayPercent(+e.target.value)}>
                {data.calculator.payment.initialPayment.map((el) => (
                  <option key={el} value={el}>
                    {el}%
                  </option>
                ))}
              </select>
            </div>
            <div className={styles['field']}>
              <label>Период: {period} мес.</label>
              <Slider
                min={1}
                max={data.calculator.payment.period}
                step={1}
                value={period}
                onChange={(v) => setPeriod(v as number)}
              />
            </div>
          </>
        )}
      </div>

      <div className={styles['calculator_result']}>
        <div className={styles['result_stats']}>
          <div>
            <span>Цена за м²</span>
            <strong>{result.pricePerM2?.toLocaleString('ru-RU')} ₽</strong>
          </div>
          <div>
            <span>Взнос</span>
            <strong>{(payType === PayType.byNonCash ? result.initSum : 0)?.toLocaleString('ru-RU')} ₽</strong>
          </div>
          <div>
            <span>В месяц</span>
            <strong>{(payType === PayType.byNonCash ? result.pricePerMonth : 0)?.toLocaleString('ru-RU')} ₽</strong>
          </div>
          <div>
            <span>Итого</span>
            <strong>{result.totalSum?.toLocaleString('ru-RU')} ₽</strong>
          </div>
        </div>
        <button
          className={styles['result_cta']}
          onClick={() => window.open('https://wa.me/79884431048?text=Здравствуйте, хочу уточнить информацию по ЖК')}
        >
          Консультация →
        </button>
      </div>
      <p className={styles['calculator-disclaimer']}>
        Расчёт носит ознакомительный характер. Актуальную стоимость, наличие квартир и условия приобретения уточняйте
        у представителей ООО ГСК «КВАРТАЛ».
      </p>
    </div>
  )
}

export default CalculatorComponent
