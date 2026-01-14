import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Star, Sparkles } from 'lucide-react';
import GoldDivider from './GoldDivider';
import { Language } from './LanguageSelector';
import { getTranslation } from '@/lib/translations';

interface SummarySectionProps {
  language: Language;
}

const SummarySection = ({ language }: SummarySectionProps) => {
  const t = getTranslation(language);
  const bestYears = ['2027', '2031', '2035', '2038', '2042'];
  const warningYears = ['2026', '2033', '2039'];

  const parseGoldText = (text: string) => {
    const parts = text.split(/<gold>|<\/gold>/);
    return parts.map((part, i) => 
      i % 2 === 1 ? <span key={i} className="text-gold-shimmer font-semibold">{part}</span> : part
    );
  };

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
            {t.summary.sceneLabel}
          </span>
          <h2 className="section-title mb-6">{t.summary.title}</h2>
          <GoldDivider />
        </motion.div>

        <motion.div
          className="card-cosmic rounded-2xl p-8 md:p-12 mb-12 border-glow text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="absolute top-4 left-8" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="w-8 h-8 text-primary/30" />
          </motion.div>
          <motion.div className="absolute bottom-4 right-8" animate={{ rotate: [360, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <Star className="w-6 h-6 text-primary/30" />
          </motion.div>

          <motion.p 
            className="font-elegant text-2xl md:text-4xl text-foreground/90 italic leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            "{parseGoldText(t.summary.climax)}"
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="card-cosmic rounded-2xl p-6 md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="zodiac-icon"><CheckCircle className="w-6 h-6 text-emerald-400" /></div>
              <h3 className="font-display text-xl text-gold-shimmer">{t.summary.coreStrengths}</h3>
            </div>
            
            <div className="space-y-3">
              {t.summary.strengths.map((strength: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-elegant text-foreground/80">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div className="card-cosmic rounded-2xl p-6" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-primary" fill="currentColor" />
                <h3 className="font-display text-lg text-gold-shimmer">{t.summary.goldenYears}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {bestYears.map((year) => (
                  <span key={year} className="px-3 py-1.5 rounded-full text-sm font-body bg-primary/20 text-primary border border-primary/30">{year}</span>
                ))}
              </div>
            </motion.div>

            <motion.div className="card-cosmic rounded-2xl p-6" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="font-display text-lg text-amber-400">{t.summary.carefulYears}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {warningYears.map((year) => (
                  <span key={year} className="px-3 py-1.5 rounded-full text-sm font-body bg-amber-500/10 text-amber-400 border border-amber-500/30">{year}</span>
                ))}
              </div>
              <p className="font-body text-xs text-muted-foreground mt-3">{t.summary.cautionNote}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
