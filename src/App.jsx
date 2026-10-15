import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import CoverSpread from './components/CoverSpread';
import Manifesto from './components/Manifesto';
import LookbookWorks from './components/LookbookWorks';
import CapabilitiesIndex from './components/CapabilitiesIndex';
import ArtisanFeature from './components/ArtisanFeature';
import CommissionInquiry from './components/CommissionInquiry';
import CaseStudyModal from './components/CaseStudyModal';
import Colophon from './components/Colophon';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <div className="lookbook-app">
      {/* Ambient Film Texture */}
      <div className="ambient-texture" aria-hidden="true" />

      {/* Bespoke Interactive Pointer */}
      <CustomCursor />

      {/* Top Colophon Masthead & Live Clocks */}
      <Navigation onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Main Editorial Content Flow */}
      <main>
        {/* 01 // Cover Spread (Hero) */}
        <CoverSpread onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* 02 // The Studio Creed (3 Tenets) */}
        <Manifesto />

        {/* 03 // Curated Masterworks (Monographs) */}
        <LookbookWorks onSelectProject={(project) => setActiveProject(project)} />

        {/* 04 // Capabilities Index Catalog */}
        <CapabilitiesIndex onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* 05 // Artisan Provenance & Lineage */}
        <ArtisanFeature onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* 06 // Bespoke Commission Protocol */}
        <CommissionInquiry />
      </main>

      {/* Colophon & Archival Registry */}
      <Colophon />

      {/* Deep Monograph Case Study Modal */}
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onCommission={() => {
            setActiveProject(null);
            setInquiryModalOpen(true);
          }}
        />
      )}

      {/* Commission Protocol Dialog Modal */}
      {inquiryModalOpen && (
        <CommissionInquiry
          isModal={true}
          onClose={() => setInquiryModalOpen(false)}
        />
      )}
    </div>
  );
}
