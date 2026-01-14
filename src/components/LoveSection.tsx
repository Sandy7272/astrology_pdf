import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, CalendarHeart } from 'lucide-react';
import GoldDivider from './GoldDivider';
import { Language } from './LanguageSelector';
import { getTranslation } from '@/lib/translations';

interface LoveSectionProps {
  language: Language;
}

const LoveSection = ({ language }: LoveSectionProps) => {
  const t = getTranslation(language);
  
  const lovePhases = [
    {
      phase: t.love.phases.meeting.phase,
      description: t.love.phases.meeting.description,
      icon: '✨',
    },
    {
      phase: t.love.phases.courtship.phase,
      description: t.love.phases.courtship.description,
      icon: '💫',
    },
    {
      phase: t.love.phases.union.phase,
      description: t.love.phases.union.description,
      icon: '💍',
    },
    {
      phase: t.love.phases.evolution.phase,
      description: t.love.phases.evolution.description,
      icon: '🌟',
    },
  ];

  // Parse main reading to handle <gold> tags
  const parseMainReading = (text: string) => {
    const parts = text.split(/<gold>|<\/gold>/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index} className="text-gold-shimmer font-semibold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Romantic background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            {t.love.sceneLabel}
          </span>
          <h2 className="section-title mb-6">{t.love.title}</h2>
          <GoldDivider />
        </motion.div>

        {/* Main Love Reading */}
        <motion.div
          className="card-cosmic rounded-2xl p-8 md:p-12 mb-12 border-glow text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating hearts */}
          <motion.div
            className="absolute top-4 right-8 text-rose-400/30 text-4xl"
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ♡
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-8 text-primary/30 text-3xl"
            animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ♡
          </motion.div>

          <motion.div
            className="inline-flex mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-16 h-16 text-rose-400" fill="currentColor" />
          </motion.div>
          
          <motion.p 
            className="font-elegant text-2xl md:text-3xl text-foreground/90 italic leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            "{parseMainReading(t.love.mainReading)}"
          </motion.p>
        </motion.div>

        {/* Love Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Heart, ...t.love.loveType },
            { icon: CalendarHeart, ...t.love.marriageWindow },
            { icon: Users, ...t.love.partnerNature },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="card-cosmic rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="zodiac-icon mx-auto mb-4">
                <item.icon className="w-6 h-6 text-rose-400" />
              </div>
              <p className="text-muted-foreground text-sm mb-1">{item.title}</p>
              <p className="font-display text-xl text-gold-shimmer mb-1">{item.value}</p>
              <p className="font-body text-xs text-muted-foreground">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Love Journey Timeline */}
        <motion.div
          className="card-cosmic rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-xl text-gold-shimmer mb-8 text-center">
            {t.love.phasesTitle}
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {lovePhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="text-center p-4 rounded-xl bg-secondary/30 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Connection line */}
                {index < lovePhases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent translate-x-1/2" />
                )}
                
                <span className="text-3xl mb-3 block">{phase.icon}</span>
                <h4 className="font-display text-lg text-primary mb-2">{phase.phase}</h4>
                <p className="font-elegant text-sm text-foreground/70">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveSection;
