// PAIAX — components-3.jsx
// Targets (S5) tabs

const TARGETS = {
  '개인': {
    empathy: 'AI 써봤는데 달라진 게 없습니다. 만들어도 어디에 파나요?',
    possibility: '→ 실제 결과물을 만들고, 실제 수익창출까지도 가능합니다.',
    cols: 3,
    products: [
      { name: '처음 시작', target: '입문자 · 비전공자',
        desc: 'AI 도구가 처음이어도 첫 결과물을 만들 수 있습니다.',
        features: ['1:1 진단 세션', '첫 AI 결과물 완성', 'STARTER 인증 취득'],
        period: '1~2일' },
      { name: '만들고 팔기', target: '실제 거래 목표', featured: true,
        desc: '결과물을 axplaza에 올리고 실제 거래까지 연결합니다.',
        features: ['결과물 완성·배포', 'axplaza 등록', '실거래 발생 추적', 'SELLER 인증'],
        period: '4~6주' },
      { name: '나도 만들어 드립니다', target: 'ARCHITECT 트랙',
        desc: '타인의 요구에 맞춰 결과물을 만들고 거래까지 책임집니다.',
        features: ['수임 케이스 3건', '거래 운영 실적', 'ARCHITECT 인증 도전'],
        period: '8~12주' }
    ]
  },
  '기업·단체': {
    empathy: 'AI 도입 회의는 많은데, 실제 도입은 못 했습니다.',
    possibility: '→ 한 팀의 결과물부터 시작해, 전사 운영 구조까지 가능합니다.',
    cols: 3,
    products: [
      { name: '한 팀부터 시작', target: '파일럿 1팀 (5~8명)',
        desc: '한 팀의 실제 업무 결과물을 30일 내에 완성합니다.',
        features: ['업무 진단', '핵심 자동화 1건', 'ROI 리포트'],
        period: '4주' },
      { name: '전사 AI 전환', target: '전 부서 적용', featured: true,
        desc: '부서별 결과물을 동시에 만들고 운영 표준을 확립합니다.',
        features: ['부서별 결과물 5+', '내부 운영 매뉴얼', 'AX BUILDER 인증', '분기 리포트'],
        period: '12주' },
      { name: '우리 업종 전용', target: '맞춤 운영 체계',
        desc: '업종 특화 결과물과 인증 체계를 함께 설계합니다.',
        features: ['업종 분석', '전용 결과물 패키지', '내부 인증 발행'],
        period: '협의' }
    ]
  },
  '학교·교육청': {
    empathy: 'AI 도입은 해야 하는데, 실적으로 남길 방법이 없습니다.',
    possibility: '→ 학생이 실제 결과물을 만들고, 국제 대회 실적까지 가능합니다.',
    cols: 4,
    products: [
      { name: '하루 체험', target: '단일 학교 · 1일',
        desc: '학생 30명이 하루에 첫 결과물을 만듭니다.',
        features: ['1일 운영', 'STARTER 인증', '성과 리포트'],
        period: '1일' },
      { name: '국제 대회 출전', target: '학생 팀', featured: true,
        desc: 'axgo 국제 대회 예선·본선 출전을 함께 준비합니다.',
        features: ['팀 빌딩', '결과물 완성', '예선 통과 가이드'],
        period: '8주' },
      { name: '세계 무대 도전', target: '본선·우승 트랙',
        desc: '미국 현지 본선까지 출전 운영을 지원합니다.',
        features: ['본선 출전', '현지 운영', '수상 실적 등재'],
        period: '12주' },
      { name: '교육청 전용', target: '관내 다수 학교',
        desc: '관내 학교에 동일 체계를 보급하고 성과를 통합 보고합니다.',
        features: ['관내 보급 운영', '통합 성과 리포트', '전담 운영팀 배정'],
        period: '연 단위' }
    ]
  },
  '대학교': {
    empathy: 'AI중심대학 선정·KPI 보고가 모두 부담입니다.',
    possibility: '→ 결과물 + 실적 + KPI를 한 번에 완성할 수 있습니다.',
    cols: 3,
    products: [
      { name: '결과물 만들기', target: '단과대 단위',
        desc: '학생 결과물 50건 이상을 한 학기 안에 완성합니다.',
        features: ['결과물 50+', 'BUILDER 인증', '성과 데이터셋'],
        period: '한 학기' },
      { name: '실적+KPI 완성', target: '본부 보고용', featured: true,
        desc: 'AI 관련 실적과 KPI 보고서를 함께 완성합니다.',
        features: ['수상·등재 실적', 'KPI 자동 집계', '본부 보고 패키지', 'SELLER 인증'],
        period: '한 학기' },
      { name: 'AI중심대학 만들기', target: '본선 도전 대학',
        desc: '70 → 7 선정 과정을 함께 설계·실행합니다.',
        features: ['선정 전략 설계', '인프라 구축', '심사 대응'],
        period: '연 단위' }
    ]
  }
};

function Targets({ activeTab, setActiveTab }) {
  const tab = TARGETS[activeTab];
  return (
    <section className="section-light" id="targets">
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div className="reveal">
          <span className="eyebrow">대상별 안내</span>
          <h2 style={{ marginTop: '0.7rem' }}>귀 기관에 무엇이 가능한가요?</h2>
        </div>

        <div className="tab-nav">
          {Object.keys(TARGETS).map((t) => (
            <button
              key={t}
              className={`tab-btn ${activeTab === t ? 'active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="reveal in" key={activeTab}>
          <p className="empathy">"{tab.empathy}"</p>
          <p className="possibility">{tab.possibility}</p>

          <div className={`product-grid cols-${tab.cols}`}>
            {tab.products.map((p, i) => (
              <div className={`product-card ${p.featured ? 'featured' : ''}`} key={i}>
                {p.featured && <span className="pick-badge">가장 많이 선택</span>}
                <div className="product-name">{p.name}</div>
                <div className="product-target">{p.target}</div>
                <p className="product-desc">{p.desc}</p>
                <ul className="product-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="product-period">기간 · {p.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Targets = Targets;
