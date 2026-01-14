import { motion } from 'framer-motion';
import { Coins, TrendingUp, Home, Landmark } from 'lucide-react';
import GoldDivider from './GoldDivider';
import { Language } from './LanguageSelector';
import { getTranslation } from '@/lib/translations';

interface WealthSectionProps {
  language: Language;
}

const WealthSection = ({ language }: WealthSectionProps) => {
  const t = getTranslation(language);
  
  const wealthPhases = [
    { age: '20-28', status: 'building', label: t.wealth.phases.foundation, income: 30 },
    { age: '29-35', status: 'growth', label: t.wealth.phases.accumulation, income: 55 },
    { age: '36-45', status: 'peak', label: t.wealth.phases.wealthPeak, income: 85 },
    { age: '46-55', status: 'stability', label: t.wealth.phases.stability, income: 90 },
    { age: '56+', status: 'legacy', label: t.wealth.phases.legacy, income: 80 },
  ];

  const insights = [
    {
      icon: Coins,
      title: t.wealth.insights.wealthNature.title,
      content: t.wealth.insights.wealthNature.content,
    },
    {
      icon: Home,
      title: t.wealth.insights.propertyYoga.title,
      content: t.wealth.insights.propertyYoga.content,
    },
    {
      icon: Landmark,
      title: t.wealth.insights.investmentStyle.title,
      content: t.wealth.insights.investmentStyle.content,
    },
    {
      icon: TrendingUp,
      title: t.wealth.insights.peakWealthYears.title,
      content: t.wealth.insights.peakWealthYears.content,
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      {/* Gold ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
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
            {t.wealth.sceneLabel}
          </span>
          <h2 className="section-title mb-6">{t.wealth.title}</h2>
          <GoldDivider />
        </motion.div>

        {/* Wealth Growth Timeline */}
        <motion.div
          className="card-cosmic rounded-2xl p-8 mb-12 border-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-xl text-gold-shimmer mb-8 text-center">
            {t.wealth.timelineTitle}
          </h3>
          
          {/* Bar Graph */}
          <div className="flex items-end justify-between gap-4 h-48 mb-6">
            {wealthPhases.map((phase, index) => (
              <motion.div
                key={phase.age}
                className="flex-1 flex flex-col items-center"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative w-full flex justify-center mb-2">
                  <motion.div
                    className="w-full max-w-16 rounded-t-lg relative overflow-hidden"
                    style={{ height: `${phase.income * 1.8}px` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-primary" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
                <span className="text-xs text-primary font-display">{phase.age}</span>
                <span className="text-xs text-muted-foreground text-center mt-1 hidden md:block">{phase.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Gold coins decoration */}
          <div className="flex justify-center gap-2 mt-4">
            {['🪙', '💰', '🏆', '💎', '🪙'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Wealth Insights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              className="card-cosmic rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex gap-4 relative z-10">
                <div className="zodiac-icon shrink-0">
                  <insight.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gold-shimmer mb-2">
                    {insight.title}
                  </h3>
                  <p className="font-elegant text-foreground/80 leading-relaxed">
                    {insight.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WealthSection;
