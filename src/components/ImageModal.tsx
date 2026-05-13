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
    const len = images?.length || 0;
    if (len <= 1) return;
    setIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + len) % len;
    });
  }, [images?.length, setIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const len = images?.length || 0;
    if (len <= 1) return;
    setIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % len;
    });
  }, [images?.length, setIndex]);

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

  if (index === null || !images || images.length === 0) return null;

  // Use a fallback if the specific image at this index is missing
  const currentImage = images[index] || images[0];
  if (!currentImage) return null;

  return (
    <div className="image-modal-overlay" onClick={() => setIndex(null)}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button
            type="button"
            className="modal-arrow left"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev(e);
            }}
          >
            <FaChevronLeft />
          </button>
        )}

        <img
          key={`${currentImage.src}-${index}`}
          src={currentImage.src}
          alt={currentImage.alt}
          onClick={(e) => {
            if (images.length > 1) {
              e.stopPropagation();
              handleNext(e);
            }
          }}
          style={{ cursor: images.length > 1 ? 'pointer' : 'default' }}
        />

        {images.length > 1 && (
          <button
            type="button"
            className="modal-arrow right"
            onClick={(e) => {
              e.stopPropagation();
              handleNext(e);
            }}
          >
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
