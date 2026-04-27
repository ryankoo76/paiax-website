export default function Results() {
  const cards = [
    { tag: '실용 실적', title: 'AX-DOJO 미국 현지 우승',
      body: '서강대학교 학생팀 · 미국 현지 AI 대회 최종 우승. PAIAX의 결과물 중심 운영이 만든 첫 글로벌 우승 사례입니다.',
      photo: true, accent: '#C9A84C' },
    { tag: '학술 실적', title: 'AI중심대학 선정 기여',
      body: '70개 후보 대학 중 7개 선정. PAIAX의 인프라·실행 운영이 핵심 역할을 수행했습니다.',
      cls: 'acad', accent: '#9B59B6' },
    { tag: '학술 실적', title: '카이스트 첨단 드론 AI',
      body: '카이스트 윤용진 교수 주도 · 첨단 드론 AI 활용 프로그램 설계·운영.',
      cls: 'acad-blue', accent: '#4A90D9' },
    { tag: '실용 실적', title: '인천교육청 납품·운영',
      body: '고교생 대상 · 공교육 체계 적용 · 성과 리포트 완비.',
      accent: '#C9A84C' },
    { tag: '글로벌', title: '50개국 axgo · Hacker-Dojo · iWISE 파트너십',
      body: '국제 AI 발명 대회 axgo, 실리콘밸리 Hacker-Dojo, 영국 iWISE까지 — 50개국 글로벌 운영 중.',
      cls: 'global', full: true, accent: '#E05252' }
  ]

  return (
    <section className="section-dark" id="results">
      <div className="grid-overlay"></div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1300, margin: '0 auto' }}>
        <div className="reveal">
          <span className="eyebrow" style={{ color: 'rgba(201,168,76,0.7)' }}>실제 결과물</span>
          <h2 style={{ marginTop: '0.7rem' }}>이것이 PAIAX가 만든 결과입니다</h2>
        </div>

        <div className="results-grid">
          {cards.map((c, i) => (
            <div
              className={`result-card reveal ${c.cls || ''} ${c.full ? 'full' : ''}`}
              style={{ '--accent': c.accent }}
              key={i}
            >
              <span className="result-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              {c.photo && (
                <div className="photo-placeholder" style={{ marginTop: '1rem', height: 80 }}>
                  [ 우승 사진 예정 ]
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="partners-row reveal">
          {['카이스트', '서강대학교', '인천교육청', 'Hacker-Dojo', 'iWISE'].map((p) => (
            <div className="partner-badge" key={p}><span>{p}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}
