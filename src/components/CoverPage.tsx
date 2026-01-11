import { motion, Variants } from 'framer-motion';
import { Star, Crown, Sparkles } from 'lucide-react';
import { Language } from './LanguageSelector';
import { translations, getTranslation } from '@/lib/translations';

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
}

const CoverPage = ({ userDetails, language }: CoverPageProps) => {
  const t = translations.cover;
  
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
    { label: getTranslation(t.name, language), value: userDetails.name, icon: '👤' },
    { label: getTranslation(t.dob, language), value: userDetails.dob, icon: '📅' },
    { label: getTranslation(t.time, language), value: userDetails.time, icon: '🕐' },
    { label: getTranslation(t.place, language), value: userDetails.place, icon: '📍' },
  ];

  const astroCards = [
    { label: getTranslation(t.ascendant, language), value: userDetails.ascendant, symbol: '♈' },
    { label: getTranslation(t.moonSign, language), value: userDetails.moonSign, symbol: '☽' },
    { label: getTranslation(t.nakshatra, language), value: userDetails.nakshatra, symbol: '⭐' },
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
          <span>{getTranslation(t.vipBadge, language)}</span>
        </div>
      </motion.div>

      <motion.div className="text-center mb-12" variants={itemVariants}>
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
        
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-wider mb-4">
          <span className="text-gold-shimmer">{getTranslation(t.title1, language)}</span>
        </h1>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-6">
          <span className="text-gold-shimmer">{getTranslation(t.title2, language)}</span>
        </h1>
        
        <motion.p className="font-elegant text-2xl md:text-3xl text-foreground/80 italic" variants={itemVariants}>
          {getTranslation(t.subtitle, language)}
        </motion.p>
        
        <motion.p className="font-body text-muted-foreground mt-4 text-lg" variants={itemVariants}>
          {getTranslation(t.basedOn, language)}
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full mb-12" variants={itemVariants}>
        {userCards.map((item) => (
          <motion.div
            key={item.label}
            className="card-cosmic rounded-xl p-5 text-center"
            whileHover={{ scale: 1.02, borderColor: 'hsl(43 74% 49% / 0.5)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl mb-2 block">{item.icon}</span>
            <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
            <p className="font-elegant text-lg text-foreground">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-12" variants={itemVariants}>
        {astroCards.map((item) => (
          <motion.div key={item.label} className="card-cosmic border-glow rounded-xl p-6 text-center" whileHover={{ y: -5 }}>
            <div className="zodiac-icon mx-auto mb-3">
              <span className="text-2xl text-primary">{item.symbol}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
            <p className="font-display text-xl text-gold-shimmer">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-center" variants={itemVariants}>
        <div className="inline-flex items-center gap-3 card-cosmic rounded-full px-8 py-4 border-glow">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.round(userDetails.confidenceScore / 20) ? 'text-primary fill-primary' : 'text-muted'}`} />
            ))}
          </div>
          <span className="font-display text-lg">
            <span className="text-gold-shimmer">{userDetails.confidenceScore}%</span>
            <span className="text-muted-foreground ml-2">{getTranslation(t.confidenceScore, language)}</span>
          </span>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CoverPage;
