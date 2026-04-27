import CountUp from './CountUp'

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        <div className="stat-cell">
          <div className="stat-num"><CountUp to={50} suffix="개국" /></div>
          <div className="stat-label">글로벌 파트너십</div>
          <span className="stat-tag">학술</span>
        </div>
        <div className="stat-cell">
          <div className="stat-num">70 → 7</div>
          <div className="stat-label">AI중심대학 선정</div>
          <span className="stat-tag">학술</span>
        </div>
        <div className="stat-cell">
          <div className="stat-num"><CountUp to={1200} suffix="+" format={(v) => v.toLocaleString()} /></div>
          <div className="stat-label">결과물 완성</div>
          <span className="stat-tag solid">실용</span>
        </div>
        <div className="stat-cell">
          <div className="stat-num" style={{ fontSize: '1.6rem', letterSpacing: '0.02em' }}>axplaza</div>
          <div className="stat-label">실거래 발생 중</div>
          <span className="stat-tag solid">실용</span>
        </div>
        <div className="stat-cell">
          <div className="stat-num" style={{ fontSize: '1.8rem' }}>🏆</div>
          <div className="stat-label">AX-DOJO 미국 우승</div>
          <span className="stat-tag solid" style={{ background: 'rgba(201,168,76,0.25)' }}>실용</span>
        </div>
      </div>
    </section>
  )
}
