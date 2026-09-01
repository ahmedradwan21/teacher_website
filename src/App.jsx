import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Levels from './components/Levels'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import NotificationToast from './components/NotificationToast'
import LandingPage from './components/LandingPage'

function App() {
  const [showLanding, setShowLanding] = useState(true)
  const [toast, setToast] = useState(null)

  const showToast = (name, action) => {
    setToast({ name, action, time: 'الآن' })
    setTimeout(() => setToast(null), 4000)
  }

  useEffect(() => {
    if (showLanding) return
    const toasts = [
      { name: 'محمد أ.', action: 'حجز حصة تجريبية جديدة' },
      { name: 'سارة خ.', action: 'اشتركت في الباقة الشهرية' },
      { name: 'أحمد م.', action: 'جاب 18/20 في الامتحان' },
      { name: 'نورا س.', action: 'سألت عن مواعيد الحصص' },
    ]
    const interval = setInterval(() => {
      const random = toasts[Math.floor(Math.random() * toasts.length)]
      showToast(random.name, random.action)
    }, 18000)
    return () => clearInterval(interval)
  }, [showLanding])

  if (showLanding) {
    return <LandingPage onComplete={() => setShowLanding(false)} />
  }

  return (
    <div className="font-arabic" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Levels />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <NotificationToast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}

export default App
