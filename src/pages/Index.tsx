import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarField from '@/components/StarField';
import ZodiacBackground from '@/components/ZodiacBackground';
import CoverPage from '@/components/CoverPage';
import DoshaAnalysis from '@/components/DoshaAnalysis';
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
import { AstrologyData, SAMPLE_ASTROLOGY_DATA } from '@/types/astrology';

// Loading component with cosmic theme
const CosmicLoader = ({ language }: { language: Language }) => (
  <motion.div 
    className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="relative"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    >
      <div className="w-32 h-32 border-2 border-primary/30 rounded-full" />
      <div className="absolute inset-0 w-32 h-32 border-2 border-t-primary rounded-full" />
      <div className="absolute inset-4 w-24 h-24 border border-gold-soft/40 rounded-full" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-4xl">☉</span>
      </motion.div>
    </motion.div>
    
    <motion.p
      className="mt-8 font-display text-xl text-gold-soft"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {language === 'en' 
        ? 'Calculating Cosmic Coordinates...' 
        : language === 'hi' 
          ? 'ग्रहों की गणना हो रही है...'
          : 'ग्रहांची गणना होत आहे...'}
    </motion.p>
    
    <motion.div className="flex gap-2 mt-4">
      {['☿', '♀', '♂', '♃', '♄'].map((symbol, i) => (
        <motion.span
          key={symbol}
          className="text-2xl text-primary/70"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 1 }}
        >
          {symbol}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [astrologyData, setAstrologyData] = useState<AstrologyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data (replace with actual API call)
  useEffect(() => {
    const fetchAstrologyData = async () => {
      setIsLoading(true);
      
      // TODO: Replace with actual API call
      // const userId = new URLSearchParams(window.location.search).get('user_id');
      // const response = await fetch(`/api/astrology/${userId}`);
      // const data = await response.json();
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Use sample data for now
      setAstrologyData(SAMPLE_ASTROLOGY_DATA);
      setIsLoading(false);
    };

    fetchAstrologyData();
  }, []);

  // Convert astrology data to userDetails format for CoverPage
  const userDetails = astrologyData ? {
    name: astrologyData.userDetails.name,
    dob: new Date(astrologyData.userDetails.dateOfBirth).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    time: astrologyData.userDetails.timeOfBirth,
    place: astrologyData.userDetails.placeOfBirth,
    ascendant: astrologyData.charts.d1.ascendant.toString(),
    moonSign: astrologyData.charts.d1.planets.find(p => p.planet === 'Moon')?.signName || '',
    nakshatra: astrologyData.panchang.nakshatra,
    confidenceScore: 94,
  } : null;

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${language !== 'en' ? 'font-hindi' : ''}`}>
      <StarField />
      <ZodiacBackground />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <CosmicLoader key="loader" language={language} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PdfExportButton targetId="report-content" userName={userDetails?.name || 'Report'} />
            <LanguageSelector value={language} onChange={setLanguage} />
            
            <main id="report-content" className="relative z-10">
              {userDetails && astrologyData && (
                <>
                  <CoverPage 
                    userDetails={userDetails} 
                    language={language} 
                    chartData={astrologyData.charts.d1}
                    panchang={astrologyData.panchang}
                  />
                  <DoshaAnalysis doshas={astrologyData.doshas} language={language} />
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
                </>
              )}
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
