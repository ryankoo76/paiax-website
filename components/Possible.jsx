'use client'

import { useState } from 'react'

export default function Possible() {
  const [activeStep, setActiveStep] = useState(0)
  const cards = [
    { color: '#27AE60', title: 'AI로 실제 결과물을 만들 수 있습니다',
      body: '코딩을 몰라도 됩니다. 새 AI가 나와도 다시 시작할 필요가 없습니다. PAIAX의 방식으로 만들면 어떤 AI 도구가 나와도 그대로 작동합니다.',
      ref: '→ axvend 기반' },
    { color: '#C9A84C', title: '만든 것이 실제 거래로 이어질 수 있습니다',
      body: '만든 것을 어디서 팔지 걱정하지 않아도 됩니다. 이미 열려있는 시장에 올리면 됩니다. 실제 수익창출까지도 가능합니다.',
      ref: '→ axplaza 기반' },
    { color: '#E74C3C', title: '세계 무대에서 겨룰 수 있습니다',
      body: '50개국이 참여하는 국제 AI 발명 대회가 이미 운영 중입니다. 수상 실적이 포트폴리오가 됩니다.',
      ref: '→ axgo 기반' }
  ]
  const steps = ['진단', '결과물 완성', '시장 등록', '국제 무대', 'AX 인증']

  return (
    <section className="section-dark" id="possible">
      <div className="grid-overlay"></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal">
          <span className="eyebrow" style={{ color: 'rgba(201,168,76,0.6)' }}>무엇이 가능한가</span>
          <h2 style={{ marginTop: '0.7rem' }}>PAIAX와 함께하면 이것이 가능합니다</h2>
        </div>

        <div className="possible-grid">
          {cards.map((c, i) => (
            <div
              className="possible-card reveal"
              style={{ '--bar-color': c.color, transitionDelay: `${i * 0.08}s` }}
              key={i}
            >
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="ref">{c.ref}</span>
            </div>
          ))}
        </div>

        <div className="flow-bar reveal">
          {steps.map((s, i) => (
            <div
              key={s}
              className={`flow-step ${activeStep === i ? 'active' : ''}`}
              onClick={() => setActiveStep(i)}
            >
              <div className="flow-num">STEP {i + 1}</div>
              <div className="flow-title">{s}</div>
            </div>
          ))}
        </div>

        <p className="protect-line reveal">
          어떤 새 AI가 나와도 이 흐름은 바뀌지 않습니다. 도구는 PAIAX가 업데이트합니다.
        </p>
      </div>
    </section>
  )
}
