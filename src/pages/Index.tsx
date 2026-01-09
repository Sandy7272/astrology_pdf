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

const Index = () => {
  // Sample user data - in a real app, this would come from user input or API
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
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <StarField />
      <ZodiacBackground />
      
      {/* PDF Export Button */}
      <PdfExportButton targetId="report-content" userName={userDetails.name} />
      
      {/* Main Content */}
      <main id="report-content" className="relative z-10">
        <CoverPage userDetails={userDetails} />
        <PersonalitySection />
        <LifeJourneySection />
        <CareerSection />
        <WealthSection />
        <LoveSection />
        <ForeignSection />
        <HealthSection />
        <DashaSection />
        <SummarySection />
        <RemediesSection />
      </main>
      
      {/* Footer */}
      <Footer brandName="Cosmic Destiny" />
    </div>
  );
};

export default Index;
