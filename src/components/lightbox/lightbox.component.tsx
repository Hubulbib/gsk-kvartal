'use client'

import styles from './lightbox.module.css'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const LightboxComponent = ({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) => {
  return (
    <div className={styles['lightbox']} onClick={onClose}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images[index]} alt="" onClick={(e) => e.stopPropagation()} />
      <button className={styles['lightbox_close']} onClick={onClose} aria-label="Закрыть">
        <X size={32} />
      </button>
      <button
        className={styles['lightbox_prev']}
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Предыдущее"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        className={styles['lightbox_next']}
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Следующее"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}

export default LightboxComponent
