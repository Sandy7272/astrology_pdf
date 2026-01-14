import { motion } from 'framer-motion';
import { Gem, Heart, Flame, BookOpen } from 'lucide-react';
import GoldDivider from './GoldDivider';
import { Language } from './LanguageSelector';
import { getTranslation } from '@/lib/translations';

interface RemediesSectionProps {
  language: Language;
}

const RemediesSection = ({ language }: RemediesSectionProps) => {
  const t = getTranslation(language);
  
  const remedies = [
    {
      icon: '🕉️',
      category: t.remedies.categories.mantras.category,
      title: t.remedies.categories.mantras.title,
      items: t.remedies.categories.mantras.items,
    },
    {
      icon: '💎',
      category: t.remedies.categories.gemstones.category,
      title: t.remedies.categories.gemstones.title,
      items: t.remedies.categories.gemstones.items,
    },
    {
      icon: '🙏',
      category: t.remedies.categories.donations.category,
      title: t.remedies.categories.donations.title,
      items: t.remedies.categories.donations.items,
    },
    {
      icon: '🔥',
      category: t.remedies.categories.rituals.category,
      title: t.remedies.categories.rituals.title,
      items: t.remedies.categories.rituals.items,
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      {/* Temple-like ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 via-transparent to-transparent pointer-events-none" />
      
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
            {t.remedies.sceneLabel}
          </span>
          <h2 className="section-title mb-6">{t.remedies.title}</h2>
          <GoldDivider />
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="card-cosmic rounded-2xl p-8 mb-12 border-glow text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="font-elegant text-xl md:text-2xl text-foreground/90 italic leading-relaxed"
          >
            "{t.remedies.intro}"
          </motion.p>
        </motion.div>

        {/* Remedies Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {remedies.map((remedy, index) => (
            <motion.div
              key={remedy.category}
              className="card-cosmic rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{remedy.icon}</span>
                  <div>
                    <span className="text-xs font-body text-primary tracking-wider uppercase">
                      {remedy.category}
                    </span>
                    <h3 className="font-display text-xl text-gold-shimmer">
                      {remedy.title}
                    </h3>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {remedy.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-foreground/80 font-elegant"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <span className="text-primary mt-1">✦</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          className="text-center p-6 rounded-2xl bg-secondary/30 border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-elegant text-foreground/70 italic">
            ✨ {t.remedies.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RemediesSection;
