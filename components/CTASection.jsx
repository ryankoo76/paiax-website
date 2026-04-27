export default function CTASection() {
  const steps = [
    { t: '1분 진단 (무료)', d: '지금 바로 · 비용·의무 없음' },
    { t: '가능한 것 확인', d: '기관 상황에 맞는 안내 제공' },
    { t: '함께 시작', d: '실제 결과물 · 수익창출 가능' }
  ]
  return (
    <section className="cta-section" id="cta">
      <div className="grid-overlay"></div>
      <div style={{ position: 'relative', zIndex: 2 }} className="reveal">
        <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.22em' }}>
          지금 바로 시작하십시오
        </div>
        <h2>귀 기관에 무엇이 가능한지<br />먼저 확인해 보십시오.</h2>
        <p className="cta-sub">1분 진단 · 비용 없음 · 의무 없음 · 24시간 내 연락</p>

        <div className="cta-flow">
          {steps.map((s, i) => (
            <div key={s.t} style={{ display: 'contents' }}>
              <div className="cta-step">
                <div className="cta-step-num">{i + 1}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
              {i < steps.length - 1 && <span className="cta-arrow">→</span>}
            </div>
          ))}
        </div>

        <button className="cta-main-btn">귀 기관에 무엇이 가능한지 확인하기 →</button>
        <div className="cta-contact">contact@paiax.or.kr · www.paiax.or.kr · 서울특별시</div>
      </div>
    </section>
  )
}
