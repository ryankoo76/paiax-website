// PAIAX — app.jsx
// Main app composition

function App() {
  const [activeTab, setActiveTab] = React.useState('개인');
  window.useReveal();

  const onSelectTarget = (t) => {
    setActiveTab(t);
    setTimeout(() => {
      const el = document.getElementById('targets');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <React.Fragment>
      <Nav />
      <Hero onSelectTarget={onSelectTarget} />
      <Stats />
      <Fatigue />
      <Possible />
      <Targets activeTab={activeTab} setActiveTab={setActiveTab} />
      <Certification />
      <Results />
      <Leadership />
      <CTASection />
      <Footer />
      <FloatingCTA />
      <ToastSystem />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
