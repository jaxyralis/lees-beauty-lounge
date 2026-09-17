import { ArrowRight, CalendarDays, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, WHATSAPP_LINK } from '@/data';
import { PageHeader } from '@/components/PageHeader';

export default function Services() {
  return (
    <>
      <PageHeader label="What we offer" title="Our" accent="services." />

      <section className="section-pad services-detail-section">
        {services.map((service, index) => (
          <div className={index % 2 === 0 ? 'service-block' : 'service-block reversed'} key={service.category}>
            <div className="service-block-intro">
              <span className="service-number">0{index + 1}</span>
              <p className="section-label">{service.eyebrow}</p>
              <h2>{service.category}</h2>
              <p className="service-block-desc">{service.description}</p>
            </div>
            <div className="service-block-items">
              {service.items.map((item) => (
                <div className="service-detail-row" key={item.name}>
                  <div className="service-detail-info">
                    <h4>{item.name}</h4>
                    <p>{item.detail}</p>
                  </div>
                  <div className="service-detail-price">
                    <span>{item.price}</span>
                    <Check size={16} />
                  </div>
                </div>
              ))}
              <a className="card-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Book this service <ArrowRight size={15} />
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="section-pad booking-cta-section">
        <div className="booking-cta">
          <div>
            <p className="section-label">Ready when you are</p>
            <h3>Book your<br /><em>appointment today.</em></h3>
            <p className="booking-cta-copy">Send us a WhatsApp message and we will find a time that works for you.</p>
          </div>
          <a className="button button-pink" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <CalendarDays size={17} /> Book now
          </a>
        </div>
        <div className="back-link">
          <Link to="/">← Back to home</Link>
        </div>
      </section>
    </>
  );
}
