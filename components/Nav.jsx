export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-mark">PAIAX</span>
          <span className="nav-brand-sub">PRACTICAL AI ASSOCIATION</span>
        </a>
        <div className="nav-menu">
          <a href="#possible">무엇이 가능한가</a>
          <a href="#results">실제 결과물</a>
          <a href="#targets">대상별 안내</a>
          <a href="#cert">AX 인증</a>
        </div>
        <a href="#cta" className="nav-cta">귀 기관에 무엇이 가능한지 확인하기</a>
      </div>
    </nav>
  )
}
