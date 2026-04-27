export default function Certification() {
  const tiers = [
    { stars: '★', tier: 'STARTER', cond: '첫 결과물 완성', form: '디지털 배지', color: '#8A9AB5' },
    { stars: '★★', tier: 'ASSEMBLER', cond: 'AI 서비스 실제 작동', form: '배지 + 실물 카드', color: '#4A90D9' },
    { stars: '★★★', tier: 'BUILDER', cond: '팔 수 있는 상태 완성', form: '배지 + 마켓 인증 마크', color: '#27AE60' },
    { stars: '★★★★', tier: 'SELLER', cond: '실제 거래 발생·위조 불가', form: '배지 + QR 실시간 검증', color: '#C9A84C', featured: true },
    { stars: '★★★★★', tier: 'ARCHITECT', cond: '타인의 결과물도 만들어 거래', form: '전국 100명 이내', color: '#9B59B6' }
  ]

  return (
    <section className="section-dark bg-secondary" id="cert">
      <div className="grid-overlay"></div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1300, margin: '0 auto' }}>
        <div className="cert-intro reveal">
          <span className="eyebrow">AX 인증</span>
          <h2>AI를 안다는 인증서는 넘쳐납니다.</h2>
          <p className="cert-quote">"실제로 만들었다는 인증은 세상에 없었습니다. 지금까지는."</p>
          <p className="cert-sub">
            AX 인증은 시험이 아닙니다. 실제로 만들고, 실제로 거래된 기록이 인증입니다.
            QR 코드를 스캔하면 누구나 실시간으로 확인할 수 있습니다.
          </p>
        </div>

        <div className="cert-grid">
          {tiers.map((t) => (
            <div
              className={`cert-card reveal ${t.featured ? 'featured' : ''}`}
              key={t.tier}
              style={{ '--cert-color': t.color }}
            >
              <div className="cert-stars">{t.stars}</div>
              <div className="cert-tier">{t.tier}</div>
              <p className="cert-cond">{t.cond}</p>
              <div className="cert-form">{t.form}</div>
            </div>
          ))}
        </div>

        <div className="cert-compare">
          <div className="compare-col reveal">
            <h4>기존 AI 인증서</h4>
            <ul>
              <li>시험 문제만 풀면 발급</li>
              <li>실제 결과물 없음</li>
              <li>거래 기록 검증 불가</li>
              <li>위조·재판매 가능</li>
            </ul>
          </div>
          <div className="compare-col good reveal">
            <h4>AX SELLER 인증</h4>
            <ul>
              <li>실제 결과물이 작동 중</li>
              <li>실거래 발생·기록 보존</li>
              <li>QR 실시간 검증 가능</li>
              <li>위조 불가 · 블록 등재</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#cta" className="cert-link">인증 전체 보기 →</a>
        </div>
      </div>
    </section>
  )
}
