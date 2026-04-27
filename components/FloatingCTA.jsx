'use client'

import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = window.scrollY / max
      setShow(pct > 0.3)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href="#cta" className={`cta-floating ${show ? 'show' : ''}`}>
      1분 무료 진단 → 귀 기관에 무엇이 가능한지 확인하기
    </a>
  )
}
