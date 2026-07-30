import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import CertificateCard from "../components/CertificateCard";
import { certificates } from "../data/certificates";

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const certificatesWithImages = certificates.filter(
    (certificate) => certificate.image,
  );
  const activeIndex = activeCertificate
    ? certificatesWithImages.findIndex(
        (certificate) => certificate.id === activeCertificate.id,
      )
    : -1;
  const close = () => setActiveCertificate(null);
  const navigate = (direction) => {
    if (!certificatesWithImages.length) return;
    const nextIndex =
      (activeIndex + direction + certificatesWithImages.length) %
      certificatesWithImages.length;
    setActiveCertificate(certificatesWithImages[nextIndex]);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!activeCertificate) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") navigate(-1);
      if (event.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCertificate, activeIndex]);

  return (
    <section
      id="certificates"
      className="section container certificates-section"
    >
      <SectionTitle
        eyebrow="05 / Credentials"
        title="Courses & Certifications"
        // copy="Professional certifications and achievements that demonstrate my continuous learning journey."
      />
      <div className="certificate-gallery">
        {certificates.map((certificate, index) => (
          <Reveal
            className="certificate-reveal"
            key={certificate.id}
            delay={index * 0.08}
          >
            <CertificateCard
              certificate={certificate}
              onPreview={setActiveCertificate}
            />
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            className="certificate-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCertificate.title} certificate preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="lightbox-panel"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeCertificate.image}
                alt={`${activeCertificate.title} certificate`}
              />
              <div className="lightbox-caption">
                <span>
                  {activeCertificate.issuer} · {activeCertificate.date}
                </span>
                <strong>{activeCertificate.title}</strong>
              </div>
              <button
                className="lightbox-close"
                onClick={close}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
              {certificatesWithImages.length > 1 && (
                <>
                  <button
                    className="lightbox-nav previous"
                    onClick={() => navigate(-1)}
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    className="lightbox-nav next"
                    onClick={() => navigate(1)}
                    aria-label="Next certificate"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
