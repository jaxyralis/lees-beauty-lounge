import { Check, Scissors, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { benefits } from '@/data';
import { PageHeader } from '@/components/PageHeader';

const values = [
  { icon: Sparkles, title: 'Craft first', text: 'Every wig and face beat is treated as a craft. We take our time so the finish is always clean.' },
  { icon: Heart, title: 'Client comfort', text: 'A calm, welcoming space where you can relax and trust the process from start to finish.' },
  { icon: Scissors, title: 'Personal style', text: 'Your look is tailored to you — your face, your skin tone, your lifestyle, your vibe.' },
];

export default function About() {
  return (
    <>
      <PageHeader label="Our story" title="About" accent="Lee's Beauty Lounge." />

      <section className="section-pad about-section">
        <div className="about-intro">
          <p className="section-label">Who we are</p>
          <h2>Beauty is in<br /><em>the details.</em></h2>
          <p className="about-copy">
            Lee's Beauty Lounge is a beauty salon based in Atteridgeville, specialising in wig
            installation, customisation, treatments and make-up services. We believe a great look
            starts with great care — so every appointment is unhurried, personal and finished with
            intention.
          </p>
          <p className="about-copy">
            Whether you are coming for a fresh install, a full face beat, or a touch of everyday
            glam, the goal is always the same: a finished look you feel confident in.
          </p>
        </div>

        <div className="about-image">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="image-frame image-main"><img src="./images/image.png" alt="Lee's Beauty Lounge beauty looks" /></div>
          <div className="floating-card"><Scissors size={17} /><span>Wigs<br /><b>& make-up</b></span></div>
        </div>
      </section>

      <section className="promise-strip">
        <div className="section-pad promise-inner">
          <p className="section-label">What you can expect</p>
          <div className="promise-intro">
            <h2>Our<br /><em>promise.</em></h2>
            <p>Three things we bring to every appointment, every time.</p>
          </div>
          <div className="benefits">
            {benefits.map((benefit, index) => (
              <div className="benefit benefit-detailed" key={benefit.title}>
                <div className="benefit-head">
                  <span>0{index + 1}</span>
                  <Check size={17} />
                  <strong>{benefit.title}</strong>
                </div>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad values-section">
        <div className="section-heading">
          <div>
            <p className="section-label">What drives us</p>
            <h2>Our<br /><em>values.</em></h2>
          </div>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.title}>
              <span className="value-icon"><value.icon size={20} /></span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
        <div className="back-link">
          <Link to="/">← Back to home</Link>
        </div>
      </section>
    </>
  );
}
