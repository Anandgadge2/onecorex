import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PremiumLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const PremiumLightbox = ({ isOpen, onClose, imageSrc, imageAlt }: PremiumLightboxProps) => {
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [imageOrientation, setImageOrientation] = useState<'landscape' | 'portrait' | 'square'>('landscape');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Load image to get dimensions
      const img = new Image();
      img.onload = () => {
        const dimensions = { width: img.width, height: img.height };
        setImageDimensions(dimensions);
        
        // Determine orientation
        if (img.width > img.height * 1.2) {
          setImageOrientation('landscape');
        } else if (img.height > img.width * 1.2) {
          setImageOrientation('portrait');
        } else {
          setImageOrientation('square');
        }
      };
      img.src = imageSrc;
    } else {
      document.body.style.overflow = 'unset';
      setImageDimensions(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, imageSrc]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const getLightboxContentClass = () => {
    if (!imageDimensions) return 'premium-lightbox-content';
    return `premium-lightbox-content ${imageOrientation}-lightbox`;
  };

  const getLightboxStyle = () => {
    if (!imageDimensions) return {};
    
    // For desktop, we want to ensure the box fits the image exactly
    return {
      aspectRatio: `${imageDimensions.width} / ${imageDimensions.height}`,
    };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="premium-lightbox-overlay"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className={getLightboxContentClass()}
              style={getLightboxStyle()}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="premium-lightbox-image"
              />
              <motion.button
                onClick={onClose}
                className="premium-lightbox-close"
                aria-label="Close lightbox"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

