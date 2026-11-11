import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Factory,
  ShieldCheck,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react'
import { Footer, Header, MobileQuoteBar } from './App'

const principles = [
  {
    number: '01',
    icon: BadgeCheck,
    title: 'Quality',
    text: 'Careful product thinking, grounded in practical use.',
  },
  {
    number: '02',
    icon: Wind,
    title: 'Innovation',
    text: 'Natural airflow made part of the building conversation.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Reliability',
    text: 'Solutions selected with the roof and site in mind.',
  },
  {
    number: '04',
    icon: Zap,
    title: 'Performance',
    text: 'A focus on useful outcomes for working spaces.',
  },
]

function AboutHero() {
  return (
    <section className="about-page-hero">
      <div className="page-container about-page-hero__grid mx-auto">
        <div className="about-page-hero__copy">
          <span className="eyebrow"><i aria-hidden="true" />Who we are</span>
          <h1>Better spaces<br />start <em>above.</em></h1>
          <p>Alliance Roofing Solutions manufactures turbo ventilators and provides practical roofing and ventilation solutions for industrial and commercial buildings.</p>
          <div className="about-page-hero__actions">
            <a className="button" href="/#products">Explore turbo ventilators <ArrowRight size={17} /></a>
            <a className="text-link text-link--dark" href="/#contact">Talk to our team <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-page-hero__marker"><span>ALLIANCE / ROOFING SOLUTIONS</span><span>01 — ABOUT</span></div>
        </div>
        <div className="about-page-hero__visual">
          <img src="/assets/factory-workshop.jpg" alt="Industrial workshop roof structure with natural light" fetchPriority="high" />
          <div className="about-page-hero__visual-note"><span>OUR FOCUS</span><strong>Turbo ventilation<br />for working spaces</strong></div>
          <span className="about-page-hero__visual-index">AIR / 01</span>
        </div>
      </div>
    </section>
  )
}

function AboutIntroduction() {
  return (
    <section className="about-story section-pad">
      <div className="page-container about-story__grid mx-auto">
        <div className="about-story__image">
          <img src="/assets/hero-rooftop-turbine.jpg" alt="Turbo ventilator positioned on a metal industrial roof" loading="lazy" />
          <div className="about-story__image-caption"><span>ROOF-LEVEL THINKING</span><span><Building2 size={16} /> Industrial & commercial</span></div>
        </div>
        <div className="about-story__copy">
          <span className="eyebrow"><i aria-hidden="true" />Our business</span>
          <h2>Practical solutions<br />from the <em>roof up.</em></h2>
          <p>Every building has its own roof, structure and ventilation needs. Alliance focuses on products that support natural air movement while keeping the realities of the site in view.</p>
          <p>Turbo ventilators are at the center of this offering: roof-mounted units designed to help release warm air from enclosed spaces. Product selection and expected performance should always be considered against the building and its conditions.</p>
          <a className="text-link text-link--dark" href="/#applications">See where our solutions fit <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}

function ExecutiveMessage() {
  return (
    <section className="executive-message section-pad" aria-labelledby="executive-message-title">
      <div className="page-container executive-message__grid mx-auto">
        <div className="executive-message__visual">
          <img src="/assets/warehouse-roof.jpg" alt="Illustrative industrial roof with turbo ventilators" loading="lazy" />
          <span className="executive-message__image-tag">A FOCUS ON BETTER AIRFLOW</span>
          <span className="executive-message__image-index">ALLIANCE / 01</span>
        </div>
        <div className="executive-message__copy">
          <span className="eyebrow"><i aria-hidden="true" />Executive message</span>
          <h2 id="executive-message-title">A message from<br /><em>our leadership.</em></h2>
          <span className="executive-message__quote-mark" aria-hidden="true">“</span>
          <blockquote>
            Better ventilation starts with understanding the space. Our focus on turbo ventilators comes from a practical idea: help buildings release trapped heat through natural air movement. We bring that focus to every conversation, with attention to product quality, fit and the needs of the people who work inside.
          </blockquote>
          <div className="executive-message__signature">
            <span aria-hidden="true" />
            <div><strong>Alliance Roofing Solutions</strong><small>Leadership</small></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutPrinciples() {
  return (
    <section className="about-principles section-pad">
      <div className="page-container mx-auto">
        <div className="about-principles__heading">
          <div>
            <span className="eyebrow eyebrow--light"><i aria-hidden="true" />What guides us</span>
            <h2>Built on clear<br /><em>principles.</em></h2>
          </div>
          <p>Quality, innovation, reliability and performance shape the way we think about roofing and ventilation solutions.</p>
        </div>
        <div className="about-principles__grid">
          {principles.map(({ number, icon: Icon, title, text }) => (
            <article className="about-principle" key={title}>
              <div className="about-principle__top"><Icon size={22} strokeWidth={1.7} /><span>{number}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="about-principle__line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductFocus() {
  return (
    <section className="about-product section-pad">
      <div className="page-container about-product__grid mx-auto">
        <div className="about-product__copy">
          <span className="eyebrow"><i aria-hidden="true" />Product focus</span>
          <h2>Turbo ventilators,<br /><em>made for airflow.</em></h2>
          <p>Alliance’s manufacturing focus is on turbo ventilators: a passive roof ventilation option that uses natural air movement to help exhaust warm air.</p>
          <ul>
            <li><Check size={16} /> Supports natural air movement</li>
            <li><Check size={16} /> Helps release trapped heat</li>
            <li><Check size={16} /> Considered for industrial roof applications</li>
          </ul>
          <p className="about-product__fine">Suitability depends on product specification, roof design and site conditions.</p>
          <a className="button" href="/#products">View product details <ArrowRight size={17} /></a>
        </div>
        <div className="about-product__visual">
          <img src="/assets/turbo-ventilator-product.jpg" alt="Stainless steel turbo ventilator on a blue industrial roof" loading="lazy" />
          <span className="about-product__image-label"><Wind size={16} /> NATURAL VENTILATION</span>
          <span className="about-product__image-number">PRODUCT / 01</span>
        </div>
      </div>
    </section>
  )
}

function AboutApproach() {
  const steps = [
    { icon: Factory, title: 'Start with the space', text: 'Roof type, building use and site conditions all matter.' },
    { icon: Wrench, title: 'Keep fit in focus', text: 'Product choices should align with the roof and project needs.' },
    { icon: Wind, title: 'Plan for airflow', text: 'Natural ventilation works as part of a broader building approach.' },
  ]

  return (
    <section className="about-approach section-pad">
      <div className="page-container mx-auto">
        <div className="about-approach__heading">
          <span className="eyebrow"><i aria-hidden="true" />A considered approach</span>
          <h2>Start with the building.<br /><em>Then shape the solution.</em></h2>
        </div>
        <div className="about-approach__grid">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article className="approach-card" key={title}>
              <span className="approach-card__number">0{index + 1}</span>
              <span className="approach-card__icon"><Icon size={22} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="approach-card__rule" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="page-container about-cta__inner mx-auto">
        <div><span className="eyebrow eyebrow--light"><i aria-hidden="true" />Let’s talk</span><h2>Let’s find the right<br /><em>way forward.</em></h2></div>
        <div className="about-cta__action"><p>Tell us about your building and ventilation requirements.</p><a className="button button--light" href="/#contact">Start an enquiry <ArrowUpRight size={17} /></a></div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="about-page">
        <AboutHero />
        <AboutIntroduction />
        <ExecutiveMessage />
        <AboutPrinciples />
        <ProductFocus />
        <AboutApproach />
        <AboutCTA />
      </main>
      <Footer />
      <MobileQuoteBar />
    </>
  )
}

export default AboutPage
