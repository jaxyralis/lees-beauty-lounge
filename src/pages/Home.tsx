import { ArrowRight, CalendarDays, Check, Scissors, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { benefits, services, WHATSAPP_LINK } from '@/data';

export default function Home() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-content">
          <p className="kicker"><Sparkles size={15} /> Beauty, styled your way</p>
          <h1>Come for the<br /><em>glow.</em> Stay for<br />the confidence.</h1>
          <p className="hero-text">A beauty salon with excellent service and guaranteed results that we provide. Your next signature look starts here.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/services">Explore services <ArrowRight size={17} /></Link>
            <a className="text-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp 067 000 9252 <ArrowRight size={16} /></a>
          </div>
          <div className="hero-note"><span className="note-dot" /> Serving Atteridgeville and surrounds</div>
        </div>

        <div className="hero-visual" aria-label="Lee's Beauty Lounge lookbook">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="image-frame image-main"><img src="./images/image.png" alt="Lee's Beauty Lounge beauty looks" /></div>
          <div className="image-tag"><span>01</span><span>Lookbook</span></div>
          <div className="floating-card"><Scissors size={17} /><span>Wigs<br /><b>& make-up</b></span></div>
        </div>
      </section>

      <section className="promise-strip">
        <div className="section-pad promise-inner">
          <p className="section-label">The Lee’s experience</p>
          <div className="promise-intro">
            <h2>Beautiful looks.<br /><em>Beautifully done.</em></h2>
            <p>We bring the details, the care, and the finishing touch that makes you feel like your best self.</p>
          </div>
          <div className="benefits">
            {benefits.map((benefit, index) => (
              <div className="benefit" key={benefit.title}>
                <span>0{index + 1}</span>
                <Check size={17} />
                <strong>{benefit.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="section-heading">
          <div>
            <p className="section-label">Our services</p>
            <h2>Choose your<br /><em>signature look.</em></h2>
          </div>
          <p className="heading-copy">From a fresh install to a flawless face beat, every appointment is finished with intention.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className={index === 0 ? 'service-card featured-card' : 'service-card'} key={service.category}>
              <div className="card-top">
                <span className="service-number">0{index + 1}</span>
                <span className="service-eyebrow">{service.eyebrow}</span>
              </div>
              <h3>{service.category}</h3>
              <div className="service-list">
                {service.items.map((item) => (
                  <div className="service-row" key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
              <Link className="card-link" to="/services">View details <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
        <div className="booking-banner">
          <div>
            <p className="section-label">Ready when you are</p>
            <h3>Let’s create your next look.</h3>
          </div>
          <a className="button button-pink" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <CalendarDays size={17} /> Book an appointment
          </a>
        </div>
      </section>
    </>
  );
}
