import { useState } from 'react';
import StarField from '@/components/StarField';
import ZodiacBackground from '@/components/ZodiacBackground';
import CoverPage from '@/components/CoverPage';
import PersonalitySection from '@/components/PersonalitySection';
import LifeJourneySection from '@/components/LifeJourneySection';
import CareerSection from '@/components/CareerSection';
import LoveSection from '@/components/LoveSection';
import WealthSection from '@/components/WealthSection';
import ForeignSection from '@/components/ForeignSection';
import HealthSection from '@/components/HealthSection';
import DashaSection from '@/components/DashaSection';
import SummarySection from '@/components/SummarySection';
import RemediesSection from '@/components/RemediesSection';
import Footer from '@/components/Footer';
import PdfExportButton from '@/components/PdfExportButton';
import LanguageSelector, { Language } from '@/components/LanguageSelector';

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');

  const userDetails = {
    name: 'Arjun Sharma',
    dob: 'March 15, 1992',
    time: '10:45 AM',
    place: 'Mumbai, India',
    ascendant: 'Leo',
    moonSign: 'Cancer',
    nakshatra: 'Pushya',
    confidenceScore: 94,
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${language !== 'en' ? 'font-hindi' : ''}`}>
      <StarField />
      <ZodiacBackground />
      <PdfExportButton targetId="report-content" userName={userDetails.name} />
      <LanguageSelector value={language} onChange={setLanguage} />
      
      <main id="report-content" className="relative z-10">
        <CoverPage userDetails={userDetails} language={language} />
        <PersonalitySection language={language} />
        <LifeJourneySection language={language} />
        <CareerSection language={language} />
        <WealthSection language={language} />
        <LoveSection language={language} />
        <ForeignSection language={language} />
        <HealthSection language={language} />
        <DashaSection language={language} />
        <SummarySection language={language} />
        <RemediesSection language={language} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
