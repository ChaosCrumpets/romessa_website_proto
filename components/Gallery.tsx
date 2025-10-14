
import React, { useState, useCallback } from 'react';
import { GALLERY_IMAGES } from '../constants';
import AnimatedSection from './AnimatedSection';
import Lightbox from './Lightbox';
import type { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <AnimatedSection id="gallery" className="py-24 bg-white/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-pmu-text">Portfolio</h2>
            <div className="w-24 h-1 bg-pmu-accent-gold mx-auto mt-4"></div>
          </div>
          <div className="columns-2 md:columns-3 gap-4">
            {GALLERY_IMAGES.map((image) => (
              <div key={image.id} className="mb-4 break-inside-avoid cursor-pointer group overflow-hidden" onClick={() => openLightbox(image)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      {selectedImage && <Lightbox image={selectedImage} onClose={closeLightbox} />}
    </>
  );
};

export default Gallery;