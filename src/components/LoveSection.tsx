import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, CalendarHeart } from 'lucide-react';
import GoldDivider from './GoldDivider';

const LoveSection = () => {
  const lovePhases = [
    {
      phase: 'Meeting',
      description: 'Your destined encounter comes through unexpected channels—perhaps a professional setting or during travels.',
      icon: '✨',
    },
    {
      phase: 'Courtship',
      description: 'A slow-burning romance built on intellectual connection and deep conversations.',
      icon: '💫',
    },
    {
      phase: 'Union',
      description: 'Marriage brings stability and growth. Your partnership becomes a source of strength.',
      icon: '💍',
    },
    {
      phase: 'Evolution',
      description: 'Years 5-10 of marriage bring deepest bonding and shared accomplishments.',
      icon: '🌟',
    },
  ];

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
            Romantic Scene
          </span>
          <h2 className="section-title mb-6">Love & Destiny</h2>
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
            "Venus whispers of a <span className="text-gold-shimmer font-semibold">profound love</span> written in your stars. 
            Your partner will be someone of <span className="text-gold-shimmer font-semibold">intellectual depth</span> and 
            emotional maturity, drawn to your authentic spirit..."
          </motion.p>
        </motion.div>

        {/* Love Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Heart, title: 'Love Type', value: 'Love Marriage', subtitle: 'Strong romantic connection indicated' },
            { icon: CalendarHeart, title: 'Marriage Window', value: '2026-2028', subtitle: 'Most auspicious period' },
            { icon: Users, title: 'Partner Nature', value: 'Intellectual & Caring', subtitle: 'Complementary energies' },
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
            Your Love Story Phases
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
