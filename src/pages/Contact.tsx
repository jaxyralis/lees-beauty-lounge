import { Clock3, Instagram, MapPin, Phone } from 'lucide-react';
import { PHONE_DISPLAY, WHATSAPP_LINK } from '@/data';
import { PageHeader } from '@/components/PageHeader';

export default function Contact() {
  return (
    <>
      <PageHeader label="Get in touch" title="Contact" accent="the lounge." />

      <section className="contact-section">
        <div className="section-pad contact-grid">
          <div>
            <p className="section-label">Visit the lounge</p>
            <h2>Your beauty<br /><em>moment awaits.</em></h2>
            <p className="contact-copy">
              Send us a WhatsApp message to secure your appointment. We can't wait to welcome you.
            </p>
            <a className="button button-light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Phone size={17} /> WhatsApp {PHONE_DISPLAY}
            </a>
          </div>
          <div className="contact-details">
            <div className="detail">
              <span className="detail-icon"><MapPin size={18} /></span>
              <div>
                <small>Find us</small>
                <p>58 3rd Avenue Extension 7<br />Atteridgeville, 0008</p>
              </div>
            </div>
            <div className="detail">
              <span className="detail-icon"><Instagram size={18} /></span>
              <div>
                <small>Follow the looks</small>
                <a href="https://instagram.com/lee'sbeautylounge" target="_blank" rel="noreferrer">@lee'sbeautylounge</a>
              </div>
            </div>
            <div className="detail">
              <span className="detail-icon"><Clock3 size={18} /></span>
              <div>
                <small>Appointments</small>
                <p>By booking only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad contact-extra">
        <div className="contact-extra-card">
          <p className="section-label">Prefer to chat first?</p>
          <h3>Send us a message on WhatsApp.</h3>
          <p className="contact-extra-copy">
            Tap the button below and a pre-filled message will open in WhatsApp — just hit send and
            we will get back to you to confirm your slot.
          </p>
          <a className="button button-dark" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Phone size={17} /> Open WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
