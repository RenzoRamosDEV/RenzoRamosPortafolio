import { useState } from 'react';
import { SCHEMES } from '../constants/schemes';
import { PdfViewerModal } from './PdfViewerModal';

export function ExpCardDetail({ data, scheme }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <>
      <div className="exp-card-detail">
        <div
          className="exp-detail-accent"
          style={{ background: `linear-gradient(to bottom, ${s.a}, ${s.b})` }}
        />

        <div className="exp-detail-header">
          <div>
            <h3 className="exp-detail-title">{data.title}</h3>
            <p className="exp-detail-company">
              {data.company}
              {data.location && <span className="exp-detail-location"> • {data.location}</span>}
            </p>
          </div>
          {data.period && (
            <span className="exp-detail-period">{data.period}</span>
          )}
        </div>

        {data.desc && (
          <p className="exp-detail-desc">{data.desc}</p>
        )}

        {data.pdf && data.preview && (
          <div className="exp-detail-pdf-section">
            <h4 className="exp-detail-pdf-title">Vista previa del certificado</h4>
            <div
              className="exp-detail-pdf-preview"
              onClick={() => setPdfOpen(true)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={data.preview}
                alt="Preview del certificado"
                className="exp-detail-pdf-preview-img"
              />
              <div className="exp-detail-pdf-overlay">
                <span>Click para ver</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {data.pdf && (
        <PdfViewerModal
          pdf={data.pdf}
          title={data.title}
          isOpen={pdfOpen}
          onClose={() => setPdfOpen(false)}
          scheme={scheme}
        />
      )}
    </>
  );
}
