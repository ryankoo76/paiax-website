export default function Leadership() {
  const network = [
    { name: '카이스트', region: 'KAIST · 대전' },
    { name: '서강대학교', region: 'SOGANG · 서울' },
    { name: 'Hacker-Dojo', region: 'SILICON VALLEY · USA' },
    { name: 'iWISE UK', region: 'INVENTION · UK' }
  ]

  return (
    <section className="section-light" id="about">
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div className="leader-grid">
          {/* LEFT */}
          <div className="reveal">
            <span className="eyebrow">협회 소개</span>
            <h2 style={{ marginTop: '0.7rem' }}>학술적 권위와 실행 역량을<br />함께 보유한 협회입니다</h2>
            <p style={{ color: '#566580', fontSize: '0.95rem', lineHeight: 1.8, marginTop: '1rem' }}>
              카이스트와 서강대학교의 신뢰를 기반으로,<br />
              실리콘밸리의 실행력을 더했습니다.
            </p>
            <div className="network-grid">
              {network.map((n) => (
                <div className="network-cell" key={n.name}>
                  <h5>{n.name}</h5>
                  <span className="region">{n.region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="leader-card reveal">
              <div className="leader-photo">사진<br />예정</div>
              <div className="leader-info">
                <div className="leader-role">현 협회장 · PRESIDENT</div>
                <div className="leader-name">서강대 은진은 교수</div>
                <div className="leader-org">서강대학교</div>
                <p className="leader-quote">
                  "AI중심대학 선정 과정에서 가장 중요한 것은 실행 가능한 인프라입니다.
                  PAIAX는 그 실행을 책임집니다."
                </p>
              </div>
            </div>
            <div className="leader-card reveal">
              <div className="leader-photo">사진<br />예정</div>
              <div className="leader-info">
                <div className="leader-role">초대 협회장 · FOUNDING PRESIDENT</div>
                <div className="leader-name">카이스트 윤용진 교수</div>
                <div className="leader-org">카이스트 (KAIST)</div>
                <p className="leader-quote">
                  "첨단 드론 AI 활용 프로그램 설계·운영. 학문이 결과물로 이어지는 길을
                  PAIAX와 함께 만들었습니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
