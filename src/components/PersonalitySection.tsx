import { motion } from 'framer-motion';
import { Brain, Heart, Zap, Shield } from 'lucide-react';
import GoldDivider from './GoldDivider';
import { Language } from './LanguageSelector';
import { translations, getTranslation } from '@/lib/translations';

interface PersonalitySectionProps {
  language: Language;
}

const PersonalitySection = ({ language }: PersonalitySectionProps) => {
  const t = translations.personality;

  const parseGoldText = (text: string) => {
    const parts = text.split(/<gold>|<\/gold>/);
    return parts.map((part, i) => 
      i % 2 === 1 ? <span key={i} className="text-gold-shimmer font-semibold">{part}</span> : part
    );
  };

  const traits = [
    { icon: Brain, ...t.thinkingStyle },
    { icon: Heart, ...t.emotionalNature },
    { icon: Zap, ...t.coreStrengths },
    { icon: Shield, ...t.growthAreas },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            {getTranslation(t.sceneLabel, language)}
          </span>
          <h2 className="section-title mb-6">{getTranslation(t.title, language)}</h2>
          <GoldDivider />
        </motion.div>

        <motion.div
          className="card-cosmic rounded-2xl p-8 md:p-12 mb-16 text-center border-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="font-elegant text-2xl md:text-3xl text-foreground/90 italic leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            "{parseGoldText(getTranslation(t.intro, language))}"
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={getTranslation(trait.title, language)}
              className="card-cosmic rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex gap-6 relative z-10">
                <div className="zodiac-icon shrink-0">
                  <trait.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl text-gold-shimmer mb-3">
                    {getTranslation(trait.title, language)}
                  </h3>
                  <p className="font-elegant text-lg text-foreground/80 leading-relaxed mb-4">
                    {getTranslation(trait.description, language)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {getTranslation(trait.highlights, language).map((highlight: string) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full text-sm font-body bg-secondary/50 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;
