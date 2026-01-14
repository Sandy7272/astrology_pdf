import { motion, Variants } from 'framer-motion';
import { Star, Crown, Sparkles } from 'lucide-react';
import { Language } from './LanguageSelector';
import { getTranslation } from '@/lib/translations';
import { D1ChartData, PanchangData, RASHI_NAMES } from '@/types/astrology';
import NorthIndianChart from './NorthIndianChart';
import GoldDivider from './GoldDivider';

interface UserDetails {
  name: string;
  dob: string;
  time: string;
  place: string;
  ascendant: string;
  moonSign: string;
  nakshatra: string;
  confidenceScore: number;
}

interface CoverPageProps {
  userDetails: UserDetails;
  language: Language;
  chartData?: D1ChartData;
  panchang?: PanchangData;
}

const CoverPage = ({ userDetails, language, chartData, panchang }: CoverPageProps) => {
  const t = getTranslation(language);
  
  const getAscendantName = () => {
    const ascNum = parseInt(userDetails.ascendant);
    if (isNaN(ascNum)) return userDetails.ascendant;
    const rashi = RASHI_NAMES[ascNum];
    return rashi ? (language === 'en' ? rashi.en : rashi[language] || rashi.hi) : userDetails.ascendant;
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const userCards = [
    { label: t.cover.name, value: userDetails.name, icon: '👤' },
    { label: t.cover.dob, value: userDetails.dob, icon: '📅' },
    { label: t.cover.time, value: userDetails.time, icon: '🕐' },
    { label: t.cover.place, value: userDetails.place, icon: '📍' },
  ];

  const astroCards = [
    { label: t.cover.ascendant, value: getAscendantName(), symbol: '♈' },
    { label: t.cover.moonSign, value: userDetails.moonSign, symbol: '☽' },
    { label: t.cover.nakshatra, value: userDetails.nakshatra, symbol: '⭐' },
  ];

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="absolute top-8 right-8" variants={itemVariants}>
        <div className="badge-premium flex items-center gap-2">
          <Crown className="w-4 h-4" />
          <span>{t.cover.vipBadge}</span>
        </div>
      </motion.div>

      <motion.div className="text-center mb-10" variants={itemVariants}>
        <motion.div 
          className="flex justify-center mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="relative">
            <Sparkles className="w-16 h-16 text-primary" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          </div>
        </motion.div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-4">
          <span className="text-gold-shimmer">
            {language === 'en' ? 'Bhagya' : language === 'hi' ? 'भाग्य' : 'भाग्य'}
          </span>
        </h1>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-wider mb-6">
          <span className="text-gold-shimmer">
            {language === 'en' ? 'Unveiled' : language === 'hi' ? 'उद्घाटन' : 'उद्घाटन'}
          </span>
        </h1>
        
        <motion.p className="font-elegant text-xl md:text-2xl text-foreground/80 italic" variants={itemVariants}>
          {language === 'en' 
            ? 'Your Vedic Jyotish Report' 
            : language === 'hi' 
              ? 'आपकी वैदिक ज्योतिष रिपोर्ट'
              : 'तुमचा वैदिक ज्योतिष अहवाल'}
        </motion.p>
        
        <motion.p className="font-body text-muted-foreground mt-3 text-base" variants={itemVariants}>
          {language === 'en' 
            ? 'Based on Lahiri Ayanamsa • Vedic Astrology' 
            : language === 'hi'
              ? 'लहिरी अयनांश के आधार पर • वैदिक ज्योतिष'
              : 'लाहिरी अयनांशावर आधारित • वैदिक ज्योतिष'}
        </motion.p>
      </motion.div>

      {/* User Details Cards */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full mb-8" variants={itemVariants}>
        {userCards.map((item) => (
          <motion.div
            key={item.label}
            className="card-cosmic rounded-xl p-4 text-center"
            whileHover={{ scale: 1.02, borderColor: 'hsl(43 74% 49% / 0.5)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-xl mb-1 block">{item.icon}</span>
            <p className="text-muted-foreground text-xs mb-1">{item.label}</p>
            <p className="font-elegant text-sm text-foreground">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Kundali Chart - The Heart of the Report */}
      {chartData && (
        <motion.div 
          className="w-full max-w-md mb-8"
          variants={itemVariants}
        >
          <h2 className="text-center font-display text-xl text-gold-soft mb-4">
            {language === 'en' ? 'Lagna Kundali' : language === 'hi' ? 'लग्न कुंडली' : 'लग्न कुंडली'}
          </h2>
          <NorthIndianChart 
            chartData={chartData} 
            language={language}
            size={340}
          />
        </motion.div>
      )}

      {/* Astrological Details */}
      <motion.div className="grid grid-cols-3 gap-3 max-w-2xl w-full mb-8" variants={itemVariants}>
        {astroCards.map((item) => (
          <motion.div key={item.label} className="card-cosmic border-glow rounded-xl p-4 text-center" whileHover={{ y: -5 }}>
            <div className="zodiac-icon mx-auto mb-2">
              <span className="text-xl text-primary">{item.symbol}</span>
            </div>
            <p className="text-muted-foreground text-xs mb-1">{item.label}</p>
            <p className="font-display text-base text-gold-shimmer">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Birth Panchang Table */}
      {panchang && (
        <motion.div className="w-full max-w-3xl mb-8" variants={itemVariants}>
          <h3 className="text-center font-display text-lg text-gold-soft mb-4">
            {language === 'en' ? 'Birth Panchang' : language === 'hi' ? 'जन्म पंचांग' : 'जन्म पंचांग'}
          </h3>
          <div className="card-cosmic rounded-xl p-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-gold-soft font-display py-2 px-3 text-left">
                    {language === 'en' ? 'Tithi' : 'तिथि'}
                  </th>
                  <th className="text-gold-soft font-display py-2 px-3 text-left">
                    {language === 'en' ? 'Nakshatra' : 'नक्षत्र'}
                  </th>
                  <th className="text-gold-soft font-display py-2 px-3 text-left">
                    {language === 'en' ? 'Yoga' : 'योग'}
                  </th>
                  <th className="text-gold-soft font-display py-2 px-3 text-left">
                    {language === 'en' ? 'Karana' : 'करण'}
                  </th>
                  <th className="text-gold-soft font-display py-2 px-3 text-left">
                    {language === 'en' ? 'Sunrise' : 'सूर्योदय'}
                  </th>
                  <th className="text-gold-soft font-display py-2 px-3 text-left">
                    {language === 'en' ? 'Sunset' : 'सूर्यास्त'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 text-foreground/90">{panchang.tithi}</td>
                  <td className="py-2 px-3 text-foreground/90">
                    {panchang.nakshatra} <span className="text-primary text-xs">({language === 'en' ? 'Pada' : 'पाद'} {panchang.nakshatraPada})</span>
                  </td>
                  <td className="py-2 px-3 text-foreground/90">{panchang.yoga}</td>
                  <td className="py-2 px-3 text-foreground/90">{panchang.karana}</td>
                  <td className="py-2 px-3 text-foreground/90">{panchang.sunrise}</td>
                  <td className="py-2 px-3 text-foreground/90">{panchang.sunset}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Confidence Score */}
      <motion.div className="text-center" variants={itemVariants}>
        <div className="inline-flex items-center gap-3 card-cosmic rounded-full px-6 py-3 border-glow">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.round(userDetails.confidenceScore / 20) ? 'text-primary fill-primary' : 'text-muted'}`} />
            ))}
          </div>
          <span className="font-display text-base">
            <span className="text-gold-shimmer">{userDetails.confidenceScore}%</span>
            <span className="text-muted-foreground ml-2">
              {language === 'en' ? 'Accuracy Score' : language === 'hi' ? 'सटीकता स्कोर' : 'अचूकता स्कोअर'}
            </span>
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex justify-center pt-1.5">
          <motion.div 
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <GoldDivider />
    </motion.section>
  );
};

export default CoverPage;
