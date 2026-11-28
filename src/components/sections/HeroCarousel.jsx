import { useEffect, useRef, useState } from 'react'
import { useEnquiryDialog } from '../ui/EnquiryDialogContext'
import { heroSlides } from '../../data/heroSlides'
import './HeroCarousel.css'

const AUTO_ADVANCE_INTERVAL = 4000

function HeroCarousel({ activeIndex, onActiveIndexChange }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))
  const touchStartX = useRef(null)
  const { isOpen, openEnquiry } = useEnquiryDialog()

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches)
    motionPreference.addEventListener('change', updateMotionPreference)
    return () => motionPreference.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isHovered || isFocused || isTouching || isOpen) return undefined

    const intervalId = window.setInterval(() => {
      onActiveIndexChange((index) => (index + 1) % heroSlides.length)
    }, AUTO_ADVANCE_INTERVAL)

    return () => window.clearInterval(intervalId)
  }, [isFocused, isHovered, isOpen, isTouching, onActiveIndexChange, prefersReducedMotion])

  const goToSlide = (index) => {
    onActiveIndexChange(((index % heroSlides.length) + heroSlides.length) % heroSlides.length)
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX
    setIsTouching(true)
  }

  const handleTouchEnd = (event) => {
    const startX = touchStartX.current
    const endX = event.changedTouches[0].clientX
    touchStartX.current = null
    setIsTouching(false)

    if (startX === null || Math.abs(endX - startX) < 40) return
    goToSlide((activeIndex + (endX < startX ? 1 : -1) + heroSlides.length) % heroSlides.length)
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false)
  }

  const handleKnowMore = (event) => {
    const servicesSection = document.getElementById('services')
    if (!servicesSection) return

    event.preventDefault()
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const headerHeight = document.querySelector('.main-header')?.getBoundingClientRect().height || 0
        const top = servicesSection.getBoundingClientRect().top + window.scrollY - headerHeight
        window.scrollTo({
          top,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        })
      })
    })
  }

  return (
    <section
      className="kra-hero"
      id="home-carousel"
      aria-label="Featured tax and compliance services"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => setIsTouching(false)}
    >
      <div
        className="kra-hero__track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        aria-live="off"
      >
        {heroSlides.map((slide, index) => (
          <article
            className="kra-hero__slide"
            key={slide.label}
            aria-label={`${index + 1} of ${heroSlides.length}`}
            aria-hidden={index !== activeIndex}
            aria-roledescription="slide"
            inert={index !== activeIndex}
          >
            <img
              className="kra-hero__image"
              src={`/images/hero/slide-${String(index + 1).padStart(2, '0')}.webp`}
              alt=""
              width="1600"
              height="900"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
            <div className="kra-hero__content">
              <p className="kra-hero__audience">For NGOs, SMEs, startups and business owners</p>
              <span className="kra-hero__label">{slide.label}</span>
              <h2 className="kra-hero__headline">{slide.headline}</h2>
              <p className="kra-hero__line">{slide.line}</p>
              <div className="kra-hero__actions">
                <button
                  className="kra-hero__button kra-hero__button--primary"
                  type="button"
                  onClick={(event) => openEnquiry(slide.enquiry, event.currentTarget)}
                >
                  {slide.button}
                </button>
                <a
                  className="kra-hero__button kra-hero__button--secondary"
                  href="#services"
                  onClick={handleKnowMore}
                >
                  Know more
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        className="kra-hero__arrow kra-hero__arrow--previous"
        type="button"
        aria-label="Previous slide"
        onClick={() => goToSlide(activeIndex - 1)}
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        className="kra-hero__arrow kra-hero__arrow--next"
        type="button"
        aria-label="Next slide"
        onClick={() => goToSlide(activeIndex + 1)}
      >
        <span aria-hidden="true">›</span>
      </button>
      <div className="kra-hero__dots" aria-label="Choose a slide">
        {heroSlides.map((slide, index) => (
          <button
            className={`kra-hero__dot${index === activeIndex ? ' kra-hero__dot--active' : ''}`}
            key={slide.label}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
