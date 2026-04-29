import { useEffect } from 'react';
import { SCHEMES } from '../constants/schemes';

export function PdfViewerModal({ pdf, title, isOpen, onClose, scheme }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];
  const grad = `linear-gradient(135deg, ${s.a}, ${s.b})`;

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="pv-overlay" onClick={handleOverlayClick}>
      <div className="pv-modal">

        <div className="pv-header">
          <div className="pv-header-accent" style={{ background: grad }} />
          <span className="pv-title">{title}</span>
          <button className="pv-btn-close" onClick={onClose}>✕</button>
        </div>

        <div className="pv-body">
          <iframe
            id="pdf-viewer-frame"
            src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit&zoom=page-fit`}
            title={title}
            className="pv-iframe"
          />
        </div>

      </div>
    </div>
  );
}
