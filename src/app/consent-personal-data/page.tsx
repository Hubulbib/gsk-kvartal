import styles from '../legal/legal.module.css'

export default function ConsentPage() {
  return (
    <main className={styles.legal}>
      <h1 className={styles.title}>Согласие на обработку персональных данных</h1>

      <div className={styles.content}>
        <section>
          <p>
            Пользователь, оставляя заявку на сайте ООО ГСК «КВАРТАЛ», предоставляет согласие на обработку своих
            персональных данных.
          </p>
        </section>

        <section>
          <h2>Перечень данных</h2>

          <ul>
            <li>Имя.</li>
            <li>Телефон.</li>
            <li>Email (при наличии).</li>
          </ul>
        </section>

        <section>
          <h2>Цели обработки</h2>

          <ul>
            <li>Связь с пользователем.</li>
            <li>Предоставление консультации.</li>
            <li>Подготовка коммерческих предложений.</li>
            <li>Ответы на обращения.</li>
          </ul>
        </section>

        <section>
          <h2>Срок действия согласия</h2>

          <p>
            Согласие действует до момента его отзыва пользователем путем направления письменного обращения в адрес
            компании.
          </p>
        </section>

        <section className={styles.requisites}>
          <p>ООО ГСК «КВАРТАЛ»</p>
          <p>ИНН: 0500031600</p>
          <p>КПП: 050001001</p>
          <p>ОГРН: 1250500006316</p>
        </section>
      </div>
    </main>
  )
}
