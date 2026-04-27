'use client'

import { useState, useRef, useEffect } from 'react'

const TOAST_MESSAGES = [
  { label: '실거래 발생', text: '방금 김○○님의 AI 결과물이 실제 거래되었습니다' },
  { label: '구조 완성', text: '○○기업 팀이 AI 자동화 구조를 완성했습니다' },
  { label: '대회 통과', text: '○○고등학교 학생팀이 국제 대회 예선을 통과했습니다' },
  { label: '인증 취득', text: '방금 박○○님이 AX SELLER ★★★★를 취득했습니다' },
  { label: '교육청 합류', text: '○○교육청 관내 학교 3곳이 PAIAX와 함께합니다' }
]

export default function ToastSystem() {
  const [toasts, setToasts] = useState([])
  const idx = useRef(0)

  useEffect(() => {
    let t
    const schedule = (delay) => {
      t = setTimeout(() => {
        const id = Date.now()
        const m = TOAST_MESSAGES[idx.current % TOAST_MESSAGES.length]
        idx.current++
        setToasts((prev) => [...prev, { id, ...m }])
        setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 4000)
        schedule(8000 + Math.random() * 7000)
      }, delay)
    }
    schedule(5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <div className="toast-label">● {t.label}</div>
          <div className="toast-text">{t.text}</div>
        </div>
      ))}
    </div>
  )
}
