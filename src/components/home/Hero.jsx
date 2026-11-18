import heroImg from '../../assets/hero.png'
import Button from '../ui/Button'

function Hero() {
  return (
    <section className="hero-section">
      <div>
        <p className="eyebrow">Strategy. Technology. Results.</p>
        <h1>Build a stronger path forward.</h1>
        <p>We help organizations turn complex challenges into clear, actionable growth.</p>
        <div className="hero-actions">
          <Button href="#/contact">Start a conversation</Button>
          <Button href="#/services" variant="secondary">Explore services</Button>
        </div>
      </div>
      <img src={heroImg} alt="Nexustrio Consulting team" />
    </section>
  )
}

export default Hero
