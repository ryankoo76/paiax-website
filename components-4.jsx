// PAIAX — components-4.jsx
// Certification (S6), Results (S7), Leadership (S8), CTA (S9), Footer, Toasts

function Certification() {
  const tiers = [
    { stars: '★', tier: 'STARTER', cond: '첫 결과물 완성', form: '디지털 배지', color: '#8A9AB5' },
    { stars: '★★', tier: 'ASSEMBLER', cond: 'AI 서비스 실제 작동', form: '배지 + 실물 카드', color: '#4A90D9' },
    { stars: '★★★', tier: 'BUILDER', cond: '팔 수 있는 상태 완성', form: '배지 + 마켓 인증 마크', color: '#27AE60' },
    { stars: '★★★★', tier: 'SELLER', cond: '실제 거래 발생·위조 불가', form: '배지 + QR 실시간 검증', color: '#C9A84C', featured: true },
    { stars: '★★★★★', tier: 'ARCHITECT', cond: '타인의 결과물도 만들어 거래', form: '전국 100명 이내', color: '#9B59B6' }
  ];

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
  );
}

function Results() {
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
  ];

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
  );
}

function Leadership() {
  const network = [
    { name: '카이스트', region: 'KAIST · 대전' },
    { name: '서강대학교', region: 'SOGANG · 서울' },
    { name: 'Hacker-Dojo', region: 'SILICON VALLEY · USA' },
    { name: 'iWISE UK', region: 'INVENTION · UK' }
  ];

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
  );
}

function CTASection() {
  const steps = [
    { t: '1분 진단 (무료)', d: '지금 바로 · 비용·의무 없음' },
    { t: '가능한 것 확인', d: '기관 상황에 맞는 안내 제공' },
    { t: '함께 시작', d: '실제 결과물 · 수익창출 가능' }
  ];
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
            <React.Fragment key={s.t}>
              <div className="cta-step">
                <div className="cta-step-num">{i + 1}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
              {i < steps.length - 1 && <span className="cta-arrow">→</span>}
            </React.Fragment>
          ))}
        </div>

        <button className="cta-main-btn">귀 기관에 무엇이 가능한지 확인하기 →</button>
        <div className="cta-contact">contact@paiax.or.kr · www.paiax.or.kr · 서울특별시</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand-mark">PAIAX</div>
        <div className="footer-brand-sub">실용인공지능협회 · Practical AI Association</div>
      </div>
      <div className="footer-links">
        <a href="#possible">가능성</a>
        <a href="#results">실적</a>
        <a href="#cert">AX 인증</a>
        <a href="#about">협회 소개</a>
        <a href="#cta">문의</a>
      </div>
      <div className="footer-copy">© 2026 PAIAX. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}

/* ============= LIVE TOAST + CTA FLOATING ============= */
const TOAST_MESSAGES = [
  { label: '실거래 발생', text: '방금 김○○님의 AI 결과물이 실제 거래되었습니다' },
  { label: '구조 완성', text: '○○기업 팀이 AI 자동화 구조를 완성했습니다' },
  { label: '대회 통과', text: '○○고등학교 학생팀이 국제 대회 예선을 통과했습니다' },
  { label: '인증 취득', text: '방금 박○○님이 AX SELLER ★★★★를 취득했습니다' },
  { label: '교육청 합류', text: '○○교육청 관내 학교 3곳이 PAIAX와 함께합니다' }
];

function ToastSystem() {
  const [toasts, setToasts] = React.useState([]);
  const idx = React.useRef(0);

  React.useEffect(() => {
    let t;
    const schedule = (delay) => {
      t = setTimeout(() => {
        const id = Date.now();
        const m = TOAST_MESSAGES[idx.current % TOAST_MESSAGES.length];
        idx.current++;
        setToasts((prev) => [...prev, { id, ...m }]);
        setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 4000);
        schedule(8000 + Math.random() * 7000);
      }, delay);
    };
    schedule(5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <div className="toast-label">● {t.label}</div>
          <div className="toast-text">{t.text}</div>
        </div>
      ))}
    </div>
  );
}

function FloatingCTA() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = window.scrollY / max;
      setShow(pct > 0.3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#cta" className={`cta-floating ${show ? 'show' : ''}`}>
      1분 무료 진단 → 귀 기관에 무엇이 가능한지 확인하기
    </a>
  );
}

window.Certification = Certification;
window.Results = Results;
window.Leadership = Leadership;
window.CTASection = CTASection;
window.Footer = Footer;
window.ToastSystem = ToastSystem;
window.FloatingCTA = FloatingCTA;
