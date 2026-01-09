import { motion } from 'framer-motion';
import { Heart, Brain, Activity, Flower2 } from 'lucide-react';
import GoldDivider from './GoldDivider';

const HealthSection = () => {
  const healthAreas = [
    {
      icon: Brain,
      area: 'Mental Wellness',
      strength: 85,
      advice: 'Strong mental resilience. Practice meditation during stressful planetary transits. Avoid overthinking in Saturn periods.',
    },
    {
      icon: Heart,
      area: 'Heart & Vitals',
      strength: 78,
      advice: 'Generally robust cardiovascular health. Extra care needed during Mars transits. Regular exercise benefits greatly.',
    },
    {
      icon: Activity,
      area: 'Energy Levels',
      strength: 82,
      advice: 'Natural vitality from Sun placement. Energy peaks in morning hours. Maintain consistent sleep schedule.',
    },
    {
      icon: Flower2,
      area: 'Emotional Balance',
      strength: 75,
      advice: 'Moon influences emotional fluctuations. Water-based activities bring calm. Practice gratitude daily.',
    },
  ];

  const remedies = [
    { icon: '🧘', text: 'Morning meditation for 15 minutes' },
    { icon: '🌊', text: 'Drink water from copper vessel' },
    { icon: '🌿', text: 'Include green vegetables daily' },
    { icon: '🌅', text: 'Sun gazing at sunrise (briefly)' },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      {/* Calm healing glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      
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
            Wellness Scene
          </span>
          <h2 className="section-title mb-6">Mind & Body</h2>
          <GoldDivider />
        </motion.div>

        {/* Health Overview Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {healthAreas.map((area, index) => (
            <motion.div
              key={area.area}
              className="card-cosmic rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="zodiac-icon shrink-0">
                  <area.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-gold-shimmer mb-2">
                    {area.area}
                  </h3>
                  
                  {/* Strength Bar */}
                  <div className="relative h-2 rounded-full bg-secondary/50 overflow-hidden mb-3">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.strength}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-3">
                    <span>Cosmic Strength</span>
                    <span className="text-emerald-400">{area.strength}%</span>
                  </div>
                  
                  <p className="font-elegant text-foreground/80 text-sm leading-relaxed">
                    {area.advice}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Health Remedies */}
        <motion.div
          className="card-cosmic rounded-2xl p-8 border-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-xl text-gold-shimmer mb-6 text-center">
            Daily Wellness Rituals
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {remedies.map((remedy, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="text-2xl">{remedy.icon}</span>
                <span className="font-elegant text-foreground/80">{remedy.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthSection;
