import { motion } from "framer-motion";
import { CalendarDays, ExternalLink, Image as ImageIcon } from "lucide-react";

export default function CertificateCard({ certificate, onPreview }) {
  const hasImage = Boolean(certificate.image);
  return (
    <motion.article
      className="certificate-card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 290, damping: 22 }}
    >
      <button
        className={`certificate-preview ${hasImage ? "is-clickable" : ""}`}
        onClick={() => hasImage && onPreview(certificate)}
        disabled={!hasImage}
        aria-label={
          hasImage
            ? `Preview ${certificate.title}`
            : `${certificate.title} preview will be added soon`
        }
      >
        {hasImage ? (
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
          />
        ) : (
          <div className="certificate-placeholder">
            <span>{certificate.mark}</span>
            <ImageIcon size={25} />
            <small>Certificate preview</small>
          </div>
        )}
        {hasImage && <span className="preview-hint">Click to expand</span>}
      </button>
      <div className="certificate-card-content">
        <div className="certificate-meta">
          <span>{certificate.issuer}</span>
          <span>
            <CalendarDays size={13} /> {certificate.date}
          </span>
        </div>
        <h3>{certificate.title}</h3>
        <p>{certificate.description}</p>
        {certificate.credentialUrl && (
          <motion.a
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="credential-link"
          >
            View credential <ExternalLink size={14} />
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
