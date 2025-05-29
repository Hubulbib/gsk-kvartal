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
    if (project !== ProjectData.Moskovsky.link) {
      setSquare(data.calculator.flats[0])
    } else {
      setSquare(floor === 1 ? data.calculator.flats.slice(0, 6)[0] : data.calculator.flats.slice(6)[0])
    }
  }, [project])

  useEffect(() => {
    if (payType === PayType.byNonCash) {
      setInitPayPercent(data.calculator.payment.initialPayment[0])
      setPeriod(data.calculator.payment.period)
    }
  }, [payType])

  useEffect(() => {
    setSquare(floor === 1 ? data.calculator.flats.slice(0, 6)[0] : data.calculator.flats.slice(6)[0])
  }, [floor])

  useEffect(() => {
    console.log(calculateFlat(data, square!, payType, period, initPayPercent, floor))
    setResult(calculateFlat(data, square!, payType, period, initPayPercent, floor))
  }, [data, square, payType, period, initPayPercent, floor])

  return (
    <div className={styles['calculator']}>
      <ul className={styles['calculator_input-list']}>
        <li>
          <h4>Выберите ЖК:</h4>
          <select onChange={(e) => setProject(ProjectData[e.target.value].link)} value={project}>
            {Object.values(ProjectData).map((el) => (
              <option key={el.link} value={el.link}>
                {el.name}
              </option>
            ))}
          </select>
        </li>

        {project === ProjectData.Moskovsky.link ? (
          <>
            <li>
              <h4>Выберите этаж:</h4>
              <select value={floor} onChange={(e) => setFloor(+e.target.value)}>
                <option value={1}>1-5</option>
                <option value={6}>6-8</option>
              </select>
            </li>
            <li>
              <h4>Выберите площадь:</h4>
              <select disabled={!floor} value={square} onChange={(e) => setSquare(+e.target.value)}>
                {(floor < 6 ? data.calculator.flats.slice(0, 6) : data.calculator.flats.slice(6))
                  .sort((a, b) => a - b)
                  .map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
              </select>
            </li>
          </>
        ) : (
          <li>
            <h4>Выберите площадь:</h4>
            <select value={square} onChange={(e) => setSquare(+e.target.value)}>
              {Array.from(new Set(data.calculator.flats))
                .sort((a, b) => a - b)
                .map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
            </select>
          </li>
        )}
        <li>
          <h4>Выберите тип оплаты:</h4>
          <select value={payType} onChange={(e) => setPayType(e.target.value as PayType)}>
            <option value={PayType.byCash}>Наличными</option>
            <option value={PayType.byNonCash}>Рассрочка</option>
          </select>
        </li>
        {payType === 'Рассрочка' ? (
          <>
            <li>
              <h4>Выберите первоначальный взнос:</h4>
              <select value={initPayPercent} onChange={(e) => setInitPayPercent(+e.target.value)}>
                {data.calculator.payment.initialPayment.map((el) => (
                  <option key={el} value={el}>
                    {el}%
                  </option>
                ))}
              </select>
            </li>
            <li>
              <h4>Выберите период оплаты:</h4>
              <Slider
                min={1}
                max={data.calculator.payment.period}
                step={1}
                onChange={(v) => setPeriod(v as number)}
                defaultValue={data.calculator.payment.period}
              />
              <h4>{period}</h4>
            </li>
          </>
        ) : null}
      </ul>
      <div className={styles['calculator_result']}>
        <div>
          <h5>Цена за м2</h5>
          <h3>{result.pricePerM2?.toLocaleString('ru-RU')} ₽</h3>
        </div>
        <div>
          <h5>Первоначальный взнос</h5>
          <h3>{payType === PayType.byNonCash ? result.initSum?.toLocaleString('ru-RU') : 0} ₽</h3>
        </div>
        <div>
          <h5>Ежемесячный платеж</h5>
          <h3>{payType === PayType.byNonCash ? result.pricePerMonth?.toLocaleString('ru-RU') : 0} ₽</h3>
        </div>
        <div>
          <h5>Итоговая сумма</h5>
          <h3>{result.totalSum?.toLocaleString('ru-RU')} ₽</h3>
        </div>
        <button onClick={() => window.open('https://wa.me/79884431048')}>Узнать подробнее</button>
      </div>
    </div>
  )
}

export default CalculatorComponent
