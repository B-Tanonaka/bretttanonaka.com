import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Image } from '../../interfaces';

export default function ImageModal({
  images,
  index,
  setIndex,
}: {
  images: Image[],
  index: number | null,
  setIndex: Dispatch<SetStateAction<number | null>>
}) {
  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev !== null && images.length > 0
      ? (prev - 1 + images.length) % images.length
      : null));
  }, [images.length, setIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev !== null && images.length > 0
      ? (prev + 1) % images.length
      : null));
  }, [images.length, setIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, index, setIndex]);

  if (index === null || !images[index]) return null;

  return (
    <div className="image-modal-overlay" onClick={() => setIndex(null)}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button type="button" className="modal-arrow left" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
        )}

        <img src={images[index].src} alt={images[index].alt} />

        {images.length > 1 && (
          <button type="button" className="modal-arrow right" onClick={handleNext}>
            <FaChevronRight />
          </button>
        )}

        <button type="button" className="image-modal-close" onClick={() => setIndex(null)}>
          &times;
        </button>
      </div>
    </div>
  );
}
