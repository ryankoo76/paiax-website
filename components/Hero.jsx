export default function Hero({ onSelectTarget }) {
  return (
    <section className="hero" id="top">
      <div className="grid-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-grid">
        {/* LEFT */}
        <div>
          <div className="hero-badge reveal in" style={{ transitionDelay: '0.1s' }}>
            <span className="dot"></span>
            <span>PAIAX — 실용인공지능협회</span>
          </div>
          <h1 className="reveal in" style={{ transitionDelay: '0.3s' }}>
            AI를 배웠는데<br />달라진 것이 없습니다.
          </h1>
          <p className="hero-sub reveal in" style={{ transitionDelay: '0.45s' }}>
            우리는 그 이유를 알고 있습니다.
          </p>
          <p className="hero-body reveal in" style={{ transitionDelay: '0.6s' }}>
            PAIAX는 알고 있는 것을 <em>실제 결과물로 만드는 협회</em>입니다.<br />
            실제 수상 실적, 실제 결과물,<br />
            실제 <em>수익창출까지도 가능합니다</em>.
          </p>

          <div className="target-row reveal in" style={{ transitionDelay: '0.75s' }}>
            {['개인', '기업·단체', '학교·교육청', '대학교'].map((t) => (
              <button key={t} className="target-pill" onClick={() => onSelectTarget(t)}>
                {t}
              </button>
            ))}
          </div>

          <div className="hero-cta-row reveal in" style={{ transitionDelay: '0.9s' }}>
            <a href="#cta" className="btn-primary">
              귀 기관에 무엇이 가능한지 확인하기 <span>→</span>
            </a>
            <a href="#results" className="btn-ghost">실제 결과물 보기</a>
          </div>

          <div className="partner-row reveal in" style={{ transitionDelay: '1.1s' }}>
            {['카이스트', '서강대학교', 'Hacker-Dojo', 'iWISE UK'].map((p) => (
              <div className="partner-badge" key={p}>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT EVIDENCE */}
        <div className="evidence-card reveal in" style={{ transitionDelay: '0.5s' }}>
          <span className="label">이것이 PAIAX가 만든 결과입니다</span>
          <div className="stack">
            <div className="evidence-item">
              <h4>AX-DOJO 미국 현지 우승</h4>
              <p>서강대학교 학생팀 · 미국 현지 AI 대회 최종 우승</p>
              <div className="photo-placeholder">[ 우승 사진 예정 ]</div>
            </div>
            <div className="evidence-item">
              <span className="big-num">70 → 7</span>
              <h4>AI중심대학 선정</h4>
              <p>PAIAX 핵심 역할 · 70개 대학 중 7개 선정 기여</p>
            </div>
            <div className="evidence-item">
              <h4>인천교육청 납품·운영</h4>
              <p>고교생 대상 · 공교육 체계 적용 · 성과 리포트 완비</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
