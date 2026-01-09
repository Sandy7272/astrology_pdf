import { motion } from 'framer-motion';
import { Brain, Heart, Zap, Shield } from 'lucide-react';
import GoldDivider from './GoldDivider';

const PersonalitySection = () => {
  const traits = [
    {
      icon: Brain,
      title: 'Thinking Style',
      description: 'Your mind operates like a strategic commander, analyzing every situation with depth and precision. You see patterns others miss and connect ideas across distant domains.',
      highlights: ['Analytical', 'Strategic', 'Visionary'],
    },
    {
      icon: Heart,
      title: 'Emotional Nature',
      description: 'Beneath your calm exterior lies an ocean of profound emotions. You feel deeply but express selectively, revealing your true heart only to those who earn your trust.',
      highlights: ['Deep', 'Reserved', 'Loyal'],
    },
    {
      icon: Zap,
      title: 'Core Strengths',
      description: 'Your resilience is legendary. When others falter, you rise. Your determination combined with natural intuition creates an unstoppable force for achievement.',
      highlights: ['Resilient', 'Intuitive', 'Determined'],
    },
    {
      icon: Shield,
      title: 'Growth Areas',
      description: 'Your greatest challenge is learning to release control. Trust in the flow of life and allow others to carry some of your burdens. Vulnerability is not weakness.',
      highlights: ['Trust', 'Delegation', 'Openness'],
    },
  ];

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
            Character Introduction Scene
          </span>
          <h2 className="section-title mb-6">The Hero's Personality</h2>
          <GoldDivider />
        </motion.div>

        {/* Narrator Introduction */}
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
            "You are a <span className="text-gold-shimmer font-semibold">calm thinker</span> with a{' '}
            <span className="text-gold-shimmer font-semibold">deep emotional world</span>. The stars 
            have woven your soul with threads of wisdom, intuition, and an unwavering spirit that 
            commands respect wherever you go..."
          </motion.p>
        </motion.div>

        {/* Personality Traits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              className="card-cosmic rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex gap-6 relative z-10">
                {/* Icon */}
                <div className="zodiac-icon shrink-0">
                  <trait.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl text-gold-shimmer mb-3">
                    {trait.title}
                  </h3>
                  <p className="font-elegant text-lg text-foreground/80 leading-relaxed mb-4">
                    {trait.description}
                  </p>
                  
                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-2">
                    {trait.highlights.map((highlight) => (
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
