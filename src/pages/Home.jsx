import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CardGrid from '../components/CardGrid'
import Footer from '../components/Footer'
import Benefits from '../components/Benefits'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import CheckoutModal from '../components/CheckoutModal'
import FAQ from '../components/FAQ'

export default function Home() {
  const [checkoutPlan, setCheckoutPlan] = React.useState(null)

  function handleChoosePlan(plan) {
    setCheckoutPlan(plan)
  }

  return (
    <div className="min-h-screen bg-[var(--site-bg)] text-white" style={{ backgroundColor: '#120D23', color: '#ffffff' }}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section id="hero">
          <Hero />
        </section>

        <Benefits />

        <HowItWorks />

        <section id="catalog" className="section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="kicker">Em Destaque</div>
            <h2 className="section-title">Catálogo</h2>
            <CardGrid />
          </div>
        </section>

        <Testimonials />

        <Pricing onChoose={handleChoosePlan} />

        <FAQ />
      </main>

      <Footer />

      <CheckoutModal open={!!checkoutPlan} plan={checkoutPlan} onClose={() => setCheckoutPlan(null)} />
    </div>
  )
}
