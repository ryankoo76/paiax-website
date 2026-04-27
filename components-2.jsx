// PAIAX — components-2.jsx
// Fatigue (S3), Possible (S4)

function Fatigue() {
  const items = [
    { y: '2023', main: 'ChatGPT를 열심히 익혔습니다.', result: '6개월 뒤 GPT-4가 나왔습니다.' },
    { y: '2024', main: 'Claude를 배웠습니다. Gemini도 나왔습니다.', result: '또 바뀌었습니다.' },
    { y: '2025', main: '새 도구가 또 나왔습니다.', result: '내가 익힌 것이 또 달라졌습니다.' },
    { y: '2026~', main: '또 새로운 AI가 나올 것입니다.', result: '이 게임이 언제 끝납니까?' }
  ];

  const checks = [
    'AI 써봤는데 달라진 것이 없다',
    '뭔가 만들었는데 어디에 쓸지 모르겠다',
    '새 AI 나올 때마다 따라가기 지친다',
    '만든 것을 팔 방법을 모른다',
    '국제 무대 연결고리가 없다'
  ];

  const [checked, setChecked] = React.useState([false, false, false, false, false]);
  const count = checked.filter(Boolean).length;

  const toggle = (i) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  let msg = '해당하는 항목을 체크해 보십시오';
  if (count >= 5) msg = '지금 바로 확인이 필요합니다';
  else if (count >= 3) msg = 'PAIAX가 필요한 시점입니다';
  else if (count >= 1) msg = '가볍게 시작할 수 있습니다';

  return (
    <section className="section-light" id="fatigue">
      <div className="reveal" style={{ maxWidth: 1300, margin: '0 auto' }}>
        <span className="eyebrow">AI 피로감</span>
      </div>
      <div className="fatigue-grid">
        {/* LEFT timeline */}
        <div className="reveal">
          <h2 style={{ marginTop: '0.6rem' }}>혹시 이런 경험이<br />있으십니까?</h2>
          <div className="timeline">
            {items.map((it) => (
              <div className="timeline-item" key={it.y}>
                <div className="timeline-year">{it.y}</div>
                <div className="timeline-text">
                  <p>{it.main}</p>
                  <span className="result">→ {it.result}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="quote-box">
            <p>"이 게임에서 내려오십시오.<br />우리는 다른 게임을 합니다."</p>
          </div>
        </div>

        {/* RIGHT checklist */}
        <div className="checklist reveal">
          <span className="checklist-label">자가 진단 체크리스트</span>
          {checks.map((c, i) => (
            <div
              key={i}
              className={`check-item ${checked[i] ? 'checked' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="check-box">
                {checked[i] && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#080E1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="check-text">{c}</span>
            </div>
          ))}

          <div className="diagnostic">
            <div className="diagnostic-label">진단 결과 · {count} / 5</div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${(count / 5) * 100}%` }}></div>
            </div>
            <div className="diagnostic-msg">{msg}</div>
          </div>

          <a href="#cta" className="full-btn" style={{ display: 'block', textAlign: 'center' }}>
            귀 기관에 무엇이 가능한지 확인하기 →
          </a>
        </div>
      </div>
    </section>
  );
}

function Possible() {
  const [activeStep, setActiveStep] = React.useState(0);
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
  ];
  const steps = ['진단', '결과물 완성', '시장 등록', '국제 무대', 'AX 인증'];

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
  );
}

window.Fatigue = Fatigue;
window.Possible = Possible;
