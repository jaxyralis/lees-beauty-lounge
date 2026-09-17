export const WHATSAPP_LINK =
  'https://wa.me/27670009252?text=' +
  encodeURIComponent("Hi Lee's Beauty Lounge, I'd like to book an appointment.");

export const PHONE_DISPLAY = '067 000 9252';

export const services = [
  {
    category: 'Wigs',
    eyebrow: 'Hair artistry',
    description: 'From installation to customisation, every wig is treated as a personal canvas — washed, styled, and fitted to suit your face and your life.',
    items: [
      { name: 'Wig installation', price: 'R250', detail: 'Professional fitting and secure placement.' },
      { name: 'Customisation', price: 'R100', detail: 'Tailored to your hairline and preference.' },
      { name: 'Install + styling', price: 'R300', detail: 'Full install with a styled finish.' },
      { name: 'Wig treatment', price: 'R200', detail: 'Deep cleanse, condition and refresh.' },
    ],
  },
  {
    category: 'Make-up',
    eyebrow: 'Your signature beat',
    description: 'Whether it is a full glam moment or a soft everyday glow, each face beat is blended, set, and finished to last.',
    items: [
      { name: 'Full face beat', price: 'R350', detail: 'Complete glam look with lashes.' },
      { name: 'Light face beat', price: 'R250', detail: 'Natural, soft-glam finish.' },
    ],
  },
];

export const benefits = [
  { title: 'Excellent service', text: 'Every appointment is handled with care, patience and attention to detail — no rushing, no cutting corners.' },
  { title: 'Guaranteed results', text: 'A finished look you will love, backed by a touch-up if anything is not quite right.' },
  { title: 'A look made for you', text: 'Your style, your face, your skin tone — everything is tailored to bring out your best.' },
];

export const galleryItems = [
  { label: 'Wig install', tag: 'Hair' },
  { label: 'Full face beat', tag: 'Make-up' },
  { label: 'Custom wig', tag: 'Hair' },
  { label: 'Light glam', tag: 'Make-up' },
];
