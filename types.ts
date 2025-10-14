
export interface NavLink {
  name: string;
  href: string;
  subLinks?: NavLink[];
}

export interface Service {
  title: string;
  description: string;
  price: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ServiceCategory {
    id: string;
    title: string;
    overview: string;
    images: string[];
    services: Service[];
}
