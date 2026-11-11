import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Factory,
  Menu,
  MapPin,
  Settings2,
  ShieldCheck,
  ThermometerSun,
  Warehouse,
  Wind,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const socialLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=61596104610529',
  instagram: 'https://www.instagram.com/allianceroofingsolutions/',
}

const businessAddress = 'No. 7, KH. No. 143, Ground Floor, House No. 395 Street, Kanjhawala Industrial Area, Delhi, 110081'
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(businessAddress)}&output=embed`
const whatsappQuoteUrl = `https://wa.me/919996871086?text=${encodeURIComponent('Hi Alliance Roofing Solutions, I would like to get a quote. Please contact me.')}`

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About us', href: '/about.html' },
  { label: 'Products', href: '/products.html' },
  { label: 'Applications', href: '/#applications' },
  { label: 'Our work', href: '/#our-work' },
  { label: 'Contact', href: '/#contact' },
]

const benefits = [
  {
    icon: Wind,
    title: 'Better ventilation',
    description: 'Support the movement of warm air out through the roof.',
  },
  {
    icon: ShieldCheck,
    title: 'Long-lasting performance',
    description: 'A durable roof-mounted solution for everyday use.',
  },
  {
    icon: Zap,
    title: 'Energy conscious',
    description: 'Passive operation can reduce reliance on powered exhaust.',
  },
  {
    icon: Settings2,
    title: 'Low maintenance',
    description: 'A straightforward product designed for periodic inspection.',
  },
  {
    icon: ThermometerSun,
    title: 'Improved comfort',
    description: 'Help release trapped heat from busy indoor spaces.',
  },
  {
    icon: Building2,
    title: 'Roofing solutions',
    description: 'A focused offering for industrial and commercial buildings.',
  },
]

const applications = [
  {
    title: 'Industrial factories',
    description: 'Roof ventilation for large workspaces.',
    image: '/assets/hero-rooftop-turbine.jpg',
    alt: 'Stainless steel turbine ventilator on a metal factory roof',
    icon: Factory,
    className: 'application-card--factory',
  },
  {
    title: 'Manufacturing units',
    description: 'Air movement for high-ceiling production halls.',
    image: '/assets/factory-workshop.jpg',
    alt: 'Bright manufacturing workshop beneath a high metal roof',
    icon: Building2,
    className: 'application-card--workshop',
  },
  {
    title: 'Warehouses & sheds',
    description: 'Natural ventilation for broad roof spans.',
    image: '/assets/warehouse-roof.jpg',
    alt: 'Large warehouse with several rooftop ventilators',
    icon: Warehouse,
    className: 'application-card--warehouse',
  },
]

const heroSlides = [
  {
    image: '/assets/hero-rooftop-turbine.jpg',
    alt: 'Turbo ventilator installed on a modern industrial metal roof',
    topline: 'Roof-level airflow, thoughtfully designed',
    label: 'PRODUCT FOCUS',
    title: 'Turbo ventilators',
    description: 'Explore natural ventilation solutions for industrial and commercial buildings.',
    href: '#products',
  },
  {
    image: '/assets/factory-workshop.jpg',
    alt: 'High-ceiling industrial workshop with a metal roof structure',
    topline: 'Ventilation for busy workspaces',
    label: 'INDUSTRIAL SPACES',
    title: 'Factory roofing',
    description: 'Practical roofing and ventilation options for active workspaces.',
    href: '#applications',
  },
  {
    image: '/assets/warehouse-roof.jpg',
    alt: 'Large warehouse roof fitted with turbo ventilators',
    topline: 'Practical solutions for broad roof spans',
    label: 'APPLICATIONS',
    title: 'Warehouses & sheds',
    description: 'Discover ventilation options for warehouses and broad-span sheds.',
    href: '#applications',
  },
]

const questions = [
  {
    question: 'What is a turbo ventilator?',
    answer:
      'A turbo ventilator is a roof-mounted device that uses wind and natural air movement to help exhaust warm air from inside a building.',
  },
  {
    question: 'How does a turbo ventilator work?',
    answer:
      'Wind turns the turbine head while warmer air can rise through the roof opening. The actual airflow depends on the building, weather and ventilation design.',
  },
  {
    question: 'What are the advantages of installing one?',
    answer:
      'A suitably planned installation can support air exchange and heat removal without a motor driving the turbine. Results vary with site conditions and product selection.',
  },
  {
    question: 'Can turbo ventilators be used on industrial roofs?',
    answer:
      'They are commonly considered for industrial and commercial roof applications. Roof profile, structure, weatherproofing and site requirements should be checked before selection.',
  },
  {
    question: 'Do turbo ventilators require electricity?',
    answer:
      'A passive turbo ventilator does not use an electric motor to rotate. Any separate powered equipment at a site would be assessed independently.',
  },
  {
    question: 'How much maintenance is needed?',
    answer:
      'Plan periodic checks of the moving parts, fixings and roof weatherproofing. Inspection intervals depend on the product specification and site conditions.',
  },
  {
    question: 'How can I enquire about product pricing?',
    answer:
      'Tap Get a quote to message Alliance Roofing Solutions on WhatsApp, or use the map below to find our Kanjhawala Industrial Area location.',
  },
]

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand-logo${footer ? ' brand-logo--footer' : ''}`} href="/" aria-label="Alliance Roofing Solutions home">
      <img src="/assets/alliance-roofing-solutions-logo.png" alt="Alliance Roofing Solutions" />
    </a>
  )
}

function SocialIcon({ network }: { network: 'facebook' | 'instagram' }) {
  if (network === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M13.7 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.5v3.2h2.8V21h3.4Z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.8" cy="6.4" r="1.15" fill="currentColor" />
    </svg>
  )
}

function SocialLink({ network, label }: { network: 'facebook' | 'instagram'; label: string }) {
  return (
    <a className="social-link" href={socialLinks[network]} target="_blank" rel="noopener noreferrer" aria-label={`Visit Alliance Roofing Solutions on ${label}`}>
      <SocialIcon network={network} />
    </a>
  )
}

function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="page-container utility-bar__inner mx-auto">
        <p>Welcome to Alliance Roofing Solutions</p>
        <div className="utility-bar__socials">
          <span>Follow us on</span>
          <SocialLink network="facebook" label="Facebook" />
          <SocialLink network="instagram" label="Instagram" />
        </div>
      </div>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <span className="eyebrow"><i aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isAboutPage = window.location.pathname.endsWith('/about.html')
  const isProductsPage = window.location.pathname.endsWith('/products.html')

  return (
    <>
      <UtilityBar />
      <header className="site-header">
        <div className="header-inner page-container mx-auto">
          <BrandLogo />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' primary-navigation--open' : ''}`} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={
                  (isAboutPage && link.label === 'About us') ||
                  (isProductsPage && link.label === 'Products') ||
                  (!isAboutPage && !isProductsPage && link.label === 'Home')
                    ? 'page'
                    : undefined
                }
                onClick={() => setMenuOpen(false)}
              >{link.label}</a>
            ))}
          </nav>
          <a className="button button--header" href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">Get a quote <ArrowUpRight size={16} /></a>
        </div>
      </header>
    </>
  )
}

function FullWidthSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slide = heroSlides[activeSlide]

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [isPaused])

  const showPreviousSlide = () => setActiveSlide((current) => (current + heroSlides.length - 1) % heroSlides.length)
  const showNextSlide = () => setActiveSlide((current) => (current + 1) % heroSlides.length)

  return (
    <section
      className="home-banner-slider"
      role="region"
      aria-label="Featured Alliance Roofing Solutions"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) setIsPaused(false) }}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.matches(':hover') && !event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false)
      }}
    >
      <div className="home-banner-slider__slides" aria-live="off">
        {heroSlides.map((item, index) => (
          <img
            key={item.image}
            className={index === activeSlide ? 'is-active' : ''}
            src={item.image}
            alt={index === activeSlide ? item.alt : ''}
            aria-hidden={index !== activeSlide}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="home-banner-slider__copy page-container mx-auto">
        <span className="eyebrow eyebrow--light"><i aria-hidden="true" />{slide.label}</span>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <a className="button" href={slide.href}>Explore {slide.title} <ArrowRight size={17} /></a>
      </div>
      <span className="home-banner-slider__count">{String(activeSlide + 1).padStart(2, '0')} <i /> {String(heroSlides.length).padStart(2, '0')}</span>
      <button className="home-banner-slider__arrow home-banner-slider__arrow--previous" type="button" onClick={showPreviousSlide} aria-label="Previous banner slide"><ChevronLeft size={22} /></button>
      <button className="home-banner-slider__arrow home-banner-slider__arrow--next" type="button" onClick={showNextSlide} aria-label="Next banner slide"><ChevronRight size={22} /></button>
      <div className="home-banner-slider__dots" aria-label="Choose a banner slide">
        {heroSlides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === activeSlide ? 'is-active' : ''}
            aria-label={`Go to slide ${index + 1}: ${item.title}`}
            aria-pressed={index === activeSlide}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slide = heroSlides[activeSlide]

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [isPaused])

  const showPreviousSlide = () => setActiveSlide((current) => (current + heroSlides.length - 1) % heroSlides.length)
  const showNextSlide = () => setActiveSlide((current) => (current + 1) % heroSlides.length)

  return (
    <section className="hero" id="home">
      <div className="hero-grid page-container mx-auto">
        <div className="hero-copy">
          <span className="eyebrow"><i aria-hidden="true" />Turbo ventilator manufacturer</span>
          <h1>Smarter roofing.<br /><span>Better ventilation.</span></h1>
          <p className="hero-lede">Advanced turbo ventilation solutions for healthier, cooler and more comfortable spaces.</p>
          <p className="hero-description">Practical roofing and ventilation products designed to help improve airflow and support lasting performance across industrial and commercial buildings.</p>
          <div className="hero-actions">
            <a className="button" href="#products">Explore our products <ArrowRight size={17} /></a>
            <a className="text-link" href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">Get a quote <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-notes">
            <span><Check size={15} /> Natural ventilation</span>
            <span><Check size={15} /> Industrial & commercial</span>
          </div>
        </div>
        <div
          className="hero-visual"
          role="region"
          aria-label="Featured roofing solutions"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) setIsPaused(false) }}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.matches(':hover') && !event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false)
          }}
        >
          <div className="hero-visual__slides" aria-live="off">
            {heroSlides.map((item, index) => (
              <img
                key={item.image}
                className={index === activeSlide ? 'is-active' : ''}
                src={item.image}
                alt={index === activeSlide ? item.alt : ''}
                aria-hidden={index !== activeSlide}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            ))}
          </div>
          <div className="hero-visual__topline"><span className="live-dot" /> {slide.topline}</div>
          <div className="hero-visual__caption">
            <div><span>{slide.label}</span><strong>{slide.title}</strong></div>
            <a href={slide.href} aria-label={`Explore ${slide.title}`}><ArrowUpRight size={19} /></a>
          </div>
          <div className="hero-visual__index">{String(activeSlide + 1).padStart(2, '0')} <span>/</span> {String(heroSlides.length).padStart(2, '0')}</div>
          <button className="hero-slider-arrow hero-slider-arrow--previous" type="button" onClick={showPreviousSlide} aria-label="Previous hero slide"><ChevronLeft size={19} /></button>
          <button className="hero-slider-arrow hero-slider-arrow--next" type="button" onClick={showNextSlide} aria-label="Next hero slide"><ChevronRight size={19} /></button>
          <div className="hero-slider-dots" aria-label="Choose a hero slide">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === activeSlide ? 'is-active' : ''}
                aria-label={`Go to slide ${index + 1}: ${item.title}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hero-rule" aria-hidden="true"><span /></div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-grid page-container mx-auto">
        <div className="about-visual">
          <img src="/assets/factory-workshop.jpg" alt="High-ceiling industrial workshop with a metal roof structure" loading="lazy" />
          <div className="about-visual__label"><span>01</span><span>Roofing & ventilation</span></div>
          <span className="about-visual__outline" aria-hidden="true" />
        </div>
        <div className="about-copy">
          <span className="eyebrow"><i aria-hidden="true" />About Alliance</span>
          <h2>Engineering better<br /><em>roofing solutions.</em></h2>
          <p>Alliance Roofing Solutions manufactures turbo ventilators and provides practical roofing and ventilation solutions for industrial and commercial spaces. Its products are designed to support natural air movement through the roof.</p>
          <p>Clear product guidance, considered design and dependable performance shape the way we approach every enquiry.</p>
          <a className="text-link text-link--dark" href="/about.html">Know more about us <ArrowRight size={17} /></a>
          <div className="about-signoff"><span className="about-signoff__line" /><span>Comfort begins above.</span></div>
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section className="products section-pad" id="products">
      <div className="page-container mx-auto">
        <div className="products-heading-row">
          <SectionHeading
            eyebrow="Product focus"
            title="Purposeful products. Practical performance."
            description="Our turbo ventilators support natural air movement for industrial and commercial roof applications."
          />
          <span className="section-index">01 <i /> PRODUCT</span>
        </div>
        <article className="product-feature" id="product-details">
          <div className="product-feature__image">
            <img src="/assets/turbo-ventilator-product.jpg" alt="Stainless steel turbo ventilator shown on a metal industrial roof" loading="lazy" />
            <span className="image-tag"><Wind size={15} /> Natural air movement</span>
          </div>
          <div className="product-feature__content">
            <span className="eyebrow"><i aria-hidden="true" />01 / Featured product</span>
            <h3>Turbo<br /><span>Ventilators</span></h3>
            <p>A roof-mounted ventilation solution designed to help move warm air out of enclosed spaces through natural air movement.</p>
            <ul className="product-points">
              <li><Check size={16} /> Supports natural airflow</li>
              <li><Check size={16} /> Helps extract trapped heat</li>
              <li><Check size={16} /> No motor to drive the turbine</li>
              <li><Check size={16} /> Designed for periodic inspection</li>
            </ul>
            <div className="product-feature__actions">
              <a className="button" href="#contact">Enquire now <ArrowRight size={17} /></a>
              <a className="text-link text-link--dark" href="#ventilator-showcase">See how it works <ArrowDownRight size={17} /></a>
            </div>
            <p className="fine-print">Suitability and performance depend on product specification, roof design and site conditions.</p>
          </div>
        </article>
        <div className="product-detail-strip">
          <div><span className="detail-number">01</span><span><strong>Natural operation</strong><small>Wind-assisted airflow through the roofline.</small></span></div>
          <div><span className="detail-number">02</span><span><strong>Industrial context</strong><small>Considered for larger enclosed spaces.</small></span></div>
          <div><span className="detail-number">03</span><span><strong>Site-specific fit</strong><small>Selection should match roof and building needs.</small></span></div>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="benefits section-pad" id="why-alliance">
      <div className="page-container mx-auto">
        <div className="benefits-heading">
          <SectionHeading
            eyebrow="Why Alliance"
            title="A better environment starts with better airflow."
            description="Thoughtful ventilation can support more comfortable spaces and a more considered approach to building performance."
            light
          />
          <span className="benefits-marker">DESIGNED FOR<br />EVERYDAY SPACES <ArrowDownRight size={22} /></span>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-card__top"><Icon size={23} strokeWidth={1.8} /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="benefits-footer"><span className="benefits-footer__line" /><span>Made for the way buildings breathe.</span></div>
      </div>
    </section>
  )
}

function Showcase() {
  return (
    <section className="showcase" id="ventilator-showcase">
      <div className="showcase-inner page-container mx-auto">
        <div className="showcase-copy">
          <span className="eyebrow eyebrow--light"><i aria-hidden="true" />Natural ventilation</span>
          <h2>Let your<br /><em>building breathe.</em></h2>
          <p>Efficient natural ventilation designed to help release trapped heat and support airflow across industrial and commercial spaces.</p>
          <ul className="showcase-points">
            <li><span><Wind size={17} /></span> Wind-assisted movement</li>
            <li><span><ThermometerSun size={17} /></span> Helps release warm air</li>
            <li><span><Wrench size={17} /></span> Planned for roof-level use</li>
          </ul>
          <a className="button button--light" href="#contact">Enquire about turbo ventilators <ArrowRight size={17} /></a>
        </div>
        <div className="showcase-visual">
          <img src="/assets/turbo-ventilator-range.jpg" alt="Several stainless steel turbo ventilators displayed for product reference" loading="lazy" />
          <span className="showcase-visual__note"><BadgeCheck size={16} /> Product imagery supplied by Alliance</span>
          <span className="showcase-visual__stamp">ALLIANCE<br /><b>ROOFING SOLUTIONS</b></span>
        </div>
      </div>
      <div className="showcase-bottom" aria-hidden="true"><span /> ALLIANCE / VENTILATION / 01</div>
    </section>
  )
}

function Applications() {
  return (
    <section className="applications section-pad" id="applications">
      <div className="page-container mx-auto">
        <div className="applications-heading">
          <SectionHeading
            eyebrow="Applications"
            title="Versatile solutions for working spaces."
            description="Turbo ventilation can be considered for a range of large roofed environments. The right setup depends on each building and its conditions."
          />
          <a className="text-link text-link--dark applications-link" href="#contact">Discuss your building <ArrowUpRight size={16} /></a>
        </div>
        <div className="application-grid">
          {applications.map(({ title, description, image, alt, icon: Icon, className }, index) => (
            <article className={`application-card ${className}`} key={title}>
              <img src={image} alt={alt} loading="lazy" />
              <div className="application-card__shade" />
              <div className="application-card__top"><span>0{index + 1} / APPLICATION</span><Icon size={19} /></div>
              <div className="application-card__body"><h3>{title}</h3><p>{description}</p></div>
              <a href="#contact" className="application-card__arrow" aria-label={`Ask about ${title}`}><ArrowUpRight size={19} /></a>
            </article>
          ))}
        </div>
        <p className="image-disclaimer">Application imagery is illustrative. Confirm product and roof suitability for each site.</p>
      </div>
    </section>
  )
}

function OurWork() {
  return (
    <section className="our-work section-pad" id="our-work">
      <div className="page-container mx-auto">
        <SectionHeading
          eyebrow="Our work"
          title="Built around real spaces."
          description="A project portfolio will bring together verified installations, application types and locations as those details become available."
        />
        <div className="work-preview">
          <div className="work-preview__image">
            <img src="/assets/warehouse-roof.jpg" alt="Representative warehouse roof application image, not a project reference" loading="lazy" />
            <span className="work-preview__image-tag">Representative application image</span>
            <span className="work-preview__image-index">A / 01</span>
          </div>
          <div className="work-preview__copy">
            <span className="work-preview__status"><span /> PROJECT GALLERY</span>
            <h3>Verified project stories, coming soon.</h3>
            <p>We’ll add real project photographs and confirmed details here so you can explore the work behind each installation.</p>
            <div className="work-preview__rule" />
            <a className="text-link" href="#contact">Start a conversation <ArrowRight size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Commitment() {
  const values = [
    { icon: BadgeCheck, name: 'Quality', text: 'Care in every detail.' },
    { icon: Wind, name: 'Innovation', text: 'Better ways to move air.' },
    { icon: ShieldCheck, name: 'Reliability', text: 'Solutions you can plan around.' },
    { icon: Zap, name: 'Performance', text: 'Designed for practical impact.' },
  ]

  return (
    <section className="commitment section-pad" id="commitment">
      <div className="page-container commitment-inner mx-auto">
        <div className="commitment-copy">
          <span className="eyebrow"><i aria-hidden="true" />Our commitment</span>
          <h2>Committed to quality.<br /><em>Driven by innovation.</em></h2>
          <p>Roofing and ventilation decisions matter to the people who work beneath them. Our focus is on products that bring durability, comfort and practical performance together.</p>
        </div>
        <div className="commitment-values">
          {values.map(({ icon: Icon, name, text }, index) => (
            <div className="commitment-value" key={name}>
              <span className="commitment-value__icon"><Icon size={21} strokeWidth={1.7} /></span>
              <span className="commitment-value__text"><b>{name}</b><small>{text}</small></span>
              <span className="commitment-value__number">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="faq section-pad" id="faq">
      <div className="page-container faq-grid mx-auto">
        <div className="faq-intro">
          <span className="eyebrow"><i aria-hidden="true" />Good to know</span>
          <h2>Questions about<br /><em>turbo ventilation?</em></h2>
          <p>Here are a few helpful basics. For product selection, confirm the details against your building and the product specification.</p>
          <a className="text-link text-link--dark" href="#contact">Ask us a question <ArrowRight size={17} /></a>
          <div className="faq-art" aria-hidden="true"><Wind size={56} strokeWidth={1} /><span>FRESH AIR<br />STARTS HERE</span></div>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }, index) => (
            <details className="faq-item" key={question} open={index === 0}>
              <summary><span>{question}</span><ChevronDown size={18} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="page-container contact-grid mx-auto">
        <div className="contact-copy">
          <span className="eyebrow eyebrow--light"><i aria-hidden="true" />Let’s talk</span>
          <h2>Looking for better<br /><em>ventilation solutions?</em></h2>
          <p>Connect with Alliance Roofing Solutions to discuss your roofing and ventilation requirements.</p>
          <div className="contact-social">
            <span>Follow Alliance</span>
            <SocialLink network="facebook" label="Facebook" />
            <SocialLink network="instagram" label="Instagram" />
          </div>
          <div className="contact-mark" aria-hidden="true">A<span>R</span>S</div>
        </div>
        <div className="contact-map-wrap">
          <div className="contact-map-heading"><span><MapPin size={15} /> OUR LOCATION</span><a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a></div>
          <iframe
            src={googleMapsEmbedUrl}
            title={`Google Maps location: ${businessAddress}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-container">
        <div className="footer-brand">
          <BrandLogo footer />
          <p>Practical roofing and natural ventilation solutions for industrial and commercial spaces.</p>
          <a className="footer-address" href={googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={16} /><span><b>Visit us</b>{businessAddress}</span></a>
          <div className="footer-socials"><SocialLink network="facebook" label="Facebook" /><SocialLink network="instagram" label="Instagram" /></div>
        </div>
        <div className="footer-column"><h3>Explore</h3>{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        <div className="footer-column"><h3>Product</h3><a href="/products.html">Turbo ventilators</a><a href="/#applications">Applications</a><a href="/#faq">Frequently asked questions</a></div>
        <div className="footer-cta"><span>LET’S MAKE ROOM FOR BETTER AIR</span><h3>Have a building<br />in mind?</h3><a href="/#contact">Start an enquiry <ArrowUpRight size={17} /></a></div>
      </div>
      <div className="footer-bottom page-container">
        <span>© {new Date().getFullYear()} Alliance Roofing Solutions</span>
        <div><a href="/privacy.html">Privacy policy</a><a href="/terms.html">Terms & conditions</a></div>
        <span className="footer-bottom__credit">ROOFING / VENTILATION / PERFORMANCE</span>
      </div>
    </footer>
  )
}

export function MobileQuoteBar() {
  return <a className="mobile-quote-bar" href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">Get a quote <ArrowRight size={17} /></a>
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <FullWidthSlider />
        <Hero />
        <div className="service-ribbon" aria-label="Alliance Roofing Solutions focus areas">
          <div className="page-container service-ribbon__inner"><span>01 <i /> Turbo ventilators</span><span>02 <i /> Natural airflow</span><span>03 <i /> Industrial spaces</span><span className="service-ribbon__note">Built for the roofline <ArrowUpRight size={14} /></span></div>
        </div>
        <About />
        <Products />
        <Benefits />
        <Showcase />
        <Applications />
        <OurWork />
        <Commitment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileQuoteBar />
    </>
  )
}

export default App
