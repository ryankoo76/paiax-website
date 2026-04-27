'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Fatigue from '@/components/Fatigue'
import Possible from '@/components/Possible'
import Targets from '@/components/Targets'
import Certification from '@/components/Certification'
import Results from '@/components/Results'
import Leadership from '@/components/Leadership'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import ToastSystem from '@/components/ToastSystem'
import { useReveal } from '@/components/hooks/useReveal'

export default function Home() {
  const [activeTab, setActiveTab] = useState('개인')
  useReveal()

  const onSelectTarget = (t) => {
    setActiveTab(t)
    setTimeout(() => {
      const el = document.getElementById('targets')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <>
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
    </>
  )
}
