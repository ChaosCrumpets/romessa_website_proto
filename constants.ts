
import type { NavLink, Service, FaqItem, GalleryImage, ServiceCategory } from './types';

export const NAV_LINKS: NavLink[] = [
  {
    name: 'Services',
    href: '#services',
    subLinks: [
      { name: 'Lash & Brow Artistry', href: 'lash-brow' },
      { name: 'Permanent Makeup (PMU)', href: 'pmu' },
      { name: 'Lip Enhancements', href: 'lips' },
      { name: 'Aesthetics & Spa', href: 'aesthetics' },
    ]
  },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Microblading & Ombré Brows',
    description: 'Achieve flawless, natural-looking brows with hyper-realistic hair strokes or a soft, powdered finish. Perfect for defining your features.',
    price: 'Starting at $550'
  },
  {
    title: 'Lip Blushing',
    description: 'Enhance your natural lip color and shape with a subtle tint. Kiss-proof color that lasts, correcting asymmetry and adding fullness.',
    price: 'Starting at $600'
  },
  {
    title: 'Saline Tattoo Removal',
    description: 'A safe and effective method to lighten or remove old, unwanted permanent makeup. Consultation required.',
    price: 'Quote upon consultation'
  }
];

export const SERVICE_CATEGORIES_DATA: ServiceCategory[] = [
  {
    id: 'lash-brow',
    title: 'Lash & Brow Artistry',
    overview: 'Frame your eyes and elevate your look with our meticulous lash and brow services. From lifts that give you a bright, open-eyed look to perfectly sculpted brows, we use premium products to enhance your natural beauty.',
    images: [
      'https://picsum.photos/seed/lash1/800/600',
      'https://picsum.photos/seed/brow1/800/600',
      'https://picsum.photos/seed/lash2/800/600',
    ],
    services: [
      { title: 'Keratin Lash Lift & Tint', description: 'Give your natural lashes a stunning curl and depth of color that lasts for weeks. No extensions needed.', price: '$120' },
      { title: 'Brow Lamination', description: 'Achieve that full, feathery brow look. This service tames and sets your brow hairs for a perfectly sculpted shape.', price: '$100' },
      { title: 'Brow Shaping & Tint', description: 'Expert shaping combined with a custom-blended tint to define your arches and create a polished look.', price: '$50' },
    ]
  },
  {
    id: 'pmu',
    title: 'Permanent Makeup (PMU)',
    overview: 'Wake up with makeup. Our permanent makeup services are a form of cosmetic tattooing that provides long-lasting, natural-looking results. We specialize in creating bespoke brows that complement your unique facial features.',
    images: [
      'https://picsum.photos/seed/pmu-detail1/800/600',
      'https://picsum.photos/seed/pmu-detail2/800/600',
      'https://picsum.photos/seed/pmu-detail3/800/600',
    ],
    services: [
      { title: 'Microblading', description: 'Hyper-realistic, individual hair strokes are tattooed to create the illusion of fuller, perfectly shaped brows.', price: 'Starting at $550' },
      { title: 'Ombré Powder Brows', description: 'A soft, powdered look that is darker at the tails and lighter at the front, creating a subtle and beautiful definition.', price: 'Starting at $550' },
      { title: 'Combination Brows', description: 'The best of both worlds, combining microblading hair strokes at the front with a powdered finish through the body of the brow.', price: 'Starting at $600' },
      { title: 'Saline Tattoo Removal', description: 'A safe and effective method to lighten or remove old, unwanted permanent makeup. Consultation required.', price: 'Quote upon consultation' },
    ]
  },
  {
    id: 'lips',
    title: 'Lip Enhancements',
    overview: 'Add a beautiful wash of color and definition to your lips with our lip blushing service. We can correct asymmetry, define your cupid\'s bow, and give your lips a fuller, more youthful appearance that lasts.',
    images: [
        'https://picsum.photos/seed/lips1/800/600',
        'https://picsum.photos/seed/lips2/800/600',
        'https://picsum.photos/seed/lips3/800/600',
    ],
    services: [
      { title: 'Lip Blushing', description: 'A semi-permanent tattoo that enhances the natural shape and color of your lips, giving them a boost of vitality and a beautiful tint.', price: 'Starting at $600' },
      { title: 'Lip Neutralization', description: 'For clients with cool or dark-toned lips, this service corrects and lightens the natural lip color to create a perfect base for lip blushing.', price: 'Consultation Required' },
    ]
  },
  {
    id: 'aesthetics',
    title: 'Aesthetics & Spa Services',
    overview: 'Rejuvenate your skin and indulge in self-care with our advanced aesthetic treatments. We focus on results-driven facials and skin therapies to help you achieve a healthy, glowing complexion.',
    images: [
        'https://picsum.photos/seed/spa1/800/600',
        'https://picsum.photos/seed/spa2/800/600',
        'https://picsum.photos/seed/spa3/800/600',
    ],
    services: [
      { title: 'Microneedling (Collagen Induction Therapy)', description: 'A minimally invasive treatment that stimulates collagen production to improve the appearance of fine lines, wrinkles, acne scars, and overall skin texture.', price: '$250 per session' },
      { title: 'Signature Hydrating Facial', description: 'A luxurious facial tailored to your skin\'s needs, focusing on deep hydration, gentle exfoliation, and nourishment.', price: '$150' },
      { title: 'Dermaplaning', description: 'A physical exfoliation method that removes dead skin cells and vellus hair (peach fuzz) for incredibly smooth, radiant skin.', price: '$90' },
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Does it hurt?',
    answer: 'We prioritize your comfort. A highly effective topical numbing cream is applied before and during the procedure to minimize any discomfort. Most clients report feeling little to no pain, often describing the sensation as light scratching.'
  },
  {
    question: 'How long does it last?',
    answer: 'Permanent makeup is designed to be long-lasting but not permanent. It typically lasts 1-3 years, depending on your skin type, lifestyle, and sun exposure. We recommend a color boost appointment every 12-18 months to maintain fresh, vibrant results.'
  },
  {
    question: 'What is the healing process like?',
    answer: 'The initial healing process takes about 7-14 days. During this time, the treated area will appear darker and more defined before it begins to soften and lighten. You will be provided with detailed aftercare instructions to ensure the best possible healed results.'
  },
  {
    question: 'Am I a good candidate?',
    answer: 'While most people are great candidates for permanent makeup, there are some contraindications. This includes being pregnant or nursing, having certain skin conditions on the treatment area, or undergoing chemotherapy. A thorough consultation is required to ensure you are a suitable candidate.'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: 'https://picsum.photos/seed/pmu1/800/1200', alt: 'Before and after microblading', width: 800, height: 1200 },
    { id: 2, src: 'https://picsum.photos/seed/pmu2/800/1000', alt: 'Close up of healed lip blush', width: 800, height: 1000 },
    { id: 3, src: 'https://picsum.photos/seed/pmu3/800/1100', alt: 'Ombré powder brows result', width: 800, height: 1100 },
    { id: 4, src: 'https://picsum.photos/seed/pmu4/800/900', alt: 'Natural looking eyebrow tattoo', width: 800, height: 900 },
    { id: 5, src: 'https://picsum.photos/seed/pmu5/800/1250', alt: 'Lip blushing before and after', width: 800, height: 1250 },
    { id: 6, src: 'https://picsum.photos/seed/pmu6/800/1050', alt: 'Detailed microblading hair strokes', width: 800, height: 1050 },
];
