import { Dispatch, SetStateAction } from 'react';

export default function ImageModal({
  img,
  setSelectedImage,
}: {
  img: { src: string, alt: string } | null,
  setSelectedImage: Dispatch<SetStateAction<{ src: string, alt: string } | null>>
}) {
  if (!img) return null;

  return (
    <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} />
        <button type="button" className="image-modal-close" onClick={() => setSelectedImage(null)}>
          &times;
        </button>
      </div>
    </div>
  );
}
