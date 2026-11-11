import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, MessageCircle, Wind, X } from 'lucide-react'
import { Footer, Header, MobileQuoteBar } from './App'

const productImages = [
  { src: '/assets/turbo-ventilator-common-01.jpg', alt: 'Turbo ventilator on its product box, front view' },
  { src: '/assets/turbo-ventilator-common-02.jpg', alt: 'Turbo ventilator on its product box, top view' },
]

const products = [
  '22" Non Magnetic',
  '24" Non Magnetic',
  '24" Magnetic',
  '22" Magnetic',
  '24" Stainless steel Magnetic',
  '21" Magnetic Stainless steel',
  '21" Non Magnetic',
  '21" Aluminium',
  '24" Aluminium',
].map((title, index) => ({
  number: String(index + 1).padStart(2, '0'),
  title,
  description: 'A turbo ventilator variant for industrial and commercial roof ventilation. Confirm material, fit, and current specifications with Alliance for your site.',
}))

function whatsappLinkFor(productName: string) {
  const message = `Hi Alliance Roofing Solutions, I'm interested in ${productName}. Please share the product details and pricing.`
  return `https://wa.me/919996871086?text=${encodeURIComponent(message)}`
}

function ProductsHero() {
  return (
    <section className="products-page-hero">
      <div className="page-container products-page-hero__inner mx-auto">
        <div>
          <span className="eyebrow"><i aria-hidden="true" />Alliance product catalogue</span>
          <h1>Products for<br /><em>better airflow.</em></h1>
          <p>Explore our turbo ventilator range. Select a product to learn more, or enquire directly on WhatsApp.</p>
          <a className="button" href="#product-catalogue">Explore products <ArrowRight size={17} /></a>
        </div>
        <div className="products-page-hero__image">
          <img src="/assets/turbo-ventilator-range.jpg" alt="Range of stainless steel turbo ventilators" fetchPriority="high" />
          <span><Wind size={15} /> Natural ventilation</span>
          <b>PRODUCT / 01</b>
        </div>
      </div>
    </section>
  )
}

type Product = (typeof products)[number]

function ProductCard({
  product,
  imageIndex,
  onSelect,
}: {
  product: Product
  imageIndex: number
  onSelect: (product: Product) => void
}) {
  const { number, title } = product
  return (
    <article className="catalogue-card">
      <button
        type="button"
        className="catalogue-card__visual"
        onClick={() => onSelect(product)}
        aria-haspopup="dialog"
        aria-label={`View description for ${title}`}
      >
        <span className="product-image-slider" aria-hidden="true">
          {productImages.map((image, index) => (
            <img
              key={image.src}
              className={index === imageIndex ? 'is-active' : ''}
              src={image.src}
              alt=""
              loading="lazy"
            />
          ))}
        </span>
        <span className="catalogue-card__number">{number} <i /> TURBO VENTILATOR</span>
        <span className="catalogue-card__view">View details <ArrowUpRight size={14} /></span>
      </button>
      <div className="catalogue-card__content">
        <div className="catalogue-card__copy">
          <h2><button type="button" className="catalogue-card__title" onClick={() => onSelect(product)}>{title}</button></h2>
          <p>Turbo ventilator · Ask us for variant details.</p>
        </div>
        <a className="catalogue-card__enquire" href={whatsappLinkFor(title)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${title} on WhatsApp`}>
          Enquire on WhatsApp <MessageCircle size={15} />
        </a>
      </div>
    </article>
  )
}

function ProductDialog({
  product,
  imageIndex,
  onClose,
  onChangeImage,
}: {
  product: Product
  imageIndex: number
  onClose: () => void
  onChangeImage: (index: number) => void
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const keyboardStateRef = useRef({ imageIndex, onClose, onChangeImage })
  keyboardStateRef.current = { imageIndex, onClose, onChangeImage }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      const { imageIndex: currentIndex, onClose: close, onChangeImage: changeImage } = keyboardStateRef.current
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') changeImage((currentIndex + productImages.length - 1) % productImages.length)
      if (event.key === 'ArrowRight') changeImage((currentIndex + 1) % productImages.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const currentImage = productImages[imageIndex]
  return (
    <div className="product-dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="product-dialog" role="dialog" aria-modal="true" aria-labelledby="product-dialog-title">
        <button ref={closeButtonRef} className="product-dialog__close" type="button" onClick={onClose} aria-label="Close product details"><X size={20} /></button>
        <div className="product-dialog__image-wrap">
          <img src={currentImage.src} alt={currentImage.alt} />
          <button className="product-dialog__arrow product-dialog__arrow--prev" type="button" onClick={() => onChangeImage((imageIndex + productImages.length - 1) % productImages.length)} aria-label="Previous product photo"><ChevronLeft size={21} /></button>
          <button className="product-dialog__arrow product-dialog__arrow--next" type="button" onClick={() => onChangeImage((imageIndex + 1) % productImages.length)} aria-label="Next product photo"><ChevronRight size={21} /></button>
          <span className="product-dialog__image-count">0{imageIndex + 1} / 0{productImages.length}</span>
        </div>
        <div className="product-dialog__content">
          <span className="eyebrow"><i aria-hidden="true" />Product {product.number}</span>
          <h2 id="product-dialog-title">{product.title}</h2>
          <p>{product.description}</p>
          <p className="product-dialog__note">Both photos show the shared turbo ventilator product range. Contact us to confirm the selected variant’s material and specifications.</p>
          <a className="button product-dialog__enquire" href={whatsappLinkFor(product.title)} target="_blank" rel="noopener noreferrer">
            Enquire on WhatsApp <MessageCircle size={17} />
          </a>
        </div>
      </section>
    </div>
  )
}

function ProductsCatalogue({
  imageIndex,
  onSelect,
}: {
  imageIndex: number
  onSelect: (product: Product) => void
}) {
  return (
    <section className="products-catalogue section-pad" id="product-catalogue">
      <div className="page-container mx-auto">
        <div className="products-catalogue__heading">
          <div className="section-heading">
            <span className="eyebrow"><i aria-hidden="true" />Our products</span>
            <h2>Find the right fit.</h2>
            <p>Choose a product to see its description and ask us for details about the variant that suits your building.</p>
          </div>
          <span className="catalogue-count"><b>09</b><i /> PRODUCTS</span>
        </div>
        <div className="catalogue-grid">
          {products.map((product) => <ProductCard key={product.number} product={product} imageIndex={imageIndex} onSelect={onSelect} />)}
        </div>
      </div>
    </section>
  )
}

function ProductsCTA() {
  return (
    <section className="products-page-cta">
      <div className="page-container products-page-cta__inner mx-auto">
        <div><span className="eyebrow eyebrow--light"><i aria-hidden="true" />Have a requirement?</span><h2>Let’s talk about<br /><em>your building.</em></h2></div>
        <a className="button button--light" href={whatsappLinkFor('a roofing solution')} target="_blank" rel="noopener noreferrer">Send an enquiry <ArrowRight size={17} /></a>
      </div>
    </section>
  )
}

function ProductsPage() {
  const [imageIndex, setImageIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const closeProductDialog = useCallback(() => setSelectedProduct(null), [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || selectedProduct) return
    const timer = window.setInterval(() => setImageIndex((current) => (current + 1) % productImages.length), 1400)
    return () => window.clearInterval(timer)
  }, [selectedProduct])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="products-page">
        <ProductsHero />
        <ProductsCatalogue imageIndex={imageIndex} onSelect={setSelectedProduct} />
        <ProductsCTA />
      </main>
      <Footer />
      <MobileQuoteBar />
      {selectedProduct && <ProductDialog product={selectedProduct} imageIndex={imageIndex} onClose={closeProductDialog} onChangeImage={setImageIndex} />}
    </>
  )
}

export default ProductsPage
