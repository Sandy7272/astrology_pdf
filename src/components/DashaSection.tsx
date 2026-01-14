import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';
import { Language } from './LanguageSelector';
import { getTranslation } from '@/lib/translations';

interface DashaSectionProps {
  language: Language;
}

const DashaSection = ({ language }: DashaSectionProps) => {
  const t = getTranslation(language);
  
  const planets = [
    { name: 'Sun', symbol: '☉', color: 'from-orange-500/30' },
    { name: 'Moon', symbol: '☽', color: 'from-slate-300/30' },
    { name: 'Mars', symbol: '♂', color: 'from-red-500/30' },
    { name: 'Mercury', symbol: '☿', color: 'from-emerald-500/30' },
    { name: 'Jupiter', symbol: '♃', color: 'from-yellow-500/30', current: true },
    { name: 'Venus', symbol: '♀', color: 'from-pink-500/30' },
    { name: 'Saturn', symbol: '♄', color: 'from-indigo-500/30' },
    { name: 'Rahu', symbol: '☊', color: 'from-violet-500/30' },
    { name: 'Ketu', symbol: '☋', color: 'from-amber-600/30' },
  ];

  const dashaTimeline = [
    { planet: 'Jupiter', period: '2020-2036', status: 'current', nature: t.dasha.natures.expansionWisdom },
    { planet: 'Saturn', period: '2036-2055', status: 'upcoming', nature: t.dasha.natures.disciplineLegacy },
    { planet: 'Mercury', period: '2055-2072', status: 'future', nature: t.dasha.natures.communicationLearning },
  ];

  const getPlanetName = (name: string) => {
    return t.dasha.planets[name as keyof typeof t.dasha.planets] || name;
  };

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            {t.dasha.sceneLabel}
          </span>
          <h2 className="section-title mb-6">{t.dasha.title}</h2>
          <GoldDivider />
        </motion.div>

        {/* Rotating Planet Wheel */}
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96 mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl" />
          
          {/* Wheel border */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner wheel */}
          <motion.div
            className="absolute inset-8 rounded-full border border-primary/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />

          {/* Planets */}
          {planets.map((planet, index) => {
            const angle = (index * (360 / planets.length) - 90) * (Math.PI / 180);
            const radius = 140;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={planet.name}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center relative ${
                    planet.current ? 'bg-primary/30 border-2 border-primary' : 'bg-secondary/50 border border-primary/20'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  animate={planet.current ? { 
                    boxShadow: ['0 0 20px hsl(43 74% 49% / 0.3)', '0 0 40px hsl(43 74% 49% / 0.6)', '0 0 20px hsl(43 74% 49% / 0.3)']
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className={`text-xl md:text-2xl ${planet.current ? 'text-primary' : 'text-foreground/70'}`}>
                    {planet.symbol}
                  </span>
                  {planet.current && (
                    <span className="absolute -bottom-6 text-xs font-display text-primary whitespace-nowrap">
                      {t.dasha.current}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center border border-primary/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div>
                <p className="font-display text-lg text-gold-shimmer">{t.dasha.mahadasha}</p>
                <p className="text-xs text-muted-foreground">{getPlanetName('Jupiter')}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Dasha Timeline */}
        <motion.div
          className="card-cosmic rounded-2xl p-8 border-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-xl text-gold-shimmer mb-8 text-center">
            {t.dasha.periodsTitle}
          </h3>
          
          <div className="space-y-4">
            {dashaTimeline.map((dasha, index) => (
              <motion.div
                key={dasha.planet}
                className={`flex items-center gap-6 p-4 rounded-xl ${
                  dasha.status === 'current' 
                    ? 'bg-primary/10 border border-primary/30' 
                    : 'bg-secondary/20'
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  dasha.status === 'current' ? 'bg-primary/20' : 'bg-secondary/30'
                }`}>
                  <span className={`text-2xl ${dasha.status === 'current' ? 'text-primary' : 'text-foreground/50'}`}>
                    {planets.find(p => p.name === dasha.planet)?.symbol}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className={`font-display text-lg ${dasha.status === 'current' ? 'text-gold-shimmer' : 'text-foreground/70'}`}>
                      {getPlanetName(dasha.planet)} {t.dasha.mahadasha}
                    </h4>
                    {dasha.status === 'current' && (
                      <span className="badge-premium text-xs">{t.dasha.active}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{dasha.period}</p>
                </div>
                
                <div className="text-right">
                  <p className={`font-elegant ${dasha.status === 'current' ? 'text-primary' : 'text-foreground/60'}`}>
                    {dasha.nature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashaSection;
